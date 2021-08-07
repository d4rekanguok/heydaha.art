require('dotenv').config();
const dropbox = require('dropbox');
const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const { batch, runBatch } = require('./batch.cjs');
const dayjs = require('dayjs');

const mediaDir = path.join(process.cwd(), 'static/media');

const app = new dropbox.Dropbox({
	accessToken: process.env.DROPBOX_TOKEN
});

const widths = [640, 960, 1280];

const getMediaMetadata = async () => {
	try {
		console.log(`Fetching media entries...`);
		const { result } = await app.filesListFolder({ path: process.env.DROPBOX_FOLDER });
		const entriesP = result.entries.map((entry) => async () => {
			const { id, client_modified, path_lower, rev } = entry;
			const cleanId = id.split(':')[1];
			let generated = false;
			let stats = {};

			const dir = path.join(mediaDir, cleanId);
			try {
				await fs.mkdir(dir);
			} catch (err) {
				if (err.code === 'EEXIST') {
					try {
						const generatedStats = await fs.readFile(path.join(dir, '.stats'), 'utf-8');
						stats = JSON.parse(generatedStats);
						if (stats.rev === rev) {
							generated = true;
							console.log(`Generated images found for ${cleanId}, skip regeneration`);
						}
					} catch (accessOkErr) {
						// do nothing
					}
				} else {
					throw err;
				}
			}

			if (!generated) {
				console.log(`No generated images found for ${cleanId}, generating...`);
				const { result } = await app.filesDownload({ path: path_lower });
				const image = sharp(result.fileBinary);
				const { width, height } = await image.metadata();
				stats = {
					ratio: width / height,
					widths,
					extentions: ['webp', 'jpeg'],
					rev
				};
				const resizeP = widths.map(async (maxWidth) => {
					const resized = image.resize({ width: maxWidth });
					await resized.webp().toFile(path.join(dir, `${maxWidth}.webp`));
					await resized.jpeg().toFile(path.join(dir, `${maxWidth}.jpg`));
					await fs.writeFile(path.join(dir, '.stats'), JSON.stringify(stats));
				});

				await Promise.all(resizeP);
				console.log(`Successfully generated images for ${cleanId}`);
			}

			const modifiedDate = dayjs(client_modified).format('MMM DD, YYYY');
      const sortableDate = dayjs(client_modified).unix();

			return {
				id: cleanId,
        sortableDate,
				date: modifiedDate,
				path: path_lower,
				...stats
			};
		});

		const batched = batch(entriesP);
		const entries = await runBatch(batched);

    entries.sort((a, b) => b.sortableDate - a.sortableDate)

		console.log(`Found ${entries.length} files. Writing data to json...`);
		await fs.writeFile(path.join(process.cwd(), 'data/media.json'), JSON.stringify(entries));
		console.log(`Write complete.`);
	} catch (err) {
		console.log(err);
		process.exit();
	}
};

getMediaMetadata();

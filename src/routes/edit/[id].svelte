<script context="module">
	import data from '$data/media.json';

	export const ssr = false;
	export const load = async ({ page, fetch }) => {
		const id = page.params.id;

		const media = data.find((item) => item.id === id);
		const content = await fetch(`/edit/${id}.json`).then((res) => res.json());

		return {
			props: {
				id,
				media,
				content: content.data
			}
		};
	};
</script>

<script>
	import Image from '$lib/Image.svelte';
	export let id;
	export let media;
	export let content;

	const handleSubmit = (e) => {
		const { elements } = e.target;
		const title = elements.title.value;
		const desc = elements.desc.value;
		const tags = elements.tags.value;
		const bodyContent = {
			title,
			desc,
			tags
		};

		fetch(`/edit/${id}.json`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(bodyContent)
		});
	};
</script>

<div class="container">
	<div class="image">
		<Image {id} />
	</div>
	<div class="info">
		<h1>Edit</h1>
		<div>{media.path}</div>
		<div>{media.date}</div>

		<form on:submit|preventDefault={handleSubmit}>
			<div class="form-group">
				<label for="title">Title</label>
				<input type="text" id="title" value={content.title} />
			</div>

			<div class="form-group">
				<label for="desc">Description</label>
				<textarea type="text" id="desc" value={content.desc} />
			</div>

			<div class="form-group">
				<label for="tags">Tags</label>
				<input type="text" id="tags" value={content.tags.join(', ')} />
			</div>

			<button type="submit">Save</button>
		</form>
	</div>
</div>

<style>
	.container {
		position: relative;
		display: flex;
		gap: 2rem;
	}

	.image {
		width: 50%;
	}

	.info {
		width: 50%;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	label {
		display: block;
	}

	textarea {
		height: 200px;
	}

	input,
	textarea {
		font-size: 1.25rem;
		width: 100%;
	}
</style>

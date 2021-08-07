import path from 'path';
// import netlify from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$data: path.resolve('./data')
				}
			}
		}
	}
};

export default config;
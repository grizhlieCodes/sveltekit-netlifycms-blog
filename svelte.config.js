/** @type {import('@sveltejs/kit').Config} */

import vitePluginMarkdown from '@dansvel/vite-plugin-markdown'
import preprocess from 'svelte-preprocess'
import netlify from '@sveltejs/adapter-netlify'
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: () => ({
			plugins: [
				vitePluginMarkdown(),
			],
		}),
		adapter: netlify()
	},
	preprocess: preprocess()
};

export default config;

import adapter from '@sveltejs/adapter-netlify';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [vitePreprocess({ script: true }), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter({
			edge: false,
			split: false,
		}),
		// Inline the (small, gzip ~10 KB) stylesheet so first paint doesn't wait on another request
		inlineStyleThreshold: 64 * 1024,
	},
};

export default config;

import adapter from '@sveltejs/adapter-netlify';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter({
			edge: false,
			split: false,
		})
	},
};

export default config;

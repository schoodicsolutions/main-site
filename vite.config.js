import { sveltekit } from '@sveltejs/kit/vite';
import { loadEnv } from 'vite';

/** @type {import('vite').UserConfigFn} */
const config = ({ mode }) => {
	const env = { ...loadEnv(mode, process.cwd(), 'PUBLIC_'), ...process.env };

	return {
		plugins: [sveltekit()],
		define: {
			// Inlined at build time; unlike $env/static/public, a missing value builds as '' instead of failing
			__HCAPTCHA_SITEKEY__: JSON.stringify(env.PUBLIC_HCAPTCHA_SITEKEY ?? ''),
		},
	};
};

export default config;

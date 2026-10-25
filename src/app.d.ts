// See https://svelte.dev/docs/kit/types#app.d.ts
/** hCaptcha site key, inlined by vite.config.js */
declare const __HCAPTCHA_SITEKEY__: string;

declare namespace App {
	// interface Error {}
	// interface Locals {}
	/** Page metadata every load function may return; consumed by Meta.svelte */
	interface PageData {
		title?: string;
		fullTitle?: string;
		heading?: string;
		description?: string;
		image?: string;
		canonical?: string;
		schema?: Record<string, unknown>[];
	}
	// interface Platform {}
}

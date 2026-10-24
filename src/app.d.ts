// See https://svelte.dev/docs/kit/types#app.d.ts
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

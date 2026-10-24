export interface Metadata {
	/** Page name; rendered as "{title} · Schoodic" */
	title?: string;
	/** Overrides the generated <title> entirely */
	fullTitle?: string;
	heading?: string;
	description?: string;
	image?: string;
	canonical?: string;
}

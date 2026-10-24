import { serviceHref, services } from '$lib/content/services';
import { site } from '$lib/content/site';

export const prerender = true;

const legalPages = Object.keys(import.meta.glob('../\\(md\\)/*.md')).map(
	(path) => `/${path.split('/').pop()!.slice(0, -3)}`,
);

const pages: { path: string; priority: number; changefreq: string }[] = [
	{ path: '/', priority: 1.0, changefreq: 'weekly' },
	...services.map(({ slug }) => ({
		path: serviceHref(slug),
		priority: 0.8,
		changefreq: 'monthly',
	})),
	...legalPages.map((path) => ({ path, priority: 0.2, changefreq: 'yearly' })),
];

export function GET() {
	const lastmod = new Date().toISOString().slice(0, 10);

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		({ path, priority, changefreq }) => `	<url>
		<loc>${site.url}${path}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>${changefreq}</changefreq>
		<priority>${priority.toFixed(1)}</priority>
	</url>`,
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}

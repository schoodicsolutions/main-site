import { error } from '@sveltejs/kit';
import { serviceHref, services } from '$lib/content/services';
import { baseMeta } from '$lib/content/site';
import { breadcrumbs, faqPage, serviceNode } from '$lib/seo/schema';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => services.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params, url }) => {
	const service = services.find(({ slug }) => slug === params.slug);

	if (!service) {
		error(404, { message: 'Not Found' });
	}

	const meta = baseMeta(url);

	return {
		service,
		title: service.seoTitle,
		description: service.seoDescription,
		...meta,
		schema: [
			serviceNode(service),
			faqPage(meta.canonical, service.faqs),
			breadcrumbs([
				{ name: 'Home', path: '/' },
				{ name: service.name, path: serviceHref(service.slug) },
			]),
		],
	};
};

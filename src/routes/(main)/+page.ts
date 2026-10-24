import { homeFaqs } from '$lib/content/faqs';
import { services } from '$lib/content/services';
import { baseMeta, site } from '$lib/content/site';
import { faqPage, serviceNode } from '$lib/seo/schema';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
	const meta = baseMeta(url);

	return {
		fullTitle: 'Schoodic · AI, Cloud & Automation Consulting in Maine',
		description: site.description,
		...meta,
		schema: [faqPage(meta.canonical, homeFaqs), ...services.map(serviceNode)],
	};
};

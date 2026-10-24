import { baseMeta } from '$lib/content/site';
import { error } from '@sveltejs/kit';
import { services } from '$lib/content/services';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => services.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params, url }) => {
	const service = services.find(({ slug }) => slug === params.slug);

	if (!service) {
		error(404, { message: 'Not Found' });
	}

	return {
		service,
		title: service.name,
		description: service.summary,
		...baseMeta(url),
	};
};

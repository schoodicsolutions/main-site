import { baseMeta } from '$lib/content/site';
import type { Metadata } from '../../types';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }): Metadata => ({
	fullTitle: 'Schoodic · AI, Cloud & Automation in Washington County, Maine',
	description:
		'Schoodic helps Down East Maine businesses put AI, data, cloud infrastructure, DevOps, and workflow automation to work. Local team based in Washington County.',
	...baseMeta(url),
});

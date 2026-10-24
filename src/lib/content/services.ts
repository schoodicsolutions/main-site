import type { IconName } from '$lib/Icon.svelte';

export type ServiceSlug =
	'ai-automation' | 'data-ml' | 'cloud' | 'devops' | 'workflows' | 'software';

export interface Service {
	slug: ServiceSlug;
	name: string;
	icon: IconName;
	/** One or two lines for cards and meta descriptions */
	summary: string;
}

/**
 * Single source of truth for service pillars. Drives the home grid, service pages,
 * footer links, sitemap, and contact form interest chips.
 */
export const services: Service[] = [
	{
		slug: 'ai-automation',
		icon: 'sparkles',
		name: 'AI & Automation',
		summary:
			'Put language models to work on the busywork: assistants, document processing, and agents that plug into the tools you already use.',
	},
	{
		slug: 'data-ml',
		icon: 'database',
		name: 'Data & Machine Learning',
		summary:
			'Turn scattered spreadsheets into reliable pipelines, clear dashboards, and models that forecast what comes next.',
	},
	{
		slug: 'cloud',
		icon: 'cloud',
		name: 'Cloud Infrastructure',
		summary:
			'Secure, right-sized infrastructure on AWS, Azure, or GCP: designed, migrated, and managed so you never think about servers.',
	},
	{
		slug: 'devops',
		icon: 'cycle',
		name: 'DevOps & Platform',
		summary:
			'Automated builds, deployments, monitoring, and backups so your software ships safely and stays up.',
	},
	{
		slug: 'workflows',
		icon: 'workflow',
		name: 'Business Workflows',
		summary:
			'Connect your CRM, accounting, scheduling, and email so information flows on its own instead of by copy and paste.',
	},
	{
		slug: 'software',
		icon: 'code',
		name: 'Custom Software & Web',
		summary:
			'Fast, modern websites and web applications built around how your business actually works.',
	},
];

export const serviceHref = (slug: ServiceSlug) => `/services/${slug}`;

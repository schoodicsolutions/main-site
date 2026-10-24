export const site = {
	/** Production origin, used for canonical URLs and structured data */
	url: 'https://schoodic.io',
	name: 'Schoodic',
	legalName: 'Schoodic Solutions',
	tagline: 'Technology partner for Down East Maine',
	description:
		'Schoodic helps Maine businesses put AI, machine learning, cloud infrastructure, DevOps, and workflow automation to work. Local team based in Washington County.',
	ogImage: '/assets/social/og.png',
	calendly: 'https://calendly.com/schoodic',
	towns: ['Calais', 'Eastport', 'Machias', 'Lubec', 'Baileyville', 'Princeton'],
	socials: [
		{ network: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/schoodic' },
		{ network: 'github', label: 'GitHub', href: 'https://www.github.com/schoodicsolutions' },
		{ network: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/schoodicsolutions' },
	],
} as const;

export type SocialNetwork = (typeof site.socials)[number]['network'];

export interface NavItem {
	caption: string;
	/** Section id on the home page */
	section: string;
	cta?: boolean;
}

export const mainNav: NavItem[] = [
	{ caption: 'Services', section: 'services' },
	{ caption: 'Approach', section: 'approach' },
	{ caption: 'About', section: 'about' },
	{ caption: 'Contact', section: 'contact', cta: true },
];

/** Canonical URL and social image shared by every page's load function */
export const baseMeta = (url: URL) => ({
	image: `${site.url}${site.ogImage}`,
	canonical: `${site.url}${url.pathname}`,
});

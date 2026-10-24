import { site } from '$lib/content/site';
import type { Faq, Service } from '$lib/content/services';
import { serviceHref } from '$lib/content/services';

type Node = Record<string, unknown>;

export const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

/** The business itself; every other node points back to it */
export const organization = (): Node => ({
	'@type': ['Organization', 'ProfessionalService'],
	'@id': orgId,
	name: site.name,
	legalName: site.legalName,
	alternateName: site.legalName,
	url: site.url,
	logo: {
		'@type': 'ImageObject',
		url: `${site.url}/android-chrome-512x512.png`,
		width: 512,
		height: 512,
	},
	image: `${site.url}${site.ogImage}`,
	description: site.description,
	slogan: site.tagline,
	address: {
		'@type': 'PostalAddress',
		addressRegion: 'ME',
		addressLocality: 'Washington County',
		addressCountry: 'US',
	},
	areaServed: [
		{ '@type': 'AdministrativeArea', name: 'Washington County, Maine' },
		{ '@type': 'State', name: 'Maine' },
		...site.towns.map((town) => ({ '@type': 'City', name: `${town}, Maine` })),
	],
	knowsAbout: [
		'Artificial intelligence',
		'Large language models',
		'Machine learning',
		'Data engineering',
		'Cloud computing',
		'DevOps',
		'Business process automation',
		'Web development',
	],
	sameAs: site.socials.map((social) => social.href),
	contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'sales',
		url: `${site.url}/#contact`,
		areaServed: 'US',
		availableLanguage: 'English',
	},
});

export const website = (): Node => ({
	'@type': 'WebSite',
	'@id': websiteId,
	url: site.url,
	name: site.name,
	publisher: { '@id': orgId },
	inLanguage: 'en-US',
});

export const webPage = (url: string, name: string, description: string): Node => ({
	'@type': 'WebPage',
	'@id': `${url}#webpage`,
	url,
	name,
	description,
	isPartOf: { '@id': websiteId },
	about: { '@id': orgId },
	inLanguage: 'en-US',
});

export const serviceNode = (service: Service): Node => ({
	'@type': 'Service',
	'@id': `${site.url}${serviceHref(service.slug)}#service`,
	name: service.name,
	serviceType: service.name,
	description: service.seoDescription,
	url: `${site.url}${serviceHref(service.slug)}`,
	provider: { '@id': orgId },
	areaServed: { '@type': 'State', name: 'Maine' },
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: service.name,
		itemListElement: service.capabilities.map((capability) => ({
			'@type': 'Offer',
			itemOffered: { '@type': 'Service', name: capability.title, description: capability.text },
		})),
	},
});

export const faqPage = (url: string, faqs: Faq[]): Node => ({
	'@type': 'FAQPage',
	'@id': `${url}#faq`,
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer },
	})),
});

export const breadcrumbs = (trail: { name: string; path: string }[]): Node => ({
	'@type': 'BreadcrumbList',
	itemListElement: trail.map((crumb, i) => ({
		'@type': 'ListItem',
		position: i + 1,
		name: crumb.name,
		item: `${site.url}${crumb.path}`,
	})),
});

/** Serialize nodes as one @graph, safe to inline in a <script> tag */
export const toJsonLd = (nodes: Node[]) =>
	JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');

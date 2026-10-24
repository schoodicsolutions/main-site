<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Meta from '$lib/Meta.svelte';
	import { site } from '$lib/content/site';
	import '../app.css';

	let { children }: { children: Snippet } = $props();

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: site.name,
		legalName: site.legalName,
		url: site.url,
		logo: `${site.url}/android-chrome-512x512.png`,
		description:
			'AI, machine learning, cloud infrastructure, DevOps, and business automation for Washington County, Maine.',
		address: { '@type': 'PostalAddress', addressRegion: 'ME', addressCountry: 'US' },
		areaServed: [
			{ '@type': 'AdministrativeArea', name: 'Washington County, Maine' },
			...site.towns.map((town) => ({ '@type': 'City', name: `${town}, Maine` })),
		],
		sameAs: site.socials.map((social) => social.href),
	});
</script>

<Meta />

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content="#0A1534" />

	{@html `<script type="application/ld+json">${jsonLd}</script>`}

	<!-- Google Tag Manager -->
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-TWV5QZ3');
	</script>
</svelte:head>

<Header />

<main>
	{@render children()}
</main>

<Footer />

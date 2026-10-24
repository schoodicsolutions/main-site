<script lang="ts">
	import { page } from '$app/state';
	import { site } from './content/site';
	import { organization, toJsonLd, webPage, website } from './seo/schema';

	const title = $derived(
		page.data.fullTitle ?? (page.data.title ? `${page.data.title} · ${site.name}` : site.name),
	);
	const description = $derived(page.data.description ?? site.description);
	const image = $derived(page.data.image ?? `${site.url}${site.ogImage}`);
	const canonical = $derived(page.data.canonical ?? `${site.url}${page.url.pathname}`);

	const jsonLd = $derived(
		toJsonLd([
			organization(),
			website(),
			webPage(canonical, title, description),
			...(page.data.schema ?? []),
		]),
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	{#if page.status >= 400}
		<meta name="robots" content="noindex" />
	{/if}

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="{site.name}: AI, cloud, and automation for Maine businesses"
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	<meta name="geo.region" content="US-ME" />
	<meta name="geo.placename" content="Washington County, Maine" />

	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

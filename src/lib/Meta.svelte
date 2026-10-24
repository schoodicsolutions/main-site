<script lang="ts">
	import { page } from '$app/state';
	import { site } from './content/site';

	const title = $derived(
		page.data.fullTitle ?? (page.data.title ? `${page.data.title} · ${site.name}` : site.name),
	);
</script>

<svelte:head>
	<title>{title}</title>
	{#if page.data.description}
		<meta name="description" content={page.data.description} />
		<meta property="og:description" content={page.data.description} />
	{/if}
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	{#if page.data.image}
		<meta property="og:image" content={page.data.image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
	{#if page.data.canonical}
		<meta property="og:url" content={page.data.canonical} />
		<link rel="canonical" href={page.data.canonical} />
	{/if}
</svelte:head>

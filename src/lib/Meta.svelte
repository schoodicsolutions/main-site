<script>
	import { page } from '$app/stores';

    $: titleString = [
        $page.data.title,
        'Schoodic Media', 
        $page.data.suffix
    ].filter(v => !!v).join(' | ');

    const stripUrl = new URL($page.url);

    [...stripUrl.searchParams.entries()].forEach(
        ([key]) => stripUrl.searchParams.delete(key)
    );

    stripUrl.hash = "";
</script>

<svelte:head>
    <title>{titleString}</title>
    <meta name="description" content={$page.data.description || ''} />
    <meta property="og:url" content={stripUrl.toString()} />
    <meta property="og:title" content={titleString || ''} />
    <meta property="og:description" content={$page.data.description || ''} />
    <meta property="og:image" content={$page.data.image || ''} />

    <link rel="canonical" href={stripUrl.toString()} />
</svelte:head>

<script>
	import { page } from '$app/stores';

    $: titleString = [
        $page.data.title,
        'Schoodic Solutions', 
        $page.data.suffix
    ].filter(v => !!v).join(' | ');
</script>

<svelte:head>
    <title>{titleString}</title>
    <meta name="description" content={$page.data.description || ''} />
    <meta property="og:url" content={$page.data.canonical} />
    <meta property="og:title" content={titleString || ''} />
    <meta property="og:description" content={$page.data.description || ''} />
    <meta property="og:image" content={$page.data.image || ''} />

    <link rel="canonical" href={$page.data.canonical} />
</svelte:head>

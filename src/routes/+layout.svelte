<script lang="ts">
    import MediaQuery from 'svelte-media-queries';

    import '../app.css';

	import Drawer from '$lib/Drawer.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
    import Meta from '$lib/Meta.svelte';
	import Nav from '$lib/Nav.svelte';

	import { drawerOpen } from '../lib/stores';

    let scrollY: number;
    $: scrollY;

    let variant: 'solid' | 'transparent' = 'transparent';
    $: variant = scrollY > 0 ? 'solid' : 'transparent';
</script>

<Meta />

<svelte:head> 
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">

    {#if $drawerOpen}
        <style>
            body { overflow: hidden }
        </style>
    {/if}

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-MKT51K17JR"></script>

    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-MKT51K17JR');
    </script>
</svelte:head>

<svelte:window bind:scrollY />

<Header bind:variant />

<slot />

<Footer />

<MediaQuery query="(max-width: 1024px)" let:matches>
    {#if matches}
        <Drawer>
            <Nav variant="col" onNavigate={() => $drawerOpen = !$drawerOpen}/>
        </Drawer>
    {/if}
</MediaQuery>
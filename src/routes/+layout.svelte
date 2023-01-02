<script lang="ts">
	import Drawer from "$lib/Drawer.svelte";
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
	import Nav from "$lib/Nav.svelte";
	import { drawerOpen, metadata } from "../stores";
	import MediaQuery from "svelte-media-queries";
    import "../app.css";

    let scrollY: number;
    $: scrollY;

    let variant: 'solid' | 'transparent' = 'transparent';
    $: variant = scrollY > 0 ? 'solid' : 'transparent';

    const site = 'Schoodic Media';
    $: titleString = [$metadata.title, site, $metadata.suffix].filter(v => !!v).join(' | ');

</script>

<svelte:head> 
    <title>{titleString}</title>

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
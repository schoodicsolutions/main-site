<script lang="ts">
    import MediaQuery from "svelte-media-queries";

    import "../app.css";

	import Drawer from "$lib/Drawer.svelte";
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
    import Meta from "$lib/Meta.svelte";
	import Nav from "$lib/Nav.svelte";

	import { drawerOpen } from "../stores";

    let scrollY: number;
    $: scrollY;

    let variant: 'solid' | 'transparent' = 'transparent';
    $: variant = scrollY > 0 ? 'solid' : 'transparent';
</script>

<Meta />

<svelte:head> 
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
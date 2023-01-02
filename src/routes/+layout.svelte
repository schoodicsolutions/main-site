<script lang="ts">
	import Drawer from "$lib/Drawer.svelte";
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
	import Nav from "$lib/Nav.svelte";
	import { drawerOpen } from "../stores";
	import MediaQuery from "svelte-media-queries";
    import "../app.css";

    let scrollY: number;
    $: scrollY;

    let variant: 'solid' | 'transparent' = 'transparent';
    $: variant = scrollY > 0 ? 'solid' : 'transparent';

    // This works but breaks SSR
    // $: document.body.style.overflow = drawerOpen ? 'hidden' : 'auto';
</script>

<svelte:head> 
    <title>Schoodic Media</title>
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
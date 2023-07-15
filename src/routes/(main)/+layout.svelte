<script lang="ts">
    import MediaQuery from 'svelte-media-queries';

	import Drawer from '$lib/Drawer.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/Nav.svelte';

	import { drawerOpen } from '../../lib/stores';

    let scrollY: number;
    $: scrollY;

</script>

<svelte:head>
    {#if $drawerOpen}
        <style>
            body { overflow: hidden }
        </style>
    {/if}
</svelte:head>

<Header />

<slot />

<Footer />

<MediaQuery query="(max-width: 1024px)" let:matches>
    {#if matches}
        <Drawer>
            <Nav variant="col" onNavigate={() => $drawerOpen = !$drawerOpen}/>
        </Drawer>
    {/if}
</MediaQuery>
<script lang="ts">
    import MediaQuery from 'svelte-media-queries';

	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	import { drawerOpen } from '../../lib/stores';
	import MobileNav from '$lib/MobileNav.svelte';

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
        <MobileNav />
    {/if}
</MediaQuery>
<script lang="ts">
	import { page } from "$app/stores";
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
    import "../app.css";

    let scrollY: number;
    $: scrollY;

    let variant: 'solid' | 'transparent' = 'transparent';
    $: variant = $page.error || $page.url.pathname === "/" ? (scrollY > 0 ? 'solid' : 'transparent') : 'solid';
</script>

<svelte:head> 
    <title>Schoodic Media</title>
</svelte:head>

<svelte:window bind:scrollY />

<Header bind:variant />

<slot />

<Footer />

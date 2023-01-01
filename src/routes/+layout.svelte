<script lang="ts">
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
    import "../app.css";

    let scrollY: number;
    $: scrollY;

    let variant: 'solid' | 'transparent' = 'transparent';
    $: variant = scrollY > 64 ? 'solid' : 'transparent';
</script>

<svelte:head> 
    <title>Schoodic Media</title>
</svelte:head>

<svelte:window bind:scrollY />

<Header bind:variant />

<slot />

<Footer />

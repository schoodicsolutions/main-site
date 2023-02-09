<script lang="ts">

    import { page } from '$app/stores';
    import MediaQuery from 'svelte-media-queries';

	import Drawer from '$lib/Drawer.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/Nav.svelte';

	import { drawerOpen } from '$lib/stores';
	import ContactForm from '$lib/ContactForm.svelte';

    let scrollY: number;
    $: scrollY;

    let bg: 'blue' | 'white' = 'blue';
    $: bg = scrollY > 0 ? 'white' : 'blue';
</script>

<svelte:head>
    {#if $drawerOpen}
        <style>
            body { overflow: hidden }
        </style>
    {/if}
</svelte:head>

<svelte:window bind:scrollY />

<Header bind:bg variant="solid" />

<MediaQuery query="(max-width: 1024px)" let:matches>
    {#if matches}
        <Drawer>
            <Nav variant="col" onNavigate={() => $drawerOpen = !$drawerOpen}/>
        </Drawer>
    {/if}
</MediaQuery>

<section class="pt-28">
    <h1 class="text-4xl md:text-5xl mb-8">{$page.data.heading || $page.data.title}</h1>
    <div class="w-[800px] max-w-full flex flex-col gap-4 text-lg">
        <slot />
    </div>
</section>

<section class="bg-almond">
    <h3 class="font-bold text-2xl md:text-4xl text-center px-6 tracking-tight">{$page.data.contactBlurb || 'Want to work with us?'}</h3>
    <ContactForm />
</section>

<Footer />
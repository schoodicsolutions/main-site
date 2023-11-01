<script lang="ts">

    import { page } from '$app/stores';
    import MediaQuery from 'svelte-media-queries';

	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
    
	import { drawerOpen } from '$lib/stores';
	import ContactForm from '$lib/ContactForm.svelte';
	import MobileNav from '$lib/MobileNav.svelte';
</script>

<svelte:head>
    {#if $drawerOpen}
        <style>
            body { overflow: hidden }
        </style>
    {/if}
</svelte:head>

<Header />

<MediaQuery query="(max-width: 1024px)" let:matches>
    {#if matches}
        <MobileNav />
    {/if}
</MediaQuery>

<main>
    <section class="pt-12">
        <h1 class="text-4xl md:text-5xl mb-8 text-center">{$page.data.heading || $page.data.title}</h1>
        <div class="flex flex-col gap-4 text-lg max-w-screen-xl m-auto">
            <slot />
        </div>
    </section>
    
    <section>
        <div class="w-full max-w-screen-xl m-auto bg-brand text-white rounded-md px-4 sm:px-8 xl:px-40 pt-14 pb-12">
            <h2 class="mb-9 text-center">Get In Touch</h2>
            <ContactForm />
        </div>
    </section>
</main>

<Footer />
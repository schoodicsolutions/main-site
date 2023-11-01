<script lang="ts">
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
    import MediaQuery from 'svelte-media-queries';
	import MenuIcon from './icons/MenuIcon.svelte';
	import { drawerOpen } from './stores';

    let scrollY: number = 0;
    let scrolled = false;

    $: scrollY;
    $: scrolled = scrollY > 100;

    console.log(scrollY, scrolled);
</script>

<svelte:window bind:scrollY={scrollY} />

<header 
    class={"sticky w-full z-30 py-2 lg:py-4 border-b border-gray-200 top-0 bg-white transition-all" + (scrolled ? ' shadow-lg' : '')}
>
    <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWV5QZ3"
                title="Google Tag Manager"
                height="0" width="0" style="display:none;visibility:hidden">
            </iframe>
        </noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div class="flex max-w-[1647px] px-5 lg:px-10 mx-auto justify-between items-center">
        <a href="/" class="navlink">
            <MediaQuery query="(max-width: 1024px)" let:matches>
                <div class="ml-4 lg:m-0">
                    {#if matches}
                        <Logo variant="normal" size="medium"/>
                    {:else}
                        <Logo variant="normal" size="large"/>
                    {/if}
                </div>
            </MediaQuery>
        </a>
        <MediaQuery query="(max-width: 1024px)" let:matches>
            {#if matches}
                <button 
                    class="button icon text-black mr-1 mt-1"
                    aria-haspopup="true"
                    aria-label="Main Menu"
                    on:click={() => $drawerOpen = !$drawerOpen}>
                    <MenuIcon />
                </button>
            {:else}
                <Nav />
            {/if}
        </MediaQuery>
    </div>
</header>
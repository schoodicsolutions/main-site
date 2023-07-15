<script lang="ts">
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
    import MediaQuery from 'svelte-media-queries';
	import MenuIcon from './icons/MenuIcon.svelte';
	import { drawerOpen } from './stores';
</script>

<header 
    class="sticky w-full transition-colors transition-spacing z-30 py-8 lg:border-b border-gray-200"
>
    <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWV5QZ3"
                title="Google Tag Manager"
                height="0" width="0" style="display:none;visibility:hidden">
            </iframe>
        </noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div class="flex max-w-[1567px] px-10 mx-auto justify-between items-center">
        <a href="/" class="navlink">
            <Logo variant="normal" />
        </a>
        <MediaQuery query="(min-width: 1024px)" let:matches>
            {#if matches}
                <Nav />
            {/if}
        </MediaQuery>
        <MediaQuery query="(max-width: 1024px)" let:matches>
            {#if matches}
                <button 
                    class="button icon text-black"
                    aria-haspopup="true"
                    aria-label="Main Menu"
                    on:click={() => $drawerOpen = !$drawerOpen}>
                    <MenuIcon />
                </button>

            {/if}
        </MediaQuery>
    </div>
</header>
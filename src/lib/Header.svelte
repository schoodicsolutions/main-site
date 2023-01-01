<script lang="ts">
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
    import MediaQuery from 'svelte-media-queries';
	import MenuIcon from './icons/MenuIcon.svelte';

    export let variant: 'transparent' | 'solid' = 'solid';

    $: [transparent, solid] = [variant === 'transparent', variant === 'solid'];

</script>

<header 
    class="fixed w-full transition-colors transition-spacing z-50"
    class:py-6={transparent}
    class:py-3={solid}
    class:bg-white={solid}
    class:shadow-lg={solid}
>
    <div class="flex max-w-[1440px] px-3 pl-6 lg:px-8 mx-auto justify-between items-center">
        <Logo variant={transparent ? 'white' : solid ? 'normal' : undefined} />
        <MediaQuery query="(min-width: 1024px)" let:matches>
            {#if matches}
                <Nav color={transparent ? 'white' : solid ? 'black' : undefined} />
            {/if}
        </MediaQuery>
        <MediaQuery query="(max-width: 1024px)" let:matches>
            {#if matches}
                <button class="button button-icon" class:text-white={transparent} class:text-black={solid} >
                    <MenuIcon />
                </button>
            {/if}
        </MediaQuery>
    </div>
</header>
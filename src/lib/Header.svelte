<script lang="ts">
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
    import MediaQuery from 'svelte-media-queries';
	import MenuIcon from './icons/MenuIcon.svelte';
	import Drawer from './Drawer.svelte';

    export let variant: 'transparent' | 'solid' = 'solid';

    $: open = false;
    const toggle = () => open = !open;

    $: [transparent, solid] = [variant === 'transparent', variant === 'solid'];
    $: padding = transparent ? 'py-3 lg:py-6' : solid ? 'py-1 lg:py-3' : '';
</script>

<header 
    class={`fixed w-full transition-colors transition-spacing z-30 ${padding}`}
    class:bg-white={solid}
    class:shadow-lg={solid}
>
    <div class="flex max-w-[1440px] px-3 pl-6 lg:px-8 mx-auto justify-between items-center">
        <a href="/">
            <Logo variant={transparent ? 'white' : solid ? 'normal' : undefined} />
        </a>
        <MediaQuery query="(min-width: 1024px)" let:matches>
            {#if matches}
                <Nav color={transparent ? 'white' : solid ? 'black' : undefined} />
            {/if}
        </MediaQuery>
        <MediaQuery query="(max-width: 1024px)" let:matches>
            {#if matches}
                <button class="button button-icon" class:text-white={transparent} class:text-black={solid} on:click={toggle}>
                    <MenuIcon />
                </button>

            {/if}
        </MediaQuery>
    </div>
</header>

<MediaQuery query="(max-width: 1024px)" let:matches>
    {#if matches}
        <Drawer bind:open>
            <Nav variant="col" onNavigate={toggle}/>
        </Drawer>
    {/if}
</MediaQuery>


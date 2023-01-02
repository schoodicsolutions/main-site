<script lang="ts">
	import { page } from '$app/stores';
	import { scrollTo } from './scroll';
	import { currentSection } from './scroll/stores';

    export let color: 'black' | 'white' = 'black';
    export let variant: 'row' | 'col' = 'row';
    export let onNavigate: (() => void) | undefined = undefined;

    $: [row, col] = [variant === 'row', variant === 'col'];
    $: [black, white] = [color === 'black', color === 'white']

    const menu = [
        {
            caption: 'Home',
            pathname: '/', 
            scrollTo: '+top',
        },
        {
            caption: 'About',
            pathname: '/',
            scrollTo: 'about',
        },
        {
            caption: 'Services',
            pathname: '/',
            scrollTo: 'services',
        },
        {
            caption: 'Contact',
            pathname: '/',
            scrollTo: 'contact',
        },
    ];

    $: section = $currentSection;
</script>

<nav 
    aria-label="Main" 
    class="transition-colors"
    class:text-black={black}
    class:text-white={white}
>
    <ul 
        class="flex gap-8 font-semibold" 
        class:flex-row={row}
        class:flex-col={col}
        class:items-center={col}
    >
        {#each menu as link}
            <li class="flex flex-col mt-1">
                <!-- svelte-ignore a11y-missing-attribute -->
                {#if link.scrollTo}
                    <a 
                        use:scrollTo={{
                            pathname: link.pathname,
                            scrollTo: link.scrollTo,
                            onNavigate,
                        }}
                    >
                        {link.caption}
                    </a>
                {/if}
                {#if !link.scrollTo}
                <a 
                    href={link.pathname}
                >
                    {link.caption}
                </a>
                {/if}
                <div 
                    class="h-0.5 w-full -mt-0.5"
                    class:bg-brand={black}
                    class:bg-white={white}
                    class:invisible={$page.url.pathname !== link.pathname || section !== link.scrollTo}
                />
            </li>
        {/each}
    </ul>
</nav>
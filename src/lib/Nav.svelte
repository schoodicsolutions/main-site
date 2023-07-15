<script lang="ts">
	import { page } from '$app/stores';
	import { scrollTo, section } from 'svelte-scroll-nav';
    
    export let variant: 'row' | 'col' = 'row';
    export let onNavigate: (() => void) | undefined = undefined;

    $: [row, col] = [variant === 'row', variant === 'col'];

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
            caption: 'Our Team',
            pathname: '/',
            scrollTo: 'team',
        },
        {
            caption: 'Contact Us',
            pathname: '/',
            scrollTo: 'contact',
            as: 'button',
        },
    ];

</script>

<nav 
    aria-label="Main" 
    class="text-black"
>
    <ul 
        class="flex gap-8 font-semibold items-center" 
        class:flex-row={row}
        class:flex-col={col}
    >
        {#each menu as link}
            <li class="flex flex-col mt-1">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a 
                    class:navlink={link.as !== 'button'}
                    class:active={$page.url.pathname === link.pathname && $section === link.scrollTo}
                    class:button={link.as === 'button'}
                    class:blue={link.as === 'button'}
                    href={link.pathname}
                    use:scrollTo={
                        link.scrollTo ? {
                            section: link.scrollTo,
                            onNavigate,
                        } : undefined
                    }
                >
                    {link.caption}
                </a>
            </li>
        {/each}
    </ul>
</nav>
<script lang="ts">
	import { page } from '$app/stores';
	import { scrollTo, section } from 'svelte-scroll-nav';
	import { linkClicked } from 'svelte-scroll-nav/stores';

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
            <li class="flex justify-center shrink-0 w-full lg:w-auto">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a 
                    class:navlink={link.as !== 'button'}
                    class:active={$page.url.pathname === link.pathname && $section === link.scrollTo}
                    class:button={link.as === 'button'}
                    class:blue={link.as === 'button'}
                    class:w-full={link.as === 'button' && col}
                    class:lg:ml-1={link.as === 'button' && row}
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
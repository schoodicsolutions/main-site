<script lang="ts">
    import { onMount } from 'svelte';

    import { page } from "$app/stores";
    import { goto } from '$app/navigation';

	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
    import "../app.css";

    let scrollY: number;
    $: scrollY;

    let variant: 'solid' | 'transparent' = 'transparent';
    $: variant = scrollY > 64 ? 'solid' : 'transparent';

    onMount(() => {
        let observer = new IntersectionObserver(
            (e) => {
                const entries = e.filter(entry => entry.isIntersecting)
                const last = entries.pop();
                if (!last || !last.target) {
                    return;
                }
                if (last.target.id) {
                    console.log(last.target.id);
                    const navOptions = { replaceState: true, noScroll: true };
                    if (last.target.id === '__top') {
                        goto($page.url.pathname, navOptions);
                        return;
                    }
                    const hash = `#${last.target.id}`;
                    goto(`${$page.url.pathname}${hash}`, navOptions);
                }
            },
            {
                threshold: 1,
            }
        );

        document.querySelectorAll("[data-autohash]").forEach(i => observer.observe(i));
    });
</script>

<svelte:head> 
    <title>Schoodic Media</title>
</svelte:head>

<svelte:window bind:scrollY />

<Header bind:variant />

<slot />

<Footer />

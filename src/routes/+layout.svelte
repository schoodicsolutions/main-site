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
        const options = { threshold: 1 };
        const callback = (e: IntersectionObserverEntry[]) => {
            const entry = e.find(entry => entry.isIntersecting);

            if (!entry || !entry.target || !entry.target.id) {
                return;
            }

            const navOptions = { replaceState: true, noScroll: true };

            console.log(entry.target.id);

            if (entry.target.id === '__top') {
                goto($page.url.pathname, navOptions);
                return;
            }

            const hash = `#${entry.target.id}`;
            goto(`${$page.url.pathname}${hash}`, navOptions);
        };

        let observer = new IntersectionObserver(callback, options);

        document.querySelectorAll("[data-autohash]").forEach(
            (i) => observer.observe(i)
        );
    });
</script>

<svelte:head> 
    <title>Schoodic Media</title>
</svelte:head>

<svelte:window bind:scrollY />

<Header bind:variant />

<slot />

<Footer />

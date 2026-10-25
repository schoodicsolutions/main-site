<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Meta from '$lib/Meta.svelte';
	import interLatin from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
	import '../app.css';

	let { children }: { children: Snippet } = $props();
</script>

<Meta />

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="preload" href={interLatin} as="font" type="font/woff2" crossorigin="anonymous" />
	<meta name="theme-color" content="#0A1534" />

	<!-- Google Tag Manager, started once the page is idle so it doesn't compete with first paint -->
	<script>
		(function (w, d, s, l, i) {
			var start = function () {
				w[l] = w[l] || [];
				w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				f.parentNode.insertBefore(j, f);
			};
			var idle = function () {
				'requestIdleCallback' in w
					? w.requestIdleCallback(start, { timeout: 3000 })
					: setTimeout(start, 1500);
			};
			d.readyState === 'complete' ? idle() : w.addEventListener('load', idle);
		})(window, document, 'script', 'dataLayer', 'GTM-TWV5QZ3');
	</script>
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-ink focus:shadow-xl"
>
	Skip to content
</a>

<Header />

<main id="main" tabindex="-1" class="focus:outline-none">
	{@render children()}
</main>

<Footer />

<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import { trapFocus } from './actions/trapFocus';
	import Icon from './Icon.svelte';
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';

	let scrollY = $state(0);
	let menuOpen = $state(false);

	const scrolled = $derived(scrollY > 24);

	afterNavigate(() => (menuOpen = false));

	$effect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
	});
</script>

<svelte:window bind:scrollY onkeydown={(e) => e.key === 'Escape' && (menuOpen = false)} />

<header
	class="sticky top-0 z-30 w-full border-b transition-colors duration-300"
	class:bg-midnight={!scrolled}
	class:border-transparent={!scrolled}
	class:bg-midnight-950={scrolled}
	class:border-white={scrolled}
	class:border-opacity-10={scrolled}
>
	<!-- Google Tag Manager (noscript) -->
	<noscript>
		<iframe
			src="https://www.googletagmanager.com/ns.html?id=GTM-TWV5QZ3"
			title="Google Tag Manager"
			height="0"
			width="0"
			style="display:none;visibility:hidden"
		></iframe>
	</noscript>

	<div class="container-site flex h-16 lg:h-20 items-center justify-between">
		<a href="/" aria-label="Schoodic home">
			<Logo size="medium" />
		</a>

		<div class="hidden lg:block">
			<Nav />
		</div>

		<button
			class="button icon ghost-dark lg:hidden"
			aria-label="Open menu"
			aria-expanded={menuOpen}
			aria-controls="mobile-menu"
			onclick={() => (menuOpen = true)}
		>
			<Icon name="menu" />
		</button>
	</div>
</header>

{#if menuOpen}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 z-40 bg-midnight-950/60 backdrop-blur-sm lg:hidden"
		aria-hidden="true"
		onclick={() => (menuOpen = false)}
	></div>
	<div
		id="mobile-menu"
		use:trapFocus
		role="dialog"
		aria-modal="true"
		aria-label="Menu"
		transition:fly={{ duration: 300, y: -24 }}
		class="fixed inset-x-0 top-0 z-50 bg-midnight px-5 pb-8 shadow-2xl lg:hidden"
	>
		<div class="flex h-16 items-center justify-between">
			<Logo size="medium" />
			<button
				class="button icon ghost-dark"
				aria-label="Close menu"
				onclick={() => (menuOpen = false)}
			>
				<Icon name="close" />
			</button>
		</div>
		<div class="pt-4">
			<Nav variant="col" onNavigate={() => (menuOpen = false)} />
		</div>
	</div>
{/if}

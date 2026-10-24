<script lang="ts">
	import { page } from '$app/state';
	import { activeSection } from './activeSection.svelte';
	import { mainNav } from './content/site';

	interface Props {
		variant?: 'row' | 'col';
		onNavigate?: () => void;
	}

	let { variant = 'row', onNavigate }: Props = $props();

	const onHome = $derived(page.url.pathname === '/');
</script>

<nav aria-label="Main">
	<ul
		class="flex items-center font-medium"
		class:gap-8={variant === 'row'}
		class:flex-col={variant === 'col'}
		class:items-stretch={variant === 'col'}
		class:gap-2={variant === 'col'}
	>
		{#each mainNav as link (link.section)}
			<li>
				{#if link.cta}
					<a
						class="button primary"
						class:w-full={variant === 'col'}
						class:mt-4={variant === 'col'}
						href="/#{link.section}"
						onclick={onNavigate}
					>
						{link.caption}
					</a>
				{:else}
					<a
						class="navlink"
						class:block={variant === 'col'}
						class:py-3={variant === 'col'}
						class:text-lg={variant === 'col'}
						class:active={onHome && activeSection.id === link.section}
						aria-current={onHome && activeSection.id === link.section ? 'location' : undefined}
						href="/#{link.section}"
						onclick={onNavigate}
					>
						{link.caption}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

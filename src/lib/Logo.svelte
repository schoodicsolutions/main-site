<script lang="ts">
	import Mark from './Mark.svelte';

	interface Props {
		variant?: 'dark' | 'light';
		size?: 'small' | 'medium' | 'large';
	}

	let { variant = 'light', size = 'medium' }: Props = $props();

	const sizes = {
		small: { mark: 'h-[18px]', text: 'text-xl' },
		medium: { mark: 'h-[22px]', text: 'text-2xl' },
		large: { mark: 'h-[28px]', text: 'text-[30px]' },
	};
</script>

<span class="inline-flex items-center gap-1.5 select-none">
	<Mark
		height="100%"
		class="{sizes[size].mark} {variant === 'light' ? 'text-croix' : 'text-brand'}"
	/>
	<span
		class="font-brand font-bold tracking-tight leading-none {sizes[size].text}"
		class:text-white={variant === 'light'}
		class:text-ink={variant === 'dark'}
	>
		Schoodic
	</span>
</span>

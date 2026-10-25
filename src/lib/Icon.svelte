<script module lang="ts">
	/** Outline icons, drawn on a 24×24 grid with round caps */
	const stroked = {
		menu: 'M4 6h16M4 12h16M4 18h16',
		close: 'M6 6l12 12M18 6 6 18',
		'arrow-right': 'M5 12h14M13 6l6 6-6 6',
		check: 'M5 12.5l4.5 4.5L19 7.5',
		sparkles:
			'M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z',
		database:
			'M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zM4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6',
		cloud: 'M7 19a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 17.8 8.6 5.2 5.2 0 0 1 17 19z',
		cycle: 'M20 12a8 8 0 0 1-14.3 4.9M4 12a8 8 0 0 1 14.3-4.9M18.5 3v4.5H14M5.5 21v-4.5H10',
		workflow: 'M3 4h6v6H3zM15 14h6v6h-6zM6 10v3a3 3 0 0 0 3 3h6',
		code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16',
	};

	/** Brand marks (Simple Icons, CC0), filled */
	const filled = {
		github:
			'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
	};

	export type IconName = keyof typeof stroked | keyof typeof filled;
</script>

<script lang="ts">
	interface Props {
		name: IconName;
		size?: number | string;
		class?: string;
		label?: string;
	}

	let { name, size = 24, class: className = '', label }: Props = $props();

	const isFilled = $derived(name in filled);
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	class={className}
	fill={isFilled ? 'currentColor' : 'none'}
	stroke={isFilled ? 'none' : 'currentColor'}
	stroke-width="1.75"
	stroke-linecap="round"
	stroke-linejoin="round"
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
>
	<path
		d={isFilled ? filled[name as keyof typeof filled] : stroked[name as keyof typeof stroked]}
	/>
</svg>

<script lang="ts">
	import SvgIcon from './SvgIcon.svelte';
	export let width: string | number | null | undefined = '24px';
	export let height: string | number | null | undefined = '24px';

	let className: string | null | undefined = undefined;
	export { className as class };
</script>

<SvgIcon {width} {height} class={className}>
	<path
		d="M 8.2500233,4.5 15.750023,12 8.2500233,19.5"
		style="fill:none;stroke:currentColor;stroke-width:2.25;stroke-linecap:round;stroke-linejoin:round"
	/>
</SvgIcon>

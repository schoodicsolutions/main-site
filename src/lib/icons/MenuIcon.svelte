<script lang="ts">
	import SvgIcon from './SvgIcon.svelte';
    export let width: string | number | null | undefined = '24px';
    export let height: string | number | null | undefined = '24px';

    let className: string | null | undefined = undefined;
    export {className as class};
</script>

<SvgIcon
    {width}
    {height}
    class={className}
>
    <path d="M3.75 6H20.25M3.75 12H20.25M3.75 18H20.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
</SvgIcon>
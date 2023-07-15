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
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
</SvgIcon>
<script lang="ts">
	import Mark from './Mark.svelte';

    export let variant: 'normal' | 'white' = 'normal';
    $: [normal, white] = [variant === 'normal', variant === 'white']
</script>

<div class="flex items-center select-none" aria-roledescription="logo">
    <Mark 
        height="31px"
        variant={normal ? 'blue' : white ? 'white' : undefined}
    />
    <span
        class="font-brand font-bold text-3xl tracking-tight transition-colors"
        class:text-black={normal}
        class:text-white={white}
    >
        Schoodic Media
    </span>
</div>
<script lang="ts">
	import Mark from './Mark.svelte';

    export let variant: 'normal' | 'white' = 'normal';
    $: [normal, white] = [variant === 'normal', variant === 'white']
</script>

<div class="flex items-center select-none" aria-roledescription="logo" aria-label="Schoodic Media Logo">
    <div class="h-6 md:h-8">
        <Mark 
            height="100%"
            variant={normal ? 'blue' : white ? 'white' : undefined}
        />
    </div>
    <span
        class="font-brand font-bold text-2xl md:text-3xl tracking-tight transition-colors"
        class:text-black={normal}
        class:text-white={white}
    >
        Schoodic Media
    </span>
</div>
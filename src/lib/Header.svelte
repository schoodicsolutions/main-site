<script lang="ts">
	import Logo from "./Logo.svelte";

    export let variant: 'transparent' | 'solid' = 'solid';

    $: [transparent, solid] = [variant === 'transparent', variant === 'solid'];
</script>

<header 
    class="px-3 py-3 fixed w-full transition-colors"
    class:bg-white={solid}
    class:shadow-lg={solid}
>
    <div class="flex max-w-[1280px] mx-auto justify-between">
        <Logo variant={transparent ? 'white' : solid ? 'normal' : undefined} />
    </div>
</header>
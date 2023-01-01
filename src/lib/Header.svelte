<script lang="ts">
	import Logo from "./Logo.svelte";

    export let variant: 'transparent' | 'solid' = 'solid';

    $: [transparent, solid] = [variant === 'transparent', variant === 'solid'];

</script>

<header 
    class="fixed w-full transition-colors transition-spacing z-50"
    class:py-6={transparent}
    class:py-3={solid}
    class:bg-white={solid}
    class:shadow-lg={solid}
>
    <div class="flex max-w-[1440px] px-3 lg:px-8 mx-auto justify-between">
        <Logo variant={transparent ? 'white' : solid ? 'normal' : undefined} />
    </div>
</header>
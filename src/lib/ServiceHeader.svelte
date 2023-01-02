<script lang="ts">
	import Mark from "./Mark.svelte";
	import Wave from "./Wave.svelte";

    let scrollY: number;
    let clientHeight: number;

    $: scrollY; $: clientHeight;

    $: opacity = 1 - Math.round(Math.min(1, scrollY / clientHeight) * 100) / 100;
</script>

<svelte:window bind:scrollY />

<section class="hero" bind:clientHeight style:opacity>
    <div class="w-screen pt-40 h-96 text-white">
        <slot />
    </div>
    <div class="absolute bottom-0 w-full h-8 lg:h-[6vw]">
        <Wave class="text-white" height="100%" />
    </div>
</section>
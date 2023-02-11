<script lang="ts">
	import Mark from './Mark.svelte';
	import Wave from './Wave.svelte';

    let scrollY: number;
    let clientHeight: number;

    $: scrollY; $: clientHeight;

    $: opacity = 1 - Math.round(Math.min(1, scrollY / clientHeight) * 100) / 100;
</script>

<svelte:window bind:scrollY />

<section class="hero" bind:clientHeight style:opacity>
    <div 
        class="lg:h-[768px] h-[calc(100vh+32px)] max-w-[1440px] mx-auto overflow-hidden relative pt-40 justify-center lg:justify-start"
    >
        <div class="absolute left-1/2 lg:transform-none -translate-x-1/2 bottom-0 lg:static w-[1024px] lg:w-[800px] xl:w-[1024px]">
            <Mark width="100%" />
        </div>
        <div class="flex absolute top-0 h-full w-full flex-col lg:flex-row  px-4">
            <div class="w-full" />
            <div class="w-full flex flex-col gap-5 items-center justify-center grow text-white">
                <h1>
                    Let's Design<br />
                    Your Business<br />
                    Together<br />
                </h1>
                <h2 class="hero-h2">
                    Boutique Website Design<br/>
                    & App Development<br/>
                    in Downeast Maine
                </h2>
            </div>
        </div>
    </div>
    <div class="absolute bottom-0 w-full h-8 lg:h-[6vw]">
        <Wave class="text-white" height="100%" />
    </div>
</section>
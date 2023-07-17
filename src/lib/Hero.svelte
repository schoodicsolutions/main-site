<script lang="ts">
	import MediaQuery from 'svelte-media-queries';
import { scrollTo } from 'svelte-scroll-nav';

    let scrollY: number;
    let clientHeight: number;

    $: scrollY; $: clientHeight;

    $: opacity = 1 - Math.round(Math.min(1, scrollY / clientHeight) * 100) / 100;
</script>

<svelte:window bind:scrollY />

<section 
    bind:clientHeight
    style:opacity
    class="flex-col lg:flex-row lg:justify-between"
>
    <div class="flex flex-col gap-4">
        <h1>
            EMPOWERING <span class="text-brand">BUSINESSES</span><br />
            WITH <span class="text-brand">CUTTING-EDGE</span> WEB<br/>
            APPLICATIONS
        </h1>
        <MediaQuery query="(max-width: 1024px)" let:matches>
            <p class="text-center lg:text-left lg:text-2xl">
                Transforming Ideas into Seamless Online
                {#if matches} <br /> {/if}
                Experiences for
                {#if !matches} <br /> {/if}
                Increased Engagement and Success
            </p>
            <div class="flex gap-5">
                <a class="button blue large contained w-full md:w-fit m-auto lg:m-0" href="/" use:scrollTo={{section: "contact"}}>Contact Us</a>
                {#if !matches}
                    <a class="button blue large outlined" href="/" use:scrollTo={{section: "about"}}>Learn More</a>
                {/if}
            </div>
        </MediaQuery>

    </div>
    <div>
        <img 
            src="/assets/website-examples.png"
            alt="A laptop, a mobile phone and a tablet showcasing one of Schoodic's designs"
            class="w-[678px] lg:-mt-10"
        />
    </div>
</section>
<script lang="ts">
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
    class="flex-row"
>
    <div class="flex flex-col gap-4">
        <h1>
            EMPOWERING <span class="text-brand">BUSINESSES</span><br />
            WITH <span class="text-brand">CUTTING-EDGE</span> WEB<br/>
            APPLICATIONS
        </h1>
        <p>
            Transforming Ideas into Seamless Online Experiences for<br />
            Increased Engagement and Success
        </p>
        <div class="flex gap-5">
            <a class="button blue contained" href="/" use:scrollTo={{section: "contact"}}>Contact Us</a>
            <a class="button blue outlined" href="/" use:scrollTo={{section: "about"}}>Learn More</a>
        </div>
    </div>
    <div>
        <img src="/assets/website-examples.png" alt="Hero Image" />
    </div>
</section>
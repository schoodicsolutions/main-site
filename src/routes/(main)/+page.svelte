<script lang="ts">
    import { ScrollWatcher, scrollRef, scrollTo } from 'svelte-scroll-nav';

	import ContactForm from '$lib/ContactForm.svelte';
	import Hero from '$lib/Hero.svelte';
	import ServiceCards from '$lib/ServiceCards.svelte';
</script>

<ScrollWatcher />

<main>

    <Hero />
    <section use:scrollRef={'about'}>
        <div class="flex flex-col lg:flex-row items-center lg:gap-[111px]">
            <div class="shrink-0">
                <img
                    src="/assets/laptop-in-forest.webp"
                    alt="A laptop with code on the screen, nestled among moss in the forest"
                    class="w-full lg:w-auto lg:h-[422px] rounded-lg"
                />
            </div>
            <div class="grow">
                <h2 class="mb-9">About Schoodic Solutions</h2>
                <h4 class="mb-3">We're a Maine Business</h4>
                <p class="mb-7">
                   Schoodic Solutions is the only tech company in Washington County, Maine offering full stack web application development.
                   We're a family business, located in Calais, Maine and founded by cousins Ryan Prescott and Clay Coffin. Our goal is to help businesses near and far
                   make their dreams a reality.
                </p>
    
                <h4 class="mb-3">Modern and Knowledgable</h4>
                <p class="mb-7">
                   We use the latest in modern full-stack technologies to build beautiful and performant applications.
                   We're attentive to your needs, and we'll be with you 100% of the way from the initial design to the day your product goes live.
                   Schoodic Solutions is happy to work with you to make sure that your vision comes to life exactly the way you pictured it.
                </p>
            </div>
        </div>
    </section>

    <section use:scrollRef={'services'} class="gap-12">
        <h2 class="mb-9 text-center">Services We Offer To Our Clients</h2>
        <ServiceCards />
    </section>
    
    <section class="bg-almond" use:scrollRef={'contact'}>
        <h2>Contact</h2>
        <ContactForm />
    </section>
</main>
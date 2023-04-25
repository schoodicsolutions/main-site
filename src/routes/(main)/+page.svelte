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
        <h2>About Us</h2>
        <div class="w-[800px] max-w-full flex flex-col gap-4 text-lg">
            <h4>We're a Maine Business</h4>
            <p class="mb-8">
               Schoodic Solutions is the only tech company in Washington County, Maine offering full stack web application development.
               We're a family business, located in Calais, Maine and founded by cousins Ryan Prescott and Clay Coffin. Our goal is to help businesses near and far
               make their dreams a reality.
            </p>

            <h4>Modern and Knowledgable</h4>
            <p class="mb-8">
               We use the latest in modern full-stack technologies to build beautiful and performant applications.
               We're attentive to your needs, and we'll be with you 100% of the way from the initial design to the day your product goes live.
               Schoodic Solutions is happy to work with you to make sure that your vision comes to life exactly the way you pictured it.
            </p>

            <a class="button button-blue m-auto" href="/" use:scrollTo={{section: "contact"}}>Contact Us</a>
        </div>
    </section>

    <section use:scrollRef={'services'} class="gap-12">
        <h2>
            Services We Offer
        </h2>
        <ServiceCards />
    </section>
    
    <section class="bg-almond" use:scrollRef={'contact'}>
        <h2>Contact</h2>
        <ContactForm />
    </section>
</main>
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
            <p class="mb-8">Schoodic Media is a family business located in Calais, Maine overlooking the St. Croix River, surrounded by shadowy evergreens and blooming wildflowers.
               It's easy to see how we came to have such an appreciation for making beautiful designs!
               We incorporate our passion and enthusiasm into every job, using our keen eye to deliver stunning results.
            </p>

            <h4>Modern and Knowledgable</h4>
            <p class="mb-8">We use the latest technologies like Svelte, React, and WordPress to build slick web applications and websites. 
               We're attentive to your needs, and we'll be with you 100% of the way from the initial design to the day your site goes live.
               Schoodic Media is happy to work with you to make sure that your vision comes to life exactly the way you envision it.
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
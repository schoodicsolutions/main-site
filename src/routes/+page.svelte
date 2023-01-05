<script lang="ts">
    import { ScrollWatcher, scrollRef } from 'svelte-scroll-nav';

	import ContactForm from '$lib/ContactForm.svelte';
	import Hero from '$lib/Hero.svelte';
	import ServiceCards from '$lib/ServiceCards.svelte';
</script>

<ScrollWatcher />

<main>

    <Hero />
    <section use:scrollRef={'about'}>
        <h2>About Us</h2>
        <div class="w-[1440px] max-w-full flex flex-col gap-4 text-xl">
            <p>Welcome to Schoodic Media, your premier web design company located in the beautiful border town of Calais, Maine. Our CEO, Ryan Prescott, has a passion for creating visually stunning and user-friendly websites that help businesses succeed online. We're named after the St. Croix River, originally called the "Schoodic River" during the early settlement of the area.<p>
            <p>At Schoodic Media, we understand that your website is often the first point of contact for potential customers. That's why we take great care in designing websites that not only look professional, but also effectively convey your brand message and business goals. We will work with you every step of the way to ensure that your website perfectly reflects your unique vision.</p>
            <p>If you're ready to take your online presence to the next level, look no further than Schoodic Media. Contact us today to schedule a consultation and see how we can help your business thrive online.</p>
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
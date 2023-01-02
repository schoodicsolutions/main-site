<script lang="ts">
	import Hero from "$lib/Hero.svelte";
    import Input from "$lib/Input.svelte";
	import { scrollRef } from "$lib/scroll";
	import TwoWay from "$lib/scroll/TwoWay.svelte";
	import ServiceIcon from "$lib/ServiceIcon.svelte";
	import Wave from "$lib/Wave.svelte";
</script>

<TwoWay />

<main>

    <Hero />
    <section use:scrollRef={'about'}>
        <h2>About Us</h2>
        <div class="w-[1440px] max-w-full flex flex-col gap-4 text-xl">
            <p>Welcome to Schoodic Media, your premier web design company located in the beautiful border town of Calais, Maine. Our CEO, Ryan Prescott, has a passion for creating visually stunning and user-friendly websites that help businesses succeed online.<p>
            <p>At Schoodic Media, we understand that your website is often the first point of contact for potential customers. That's why we take great care in designing websites that not only look professional, but also effectively convey your brand message and business goals. We will work with you every step of the way to ensure that your website perfectly reflects your unique vision.</p>
            <p>If you're ready to take your online presence to the next level, look no further than Schoodic Media. Contact us today to schedule a consultation and see how we can help your business thrive online.</p>
        </div>
    </section>

    <section use:scrollRef={'services'}>
        <h2>
            Services We Offer
        </h2>
        <nav 
            class="flex flex-col gap-16 lg:gap-0 lg:flex-row justify-center items-center pb-6 lg:pb-12"
            aria-label="Services"
        >
            <div class="service-card">
                <h3 class="text-2xl xl:text-3xl leading-tight tracking-tighter font-semibold">Full-Stack Web Development</h3>
                <ServiceIcon variant="blue" height="125px" icon="toolbox" />
                <a class="button button-blue" href="/full-stack">Learn More</a>
            </div>
            <div class="service-card">
                <h3 class="text-2xl xl:text-3xl leading-tight tracking-tighter font-semibold">Responsive<br />Web Design</h3>
                <ServiceIcon variant="blue" height="125px" icon="phone" />
                <a class="button button-blue" href="/responsive-design">Learn More</a>
            </div>
            <div class="service-card">
                <h3 class="text-2xl xl:text-3xl leading-tight tracking-tighter font-semibold">Digital<br>Marketing</h3>
                <ServiceIcon variant="blue" height="125px" icon="megaphone" />
                <a class="button button-blue" href="/digital-marketing">Learn More</a>
            </div>
            <div class="service-card">
                <h3 class="text-2xl xl:text-3xl leading-tight tracking-tighter font-semibold">Search Engine Optimization</h3>
                <ServiceIcon variant="blue" height="125px" icon="magnifier" />
                <a class="button button-blue" href="/search-engine-optimization">Learn More</a>
            </div>
            <div class="service-card">
                <h3 class="text-2xl xl:text-3xl leading-tight tracking-tighter font-semibold">Managed<br />Hosting</h3>
                <ServiceIcon variant="blue" height="125px" icon="servers" />
                <a class="button button-blue" href="/managed-hosting">Learn More</a>
            </div>
        </nav>
    </section>
    
    <section class="bg-almond" use:scrollRef={'contact'}>
        <h2>Contact</h2>
        <form class="max-w-full w-96 m-auto px-4">
            <fieldset class="flex flex-col gap-4 items-center width-content">
                <Input name="name" label="Name" placeholder="John Doe" required />
                <Input name="email" type="email" label="Email" placeholder="john@example.com" required />
                <Input name="company" label="Organization" placeholder="Acme Industries" />
                <Input name="phone" label="Phone" placeholder="(207) 555-0195" required />
                <Input name="message" label="Message" placeholder="Additional information here" required multiline />
                <button class="button button-blue ml-auto">Submit</button>
            </fieldset>
        </form>
    </section>
</main>
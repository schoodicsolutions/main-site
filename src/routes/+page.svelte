<script lang="ts">
	import Hero from "$lib/Hero.svelte";
    import Input from "$lib/Input.svelte";
	import { scrollRef } from "$lib/scroll";
	import ServiceIcon from "$lib/ServiceIcon.svelte";
</script>

<main>

    <Hero />

    <section class="py-6 lg:py-12" use:scrollRef={'services'}>
        <h2 data-autohash id="services">
            Services We Offer
        </h2>
        <div class="flex flex-col gap-16 lg:gap-0 lg:flex-row justify-center items-center pb-6 lg:pb-12">
            <div class="service-card">
                <h3 class="text-2xl xl:text-3xl leading-tight tracking-tighter font-semibold">Full-Stack Web Development</h3>
                <ServiceIcon variant="blue" height="125px" icon="toolbox" />
                <button class="button button-blue">Learn More</button>
            </div>
            <div class="service-card">
                <h3 class="text-2xl xl:text-3xl leading-tight tracking-tighter font-semibold">Responsive<br />Web Design</h3>
                <ServiceIcon variant="blue" height="125px" icon="phone" />
                <button class="button button-blue">Learn More</button>
            </div>
            <div class="service-card">
                <h3 class="text-2xl xl:text-3xl leading-tight tracking-tighter font-semibold">Digital<br>Marketing</h3>
                <ServiceIcon variant="blue" height="125px" icon="megaphone" />
                <button class="button button-blue">Learn More</button>
            </div>
            <div class="service-card">
                <h3 class="text-2xl xl:text-3xl leading-tight tracking-tighter font-semibold">Search Engine Optimization</h3>
                <ServiceIcon variant="blue" height="125px" icon="magnifier" />
                <button class="button button-blue">Learn More</button>
            </div>
            <div class="service-card">
                <h3 class="text-2xl xl:text-3xl leading-tight tracking-tighter font-semibold">Managed<br />Hosting</h3>
                <ServiceIcon variant="blue" height="125px" icon="servers" />
                <button class="button button-blue">Learn More</button>
            </div>
        </div>
    </section>
    
    <section class="bg-almond" use:scrollRef={'contact'}>
        <h2 data-autohash id="contact">Contact</h2>
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
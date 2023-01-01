<script lang="ts">
	import Hero from "$lib/Hero.svelte";
    import Input from "$lib/Input.svelte";
</script>

<main>
    <Hero />

    <section class="py-6 lg:py-12">
        <h2>
            Services We Offer
        </h2>
    </section>
    
    <section class="bg-almond">
        <h2>Contact</h2>
        <form class="max-w-full w-96 m-auto px-4">
            <fieldset class="flex flex-col gap-4 items-center width-content">
                <Input name="name" label="Name" placeholder="John Doe" required />
                <Input name="name" type="email" label="Email" placeholder="john@example.com" required />
                <Input name="name" label="Organization" placeholder="Acme Industries" />
                <Input name="name" label="Phone" placeholder="(207) 555-0195" required />
                <Input name="name" label="Message" placeholder="Additional information here" required multiline />
                <button class="ml-auto">Submit</button>
            </fieldset>
        </form>
    </section>
</main>
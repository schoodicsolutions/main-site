<script lang="ts">
	import Hero from "$lib/Hero.svelte";
    import Input from "$lib/Input.svelte";
</script>

<svelte:window bind:scrollY />

<main>
    <Hero />

    <section class="py-6 lg:py-12">
        <h2>
            Services We Offer
        </h2>
    </section>
    
    <section class="bg-almond">
        <h2>Contact</h2>
        <form class="flex flex-col gap-4 items-center">
            <Input name="name" label="Name" placeholder="John Doe" required />
            <Input name="name" label="Name" placeholder="John Doe" required />
            <Input name="name" label="Name" placeholder="John Doe" required />
            <Input name="name" label="Name" placeholder="John Doe" required />
            <Input name="name" label="Name" placeholder="John Doe" required />
            <Input name="name" label="Name" placeholder="John Doe" required />
            <Input name="name" label="Name" placeholder="John Doe" required />
        </form>
    </section>
</main>
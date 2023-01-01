<script lang="ts">
	import Hero from "$lib/Hero.svelte";
import Input from "$lib/Input.svelte";
    import Mark from "$lib/Mark.svelte";
	import Wave from "$lib/Wave.svelte";
    
    let scrollY: number;
    let clientHeight: number;

    $: scrollY; $: clientHeight;

    $: opacity = 1 - Math.round(Math.min(1, scrollY / clientHeight) * 100) / 100;
</script>

<svelte:window bind:scrollY />

<main>
    <Hero bind:clientHeight {opacity} />

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
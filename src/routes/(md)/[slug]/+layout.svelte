<script lang="ts">
	import { page } from '$app/stores';
	import { scrollTo } from 'svelte-scroll-nav';
	import ServiceHeader from '$lib/ServiceHeader.svelte';
	import ContactForm from '$lib/ContactForm.svelte';
</script>

<ServiceHeader>
    <h1>{$page.data.title}</h1>
</ServiceHeader>

<section>
    <div class="w-[1440px] max-w-full flex flex-col gap-4 text-xl">
        <slot />
    </div>
</section>

<section class="bg-almond">
    <h3 class="font-bold text-4xl text-center px-6 tracking-tight">{$page.data.contactBlurb || 'Want to work with us?'}</h3>
    <ContactForm />
</section>
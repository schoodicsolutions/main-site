<script lang="ts">
	import { trackSections } from '$lib/activeSection.svelte';
	import About from '$lib/home/About.svelte';
	import Approach from '$lib/home/Approach.svelte';
	import Contact from '$lib/home/Contact.svelte';
	import Faq from '$lib/home/Faq.svelte';
	import Hero from '$lib/home/Hero.svelte';
	import Services from '$lib/home/Services.svelte';
	import UseCases from '$lib/home/UseCases.svelte';

	$effect(() => trackSections());
</script>

<Hero />
<Services />
<Approach />
<About />
<UseCases />
<Faq />
<Contact />

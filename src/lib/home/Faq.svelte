<script lang="ts">
	import Faqs from '$lib/Faqs.svelte';
	import { homeFaqs } from '$lib/content/faqs';
</script>

<section id="faq" class="section container-site">
	<div class="grid gap-12 lg:grid-cols-[1fr_2fr]">
		<div>
			<p class="eyebrow mb-4">// FAQ</p>
			<h2>Questions we hear a lot</h2>
		</div>
		<Faqs faqs={homeFaqs} />
	</div>
</section>

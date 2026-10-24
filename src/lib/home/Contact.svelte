<script lang="ts">
	import ContactForm from '$lib/ContactForm.svelte';
	import Icon from '$lib/Icon.svelte';
	import { site } from '$lib/content/site';
</script>

<section id="contact" class="surface-dark relative overflow-hidden">
	<div
		class="absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full bg-croix/20 blur-[120px]"
		aria-hidden="true"
	></div>

	<div class="section container-site relative grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
		<div>
			<p class="eyebrow mb-4">// Contact</p>
			<h2 class="mb-6">Let’s talk about what’s <span class="highlight">next</span>.</h2>
			<p class="text-muted mb-8 text-lg">
				Tell us what’s slowing you down, whether it’s a stubborn manual process, an aging server, or
				an AI idea you want to test. We’ll help you figure out where to start.
			</p>
			<a class="button primary large" href={site.calendly} target="_blank" rel="noopener">
				Book a consultation
				<Icon name="arrow-right" size={20} />
			</a>
			<p class="text-muted mt-4 text-sm">Prefer writing? Send us a note with the form.</p>
		</div>

		<div class="rounded-2xl bg-white p-6 text-ink shadow-2xl sm:p-10">
			<ContactForm />
		</div>
	</div>
</section>

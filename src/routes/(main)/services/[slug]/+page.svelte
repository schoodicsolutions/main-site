<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/actions/reveal';
	import Faqs from '$lib/Faqs.svelte';
	import Contact from '$lib/home/Contact.svelte';
	import { services, serviceHref } from '$lib/content/services';
	import { site } from '$lib/content/site';

	let { data } = $props();

	const service = $derived(data.service);
	const related = $derived(services.filter(({ slug }) => slug !== service.slug).slice(0, 3));
</script>

<section class="surface-dark relative overflow-hidden">
	<div
		class="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_80%_20%,black,transparent_70%)]"
	></div>
	<div class="container-site relative py-20 lg:py-28">
		<nav aria-label="Breadcrumb" class="mb-10">
			<ol class="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider text-white/50">
				<li><a class="hover:text-white" href="/">Home</a></li>
				<li aria-hidden="true">/</li>
				<li><a class="hover:text-white" href="/#services">Services</a></li>
				<li aria-hidden="true">/</li>
				<li class="text-white/80" aria-current="page">{service.name}</li>
			</ol>
		</nav>
		<span
			class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-croix/15 text-croix"
		>
			<Icon name={service.icon} size={28} />
		</span>
		<p class="eyebrow mb-4">// {service.name}</p>
		<h1 class="mb-6 max-w-4xl">{service.headline}</h1>
		<p class="text-muted mb-10 max-w-3xl text-lg lg:text-xl">{service.intro}</p>
		<div class="flex flex-col gap-3 sm:flex-row">
			<a class="button primary large" href={site.calendly} target="_blank" rel="noopener">
				Book a consultation
				<Icon name="arrow-right" size={20} />
			</a>
			<a class="button ghost-dark large" href="#contact">Send us a note</a>
		</div>
	</div>
</section>

<section class="section container-site" aria-labelledby="capabilities">
	<div class="mb-12 max-w-2xl" use:reveal>
		<p class="eyebrow mb-4">// What we do</p>
		<h2 id="capabilities">{service.name} services</h2>
	</div>
	<ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each service.capabilities as capability, i (capability.title)}
			<li class="rounded-2xl border border-line p-7" use:reveal={{ delay: (i % 3) * 80 }}>
				<span
					class="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand"
				>
					<Icon name="check" size={18} />
				</span>
				<h3 class="mb-2 text-lg">{capability.title}</h3>
				<p class="text-muted">{capability.text}</p>
			</li>
		{/each}
	</ul>
</section>

<section class="bg-almond" aria-labelledby="engagements">
	<div class="section container-site grid gap-12 lg:grid-cols-[1fr_2fr]">
		<div use:reveal>
			<p class="eyebrow mb-4">// Typical projects</p>
			<h2 id="engagements" class="mb-6">Where most clients start</h2>
			<p class="text-muted">
				Every project is scoped to your needs, but these are common starting points.
			</p>
		</div>
		<ol class="flex flex-col gap-4">
			{#each service.engagements as engagement, i (engagement.title)}
				<li class="flex gap-6 rounded-2xl bg-white p-7" use:reveal={{ delay: i * 80 }}>
					<span class="font-mono text-sm text-brand">0{i + 1}</span>
					<div>
						<h3 class="mb-2 text-lg">{engagement.title}</h3>
						<p class="text-muted">{engagement.text}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="section container-site" aria-labelledby="tools">
	<div class="grid gap-12 lg:grid-cols-[1fr_2fr]">
		<div>
			<p class="eyebrow mb-4">// Stack</p>
			<h2 id="tools">Tools we work with</h2>
		</div>
		<ul class="flex flex-wrap content-start gap-2">
			{#each service.tools as tool (tool)}
				<li class="rounded-full border border-line px-4 py-2 text-ink/80">{tool}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="section container-site !pt-0" aria-labelledby="faq">
	<div class="grid gap-12 lg:grid-cols-[1fr_2fr]">
		<div>
			<p class="eyebrow mb-4">// FAQ</p>
			<h2 id="faq">Common questions about {service.name.toLowerCase()}</h2>
		</div>
		<Faqs faqs={service.faqs} />
	</div>
</section>

<section class="section container-site border-t border-line" aria-labelledby="related">
	<p class="eyebrow mb-4">// Related</p>
	<h2 id="related" class="mb-10">Works well with</h2>
	<ul class="grid gap-5 md:grid-cols-3">
		{#each related as other (other.slug)}
			<li>
				<a
					href={serviceHref(other.slug)}
					class="group flex h-full flex-col rounded-2xl border border-line p-7 transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
				>
					<span
						class="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand"
					>
						<Icon name={other.icon} />
					</span>
					<h3 class="mb-2 text-lg">{other.name}</h3>
					<p class="text-muted">{other.summary}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<Contact />

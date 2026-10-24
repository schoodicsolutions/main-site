<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { services, serviceHref } from '$lib/content/services';
	import { site } from '$lib/content/site';

	let { data } = $props();

	const related = $derived(services.filter(({ slug }) => slug !== data.service.slug).slice(0, 3));
</script>

<section class="surface-dark relative overflow-hidden">
	<div
		class="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_80%_20%,black,transparent_70%)]"
	></div>
	<div class="container-site relative py-20 lg:py-28">
		<a
			href="/#services"
			class="navlink mb-8 inline-block font-mono text-xs uppercase tracking-wider"
		>
			← All services
		</a>
		<span
			class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-croix/15 text-croix"
		>
			<Icon name={data.service.icon} size={28} />
		</span>
		<h1 class="mb-6 max-w-3xl">{data.service.name}</h1>
		<p class="text-muted mb-10 max-w-2xl text-lg lg:text-xl">{data.service.summary}</p>
		<a class="button primary large" href={site.calendly} target="_blank" rel="noopener">
			Book a consultation
			<Icon name="arrow-right" size={20} />
		</a>
	</div>
</section>

<section class="section container-site">
	<p class="eyebrow mb-4">// Related</p>
	<h2 class="mb-10">Works well with</h2>
	<ul class="grid gap-5 md:grid-cols-3">
		{#each related as service (service.slug)}
			<li>
				<a
					href={serviceHref(service.slug)}
					class="group flex h-full flex-col rounded-2xl border border-line p-7 transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
				>
					<span
						class="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand"
					>
						<Icon name={service.icon} />
					</span>
					<h3 class="mb-2 text-lg">{service.name}</h3>
					<p class="text-muted">{service.summary}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

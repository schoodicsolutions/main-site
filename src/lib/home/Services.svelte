<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { services, serviceHref } from '$lib/content/services';
</script>

<section id="services" class="section container-site">
	<div class="mb-14 max-w-2xl" use:reveal>
		<p class="eyebrow mb-4">// Services</p>
		<h2 class="mb-4">
			One partner for your <span class="highlight">whole</span> technology stack.
		</h2>
		<p class="text-muted text-lg">
			From the first AI pilot to the servers it runs on, we cover the full path from idea to
			production, so nothing falls between vendors.
		</p>
	</div>

	<ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each services as service, i (service.slug)}
			<li use:reveal={{ delay: (i % 3) * 80 }}>
				<a
					href={serviceHref(service.slug)}
					class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5"
				>
					<span
						class="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
					></span>
					<span
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand"
					>
						<Icon name={service.icon} />
					</span>
					<h3 class="mb-3 text-xl">{service.name}</h3>
					<p class="text-muted mb-6">{service.summary}</p>
					<span class="mt-auto inline-flex items-center gap-1.5 font-medium text-brand">
						Learn more
						<Icon
							name="arrow-right"
							size={18}
							class="transition-transform group-hover:translate-x-1"
						/>
					</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

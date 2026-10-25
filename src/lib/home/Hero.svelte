<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import Mark from '$lib/Mark.svelte';
	import { site } from '$lib/content/site';

	const capabilities = [
		'LLMs & agents',
		'Data pipelines',
		'AWS · Azure · GCP',
		'CI/CD',
		'Integrations',
	];

	const pipeline = [
		{ time: '09:14', text: 'Invoice received by email' },
		{ time: '09:14', text: 'Line items extracted by AI' },
		{ time: '09:15', text: 'Matched to purchase order' },
		{ time: '09:15', text: 'Synced to accounting', done: true },
	];
</script>

<section id="top" class="surface-dark relative overflow-hidden">
	<div
		class="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]"
	></div>
	<div
		class="absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-croix/25 blur-[120px]"
		aria-hidden="true"
	></div>

	<div
		class="container-site relative grid items-center gap-16 py-16 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.4fr_1fr] lg:py-12"
	>
		<div>
			<p class="eyebrow mb-6">// AI &amp; technology consulting</p>
			<h1 class="mb-6">
				Modern <span class="highlight">AI</span>, <span class="highlight">cloud</span>, and
				<span class="highlight">automation</span> for businesses big and small.
			</h1>
			<p class="text-muted mb-8 max-w-xl text-lg lg:text-xl">
				Schoodic plans, builds, and supports the technology behind your business, from AI assistants
				and data pipelines to cloud infrastructure and the workflows that tie it all together.
			</p>
			<div class="flex flex-col gap-3 sm:flex-row">
				<a class="button primary large" href={site.calendly} target="_blank" rel="noopener">
					Book a consultation
					<Icon name="arrow-right" size={20} />
				</a>
				<a class="button ghost-dark large" href="#services">Explore services</a>
			</div>
			<ul
				class="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-white/60"
			>
				{#each capabilities as capability (capability)}
					<li>{capability}</li>
				{/each}
			</ul>
		</div>

		<div class="relative mx-auto w-full max-w-md" aria-hidden="true">
			<Mark class="absolute -right-6 -top-16 w-72 text-brand/30 lg:w-96" />
			<div
				class="relative rounded-2xl border border-white/10 bg-midnight-800/80 p-6 shadow-2xl backdrop-blur"
			>
				<div class="mb-5 flex items-center justify-between">
					<span class="font-mono text-xs uppercase tracking-wider text-white/50"
						>accounts-payable.flow</span
					>
					<span class="flex items-center gap-2 font-mono text-xs text-emerald-400">
						<span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
						live
					</span>
				</div>
				<ol class="flex flex-col gap-4">
					{#each pipeline as step, i (i)}
						<li class="flex items-center gap-4">
							<span
								class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs"
								class:border-white={!step.done}
								class:border-opacity-20={!step.done}
								class:text-white={!step.done}
								class:text-opacity-60={!step.done}
								class:border-emerald-400={step.done}
								class:text-emerald-400={step.done}
							>
								{#if step.done}<Icon name="check" size={16} />{:else}{i + 1}{/if}
							</span>
							<span class="grow text-white/85">{step.text}</span>
							<span class="font-mono text-xs text-white/55">{step.time}</span>
						</li>
					{/each}
				</ol>
				<p class="mt-6 border-t border-white/10 pt-4 font-mono text-xs text-white/50">
					Runs on its own, every time an invoice lands
				</p>
			</div>
		</div>
	</div>
</section>

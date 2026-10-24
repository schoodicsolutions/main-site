<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const useCases = [
		{
			industry: 'Fisheries & aquaculture',
			text: 'Harvest and landing logs captured from a phone on the dock, synced to a dashboard and your books automatically.',
		},
		{
			industry: 'Healthcare & care providers',
			text: 'Intake paperwork summarized and routed by AI, with sensitive data kept in your own secure cloud.',
		},
		{
			industry: 'Towns & municipalities',
			text: 'Meeting minutes and ordinances turned into a searchable archive residents can ask questions of in plain English.',
		},
		{
			industry: 'Tourism & hospitality',
			text: 'Bookings, reviews, and inventory pulled into one place, with demand forecasts for the season ahead.',
		},
		{
			industry: 'Trades & contractors',
			text: 'Quotes, scheduling, and invoicing connected end to end, so jobs stop slipping through the cracks.',
		},
		{
			industry: 'Retail & small manufacturing',
			text: 'Inventory forecasts and reorder alerts built from the sales data you already have.',
		},
	];
</script>

<section id="use-cases" class="bg-almond">
	<div class="section container-site">
		<div class="mb-14 max-w-2xl" use:reveal>
			<p class="eyebrow mb-4">// In practice</p>
			<h2 class="mb-4">What this looks like <span class="highlight">day to day</span>.</h2>
			<p class="text-muted text-lg">
				A few examples of the problems we help local organizations solve.
			</p>
		</div>

		<ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			{#each useCases as useCase, i (useCase.industry)}
				<li
					class="rounded-2xl border border-black/5 bg-white p-7"
					use:reveal={{ delay: (i % 3) * 80 }}
				>
					<p class="eyebrow mb-3 !text-ink/50">{useCase.industry}</p>
					<p class="text-lg leading-snug text-ink">{useCase.text}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

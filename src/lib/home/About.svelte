<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { site } from '$lib/content/site';

	const principles = [
		{
			title: 'Plain English',
			text: 'Clear explanations and honest estimates. No jargon, no surprises.',
		},
		{
			title: 'In person when it matters',
			text: 'We’re local. We can sit down with you and your team.',
		},
		{
			title: 'You own it',
			text: 'Your code, your data, your accounts. We document everything we build.',
		},
		{
			title: 'In it for the long haul',
			text: 'Ongoing support from the people who built it, not a hand-off.',
		},
	];
</script>

<section id="about" class="section container-site">
	<div class="grid gap-14 lg:grid-cols-2 lg:gap-20">
		<div use:reveal>
			<p class="eyebrow mb-4">// About</p>
			<h2 class="mb-6">Serious engineering with <span class="highlight">Down East</span> roots.</h2>
			<div class="text-muted flex flex-col gap-4 text-lg">
				<p>
					Schoodic was founded in Washington County to give local businesses, nonprofits, and towns
					the same technology larger companies take for granted, without the big-agency price tag or
					the out-of-state runaround.
				</p>
				<p>
					We’re close enough to meet you in person and experienced enough to run production AI,
					data, and cloud systems. When something needs attention, you call someone who knows your
					business.
				</p>
			</div>
			<ul class="mt-8 flex flex-wrap gap-2" aria-label="Communities we serve">
				{#each site.towns as town (town)}
					<li class="rounded-full border border-line px-3 py-1 text-sm text-ink/75">{town}</li>
				{/each}
				<li class="rounded-full border border-line px-3 py-1 text-sm text-ink/75">&amp; beyond</li>
			</ul>
		</div>

		<ul class="grid gap-4 sm:grid-cols-2">
			{#each principles as principle, i (principle.title)}
				<li class="rounded-2xl bg-almond p-6" use:reveal={{ delay: i * 80 }}>
					<span
						class="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white"
					>
						<Icon name="check" size={18} />
					</span>
					<h3 class="mb-2 text-lg">{principle.title}</h3>
					<p class="text-muted">{principle.text}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

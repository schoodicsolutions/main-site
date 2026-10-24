<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const steps = [
		{
			name: 'Assess',
			text: 'We learn how your business runs today: the people, processes, and systems, and where time and money leak out.',
		},
		{
			name: 'Architect',
			text: 'We design a practical plan that fits your budget, with clear priorities, honest tradeoffs, and no lock-in you didn’t choose.',
		},
		{
			name: 'Build',
			text: 'We ship in small, working increments so you see progress early and can change course before it gets expensive.',
		},
		{
			name: 'Operate',
			text: 'We stay on to monitor, maintain, and improve, and we train your team so they own what we build.',
		},
	];
</script>

<section id="approach" class="surface-dark relative overflow-hidden">
	<div
		class="absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
	></div>

	<div class="section container-site relative">
		<div class="mb-16 grid gap-6 lg:grid-cols-2 lg:items-end" use:reveal>
			<div>
				<p class="eyebrow mb-4">// Approach</p>
				<h2>Technology that fits the <span class="highlight">whole</span> business.</h2>
			</div>
			<p class="text-muted text-lg">
				Most problems aren’t solved by one more tool. We look at how your people, data, and systems
				work together before we write a line of code, then stay to keep it all running.
			</p>
		</div>

		<ol
			class="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4"
		>
			{#each steps as step, i (step.name)}
				<li class="flex flex-col gap-4 bg-midnight p-8" use:reveal={{ delay: i * 100 }}>
					<span class="font-mono text-sm text-croix">0{i + 1}</span>
					<h3 class="text-2xl">{step.name}</h3>
					<p class="text-muted">{step.text}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

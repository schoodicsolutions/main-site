<script lang="ts">
	import type { Faq } from './content/services';

	let { faqs }: { faqs: Faq[] } = $props();
</script>

<div class="divide-y divide-line border-y border-line">
	{#each faqs as faq (faq.question)}
		<details class="group py-6">
			<summary
				class="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden"
			>
				<h3 class="text-lg">{faq.question}</h3>
				<span
					class="shrink-0 text-2xl font-normal leading-none text-brand transition-transform group-open:rotate-45"
					aria-hidden="true">+</span
				>
			</summary>
			<p class="text-muted mt-4 max-w-3xl">{faq.answer}</p>
		</details>
	{/each}
</div>

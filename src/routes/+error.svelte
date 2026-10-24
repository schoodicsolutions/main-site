<script lang="ts">
	import { page } from '$app/state';
	import Icon from '$lib/Icon.svelte';
</script>

<section class="surface-dark relative overflow-hidden">
	<div
		class="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
	></div>
	<div
		class="container-site relative flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center"
	>
		<p class="eyebrow">// Error {page.status}</p>
		<h1>{page.status === 404 ? 'This page wandered off.' : page.error?.message}</h1>
		<p class="text-muted max-w-md text-lg">
			Whatever you were looking for isn’t here. Let’s get you back on track.
		</p>
		<a class="button primary" href="/">
			Back to home
			<Icon name="arrow-right" size={18} />
		</a>
	</div>
</section>

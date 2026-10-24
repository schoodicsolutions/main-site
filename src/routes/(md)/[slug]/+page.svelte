<script lang="ts">
	let { data } = $props();
</script>

<section class="surface-dark border-b border-white/10">
	<div class="container-site py-16 lg:py-20">
		<p class="eyebrow mb-4">Legal</p>
		<h1>{data.heading ?? data.title}</h1>
	</div>
</section>

<section class="container-site section !pt-12">
	<article class="prose-site">
		<data.content />
	</article>
</section>

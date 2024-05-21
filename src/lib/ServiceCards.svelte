<script lang="ts">
	import MarketingIcon from './icons/MarketingIcon.svelte';
	import PaletteIcon from './icons/PaletteIcon.svelte';
	import RulerPencilIcon from './icons/RulerPencilIcon.svelte';
	import SearchIcon from './icons/SearchIcon.svelte';
	import ServerIcon from './icons/ServerIcon.svelte';
	import StackLineIcon from './icons/StackLineIcon.svelte';
</script>

<nav class="service-cards" aria-label="Services">
	<a class="service-card-link" href="/full-stack">
		<div class="service-card">
			<RulerPencilIcon width="55" height="55" class="mb-6" />
			<div class="mb-12">
				<h5 class="mb-4">Full-Stack Web Dev</h5>
				<p class="text-black/75">
					At Schoodic Solutions, we pride ourselves on our full-stack &hellip;
				</p>
			</div>
			<span class="read-more"> Read More &rsaquo; </span>
		</div>
	</a>
	<a class="service-card-link" href="/responsive-design">
		<div class="service-card">
			<StackLineIcon width="55" height="55" class="mb-6" />
			<div class="mb-12">
				<h5 class="mb-4">Responsive Web Design</h5>
				<p class="text-black/75">At Schoodic Solutions, we understand the importance of &hellip;</p>
			</div>
			<span class="read-more"> Read More &rsaquo; </span>
		</div>
	</a>
	<a class="service-card-link" href="/digital-marketing">
		<div class="service-card">
			<MarketingIcon width="55" height="55" class="mb-6" />
			<div class="mb-12">
				<h5 class="mb-4">Digital Marketing</h5>
				<p class="text-black/75">
					At Schoodic Solutions, we know that having a great website is &hellip;
				</p>
			</div>
			<span class="read-more"> Read More &rsaquo; </span>
		</div>
	</a>
	<a class="service-card-link" href="/search-engine-optimization">
		<div class="service-card">
			<SearchIcon width="55" height="55" class="mb-6" />
			<div class="mb-12">
				<h5 class="mb-4">Search Engine Optimization</h5>
				<p class="text-black/75">
					We offer a range of SEO services to help your business rank higher &hellip;
				</p>
			</div>
			<span class="read-more"> Read More &rsaquo; </span>
		</div>
	</a>
	<a class="service-card-link" href="/managed-hosting">
		<div class="service-card">
			<ServerIcon width="55" height="55" class="mb-6" />
			<div class="mb-12">
				<h5 class="mb-4">Managed Hosting</h5>
				<p class="text-black/75">
					We offer Managed Hosting services to take the burden off your shoulders &hellip;
				</p>
			</div>
			<span class="read-more"> Read More &rsaquo; </span>
		</div>
	</a>
	<a class="service-card-link" href="/ui-ux-design">
		<div class="service-card">
			<PaletteIcon width="55" height="55" class="mb-6" />
			<div class="mb-12">
				<h5 class="mb-4">UI/UX Design</h5>
				<p class="text-black/75">Increase sales by showing true dynamics of your website.</p>
			</div>
			<span class="read-more"> Read More &rsaquo; </span>
		</div>
	</a>
</nav>

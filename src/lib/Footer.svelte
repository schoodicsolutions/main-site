<script lang="ts">
	import Icon from './Icon.svelte';
	import Logo from './Logo.svelte';
	import { mainNav, site } from './content/site';
	import { services, serviceHref } from './content/services';

	const year = new Date().getFullYear();
</script>

<footer class="surface-dark bg-midnight-950">
	<div class="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
		<div class="flex flex-col gap-4">
			<a href="/" aria-label="Schoodic home" class="w-fit"><Logo size="medium" /></a>
			<p class="text-muted max-w-xs">
				AI, cloud, and automation for Down East Maine, built in Washington County.
			</p>
			<ul class="flex gap-4">
				{#each site.socials as social (social.network)}
					<li>
						<a
							href={social.href}
							class="text-white/60 hover:text-white transition-colors"
							target="_blank"
							rel="noopener"
						>
							<Icon name={social.network} size={20} label={social.label} />
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<nav aria-label="Services">
			<h2 class="eyebrow mb-4">Services</h2>
			<ul class="flex flex-col gap-2">
				{#each services as service (service.slug)}
					<li><a class="navlink" href={serviceHref(service.slug)}>{service.name}</a></li>
				{/each}
			</ul>
		</nav>

		<nav aria-label="Company">
			<h2 class="eyebrow mb-4">Company</h2>
			<ul class="flex flex-col gap-2">
				{#each mainNav as link (link.section)}
					<li><a class="navlink" href="/#{link.section}">{link.caption}</a></li>
				{/each}
				<li>
					<a class="navlink" href={site.calendly} target="_blank" rel="noopener">Book a call</a>
				</li>
			</ul>
		</nav>
	</div>

	<div class="border-t border-white/10">
		<div
			class="container-site flex flex-col gap-2 py-6 text-sm text-white/50 md:flex-row md:justify-between"
		>
			<p>&copy; {year} {site.legalName}. All rights reserved.</p>
			<p class="flex gap-4">
				<a class="hover:text-white" href="/privacy-policy">Privacy</a>
				<a class="hover:text-white" href="/terms-and-conditions">Terms</a>
			</p>
		</div>
	</div>
</footer>

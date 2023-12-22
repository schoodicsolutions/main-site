<script lang="ts">
	import MediaQuery from 'svelte-media-queries';
	import { scrollTo } from 'svelte-scroll-nav';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => {
		setTimeout(() => (ready = true), 10);
	});
</script>

<section class="hero flex-col lg:flex-row lg:justify-between -mt-1 py-20">
	<div class="flex flex-col gap-5">
		<h1 class="parked-left will-fade" class:flyin={ready} class:fadein={ready}>
			EMPOWERING <span class="text-brand">BUSINESSES</span><br />
			WITH <span class="text-brand">CUTTING-EDGE</span> WEB<br />
			APPLICATIONS
		</h1>
		<MediaQuery query="(max-width: 1024px)" let:matches>
			<div class="parked-left will-fade !translate-x-0 delay" class:fadein={ready}>
				<p
					class="text-center leading-tight mb-7 lg:leading-normal lg:text-left lg:text-2xl parked delay-100 lg:mb-0"
					class:flyinleft={ready}
				>
					Transforming Ideas into Seamless Online
					{#if matches} <br /> {/if}
					Experiences for
					{#if !matches} <br /> {/if}
					Increased Engagement and Success
				</p>
				<div class="flex gap-5 mt-2 lg:mt-5">
					<a
						class="button blue large contained xs:w-[360px] w-full lg:w-fit m-auto lg:m-0"
						href="/"
						use:scrollTo={{ section: 'contact' }}>Contact Us</a
					>
					{#if !matches}
						<a class="button blue large outlined !px-9" href="/" use:scrollTo={{ section: 'about' }}
							>Learn More</a
						>
					{/if}
				</div>
			</div>
		</MediaQuery>
	</div>
	<div>
		<img
			class:flyin={ready}
			src="/assets/website-examples.webp"
			alt="A laptop, a mobile phone and a tablet showcasing one of Schoodic's designs"
			class="w-[334px] m-auto lg:m-0 lg:w-[678px] mt-4 lg:-mt-10 parked-right"
		/>
	</div>
</section>

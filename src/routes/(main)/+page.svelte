<script lang="ts">
	import { ScrollWatcher, scrollRef, scrollTo } from 'svelte-scroll-nav';

	import ContactForm from '$lib/ContactForm.svelte';
	import Hero from '$lib/Hero.svelte';
	import ServiceCards from '$lib/ServiceCards.svelte';
	import CaretRight from '$lib/icons/CaretRight.svelte';
</script>

<ScrollWatcher />

<main>
	<Hero />
	<section use:scrollRef={'about'} class="mb-3.5">
		<div class="flex flex-col xl:flex-row items-center gap-7 lg:gap-[111px]">
			<div class="shrink-0 order-1 xl:order-none">
				<img
					src="/assets/laptop-in-forest.webp"
					alt="A laptop with code on the screen, nestled among moss in the forest"
					class="w-full h-auto lg:w-auto lg:h-[500px] rounded-lg"
				/>
			</div>
			<div class="grow">
				<h2 class="mb-7">About Schoodic Solutions</h2>
				<h4 class="mb-3">We're A Maine Business</h4>
				<p class="mb-3">
					At <strong class="font-semibold">Schoodic Solutions</strong>, we stand apart as the only
					tech company in Washington County offering full-stack web development and design services
					so your business shines brightly online.
				</p>
				<p class="mb-5">
					Nestled in the heart of Maine, we extend our expertise to clients in
					<strong class="font-semibold">Calais</strong>,
					<strong class="font-semibold">Eastport</strong>,
					<strong class="font-semibold">Machias</strong>,
					<strong class="font-semibold">Lubec</strong>, and beyond, serving businesses not just
					across the United States but around the globe.
				</p>

				<h4 class="mb-3">Modern and Knowledgable</h4>
				<p class="mb-7">
					We use the latest in modern web technologies to build speedy and responsive web
					applications. We're attentive to your needs, and we'll be with you 100% of the way from
					the initial design to the day your product goes live.
				</p>

				<a
					class="button blue large contained w-full sm:w-fit mx-auto sm:mx-0 -mt-2"
					href="/"
					use:scrollTo={{ section: 'contact' }}>Contact Us</a
				>
			</div>
		</div>
	</section>

	<section use:scrollRef={'our-work'} class="mb-1 bg-almond text-black w-full max-w-none">
		<h2 class="mb-9 text-center">Our Previous Work</h2>
		<div class="inner !grid lg:grid-cols-2 grid-rows-1 !gap-12">
			<a
				href="https://wcut.maine.gov"
				class="text-black !no-underline group"
				target="_blank"
				referrerpolicy="no-referrer"
			>
				<figure>
					<img
						src="/assets/wcut.webp"
						alt="A preview of the Washington County Unorganized Territories website"
						class="w-full lg:w-auto xl:h-[288px] h-[200px] rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-[1.02] group-hover:brightness-90 transition-all duration-300 ease-in-out"
					/>
					<figcaption
						class="text-center mt-6 text-xl font-semibold w-fit mx-auto group-hover:text-brand transition-colors"
					>
						Washington County Unorganized Territories
						<div
							class="group-hover:w-full w-0 h-0.5 bg-current transition-all group-hover:ml-auto"
						/>
					</figcaption>
				</figure>
			</a>
			<a
				href="https://www.meadowbrookmaterials.com/"
				class="text-black !no-underline group"
				target="_blank"
				referrerpolicy="no-referrer"
			>
				<figure>
					<img
						src="/assets/meadowbrook.webp"
						alt="A preview of the Meadowbrook Materials website"
						class="w-full lg:w-auto xl:h-[288px] h-[200px] rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-[1.02] group-hover:brightness-90 transition-all duration-300 ease-in-out"
					/>
					<figcaption
						class="text-center mt-6 text-xl font-semibold w-fit mx-auto group-hover:text-brand transition-colors"
					>
						Meadowbrook Materials
						<div
							class="group-hover:w-full w-0 h-0.5 bg-current transition-all group-hover:ml-auto"
						/>
					</figcaption>
				</figure>
			</a>
		</div>
		<div class="inner max-w-lg">
			<a
				class="button blue large contained w-full items-center uppercase"
				target="_blank"
				referrerpolicy="no-referrer"
				href="/"
				use:scrollTo={{ section: 'contact' }}
			>
				Get Your Quote
				<CaretRight class="ml-3" />
			</a>
		</div>
	</section>

	<section use:scrollRef={'services'} class="mb-1">
		<h2 class="mb-9 text-center">Services We Offer To Our Clients</h2>
		<ServiceCards />
	</section>

	<section use:scrollRef={'contact'} class="w-full max-w-none bg-almond">
		<div class="w-full bg-almond text-center">
			<h2 class="mb-6">Ready to make your dreams come to life?</h2>
			<div class="mx-auto max-w-lg">
				<a
					class="button blue large contained w-full items-center uppercase mb-5"
					target="_blank"
					referrerpolicy="no-referrer"
					href="https://calendly.com/schoodic"
					use:scrollTo={{ section: 'contact' }}
				>
					Schedule&nbsp;
					<span class="hidden xs:inline whitespace-nowrap">{' '}Your Consultation</span>
					<span class="inline xs:hidden">{' '}Now</span>
					<CaretRight class="ml-3" />
				</a>
				<p class="mb-2">&mdash; or, contact us using the form below &mdash;</p>
			</div>
		</div>
		<div
			class="w-full max-w-screen-lg m-auto bg-black text-white rounded-md px-4 sm:px-8 xl:px-20 pt-14 pb-12"
		>
			<ContactForm />
		</div>
	</section>
</main>

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
				<h4 class="mb-3">We're a Maine Business</h4>
				<p class="mb-3">
					<strong class="font-semibold">Schoodic Solutions</strong> is the only tech company in Washington
					County, Maine offering unparalleled full-stack web development and design .
				</p>
				<p class="mb-5">
					We offer our services to clients in Calais, Machias, Eastport, Lubec, and all of
					Washington County, Maine, as well as clients in the rest of the United States and around
					the world.
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
				class="button blue large contained rounded-lg shadow-lg w-full lg:w-auto xl:h-[288px] lg:h-[200px] lg:!text-3xl items-center"
				target="_blank"
				referrerpolicy="no-referrer"
				href="/"
				use:scrollTo={{ section: 'contact' }}
			>
				GET YOUR QUOTE
				<CaretRight class="ml-3" />
			</a>
		</div>
	</section>

	<section use:scrollRef={'services'} class="mb-1">
		<h2 class="mb-9 text-center">Services We Offer To Our Clients</h2>
		<ServiceCards />
	</section>

	<section use:scrollRef={'our-team'}>
		<h2 class="mb-9 text-center">Meet Our Talented Team Located Globally</h2>
		<div class="team-cards">
			<div class="team-card">
				<div class="flex gap-7 mb-12">
					<img
						src="/assets/team/ryan-prescott.webp"
						class="w-24 h-24 rounded-full border-4 border-black"
						alt="Ryan Prescott"
					/>
					<div>
						<h5 class="text-brand">Ryan Prescott</h5>
						<p class="text-base">
							Founder, Owner, CEO<br />
							Lead Full Stack Developer
						</p>
					</div>
				</div>
				<ul class="accolades">
					<li>5+ years freelancing with strong leadership and business management expertise.</li>
					<li>Lifelong exposure to computers and tech, nurturing a comprehensive understanding.</li>
					<li>5+ years in web technologies, system administration and project management.</li>
				</ul>
			</div>
			<div class="team-card">
				<div class="flex gap-7 mb-12">
					<img
						src="/assets/team/muneeb-ahmed.webp"
						class="w-24 h-24 rounded-full border-4 border-black"
						alt="Muneeb Ahmed"
					/>
					<div>
						<h5 class="text-brand">Muneeb Ahmed</h5>
						<p class="text-base">
							Lead UI/UX Designer<br />
							Full Stack Developer
						</p>
					</div>
				</div>
				<ul class="accolades">
					<li>5+ years experience in UI/UX Design and Figma.</li>
					<li>
						Skilled in mocking up application dashboards that merge functionality with aesthetics
						seamlessly.
					</li>
					<li>
						Accomplished in designing and building engaging landing pages and websites with
						user-centered design principles.
					</li>
				</ul>
			</div>
			<div class="team-card">
				<div class="flex gap-7 mb-12">
					<img
						src="/assets/team/abdul-ghani.webp"
						class="w-24 h-24 rounded-full border-4 border-black"
						alt="Abdul Ghani"
					/>
					<div>
						<h5 class="text-brand">Abdul Ghani</h5>
						<p class="text-base">
							Full Stack Developer<br />
							Digital Marketing Strategist
						</p>
					</div>
				</div>
				<ul class="accolades">
					<li>
						Expertise in SEO and marketing strategies to enhance online presence and engagement.
					</li>
					<li>
						Proficient in full Stack development, creating dynamic and responsive web solutions.
					</li>
					<li>
						Adaptable in working with different technologies for development tasks and content
						management.
					</li>
				</ul>
			</div>
		</div>
	</section>

	<section use:scrollRef={'contact'}>
		<div
			class="w-full max-w-screen-xl m-auto bg-brand text-white rounded-md px-4 sm:px-8 xl:px-40 pt-14 pb-12"
		>
			<h2 class="mb-9 text-center">Get In Touch</h2>
			<ContactForm />
		</div>
	</section>
</main>

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
					tech company in Washington County offering full-stack web development and design services.
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
				class="button blue large contained w-full items-center"
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
				<div class="flex gap-7 mb-6 items-center">
					<img
						src="/assets/team/ryan-prescott.webp"
						class="w-24 h-24 rounded-full border-4 border-black"
						alt="Ryan Prescott"
					/>
					<div>
						<p class="text-md lg:text-lg uppercase">Owner, CEO & Senior Engineer</p>
						<h5 class="text-brand text-xl lg:text-2xl">Ryan Prescott</h5>
					</div>
				</div>
				<ul class="accolades">
					<li>5+ years freelancing with strong leadership and business management expertise.</li>
					<li>Lifelong hands-on experience with tech, nurturing a comprehensive understanding.</li>
					<li>5+ years in web technologies, system administration and project management.</li>
				</ul>
			</div>
			<div class="team-card">
				<div class="flex gap-7 mb-6 items-center">
					<img
						src="/assets/team/muneeb-ahmed.webp"
						class="w-24 h-24 rounded-full border-4 border-black"
						alt="Muneeb Ahmed"
					/>
					<div>
						<p class="text-md lg:text-lg uppercase">Chief Design Officer & Staff Engineer</p>
						<h5 class="text-brand text-xl lg:text-2xl">Muneeb Ahmed</h5>
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
				<div class="flex gap-7 mb-6 items-center">
					<img
						src="/assets/team/abdul-ghani.webp"
						class="w-24 h-24 rounded-full border-4 border-black"
						alt="Abdul Ghani"
					/>
					<div>
						<p class="text-md lg:text-lg uppercase">Chief Marketing Officer</p>
						<h5 class="text-brand text-xl lg:text-2xl">Abdul Ghani</h5>
					</div>
				</div>
				<ul class="accolades">
					<li>
						Develops and implements comprehensive marketing strategies to drive brand awareness,
						customer acquisition, and revenue growth in alignment with the company's overall
						business objectives.
					</li>
					<li>
						Leads and mentors a high-performing marketing team, fostering a culture of creativity,
						innovation, and excellence to deliver impactful marketing campaigns and initiatives.
					</li>
					<li>
						Conducts thorough market research and competitive analysis to identify emerging trends,
						opportunities, and threats, ensuring the company remains ahead of industry developments
						and maintains a competitive edge.
					</li>
				</ul>
			</div>
			<div class="team-card">
				<div class="flex gap-7 mb-6 items-center">
					<img
						src="/assets/team/mason-fortier.webp"
						class="w-24 h-24 rounded-full border-4 border-black"
						alt="Mason Fortier"
					/>
					<div>
						<p class="text-md lg:text-lg uppercase">Lead Project Manager</p>
						<h5 class="text-brand text-xl lg:text-2xl">Mason Fortier</h5>
					</div>
				</div>
				<ul class="accolades">
					<li>
						Spearheads the planning, execution, and closing of projects, ensuring they meet
						deadlines, budget constraints, and quality standards.
					</li>
					<li>
						Facilitates effective communication and collaboration among team members, stakeholders,
						and clients to achieve project goals.
					</li>
					<li>
						Identifies potential risks, develops mitigation strategies, and monitors progress to
						ensure project success and stakeholder satisfaction.
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

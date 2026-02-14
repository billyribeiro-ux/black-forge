<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Icon from '@iconify/svelte';

	const values = [
		{
			number: '01',
			title: 'Engineering Over Assembly',
			description:
				"We write code. Line by line. We don't drag and drop components and call it development. Every project is architected, not assembled."
		},
		{
			number: '02',
			title: 'Performance Is Non-Negotiable',
			description:
				'A beautiful website that loads in 5 seconds is a failed website. We guarantee 95+ Lighthouse scores because speed is the foundation of everything.'
		},
		{
			number: '03',
			title: 'Radical Transparency',
			description:
				'No hidden fees. No scope creep surprises. No "that\'ll cost extra." You know exactly what you\'re getting, what it costs, and when it ships.'
		},
		{
			number: '04',
			title: 'Own Your Code',
			description:
				"You paid for it, you own it. Full source code, full documentation, full freedom to take it anywhere. We earn your loyalty — we don't lock you in."
		},
		{
			number: '05',
			title: 'Small Team, Big Standards',
			description:
				"We don't outsource to junior freelancers. Every person who touches your project is a senior professional who takes personal ownership."
		},
		{
			number: '06',
			title: 'Build for the Long Game',
			description:
				'We architect for 10-year longevity. No tech debt bombs. No "you will need to rebuild in 2 years." Our code is an investment, not an expense.'
		}
	];

	const team = [
		{
			name: 'Alex Rivera',
			role: 'Founder & Lead Engineer',
			bio: 'Full-stack engineer with 12 years building production applications. Obsessed with performance and clean architecture.'
		},
		{
			name: 'Sarah Chen',
			role: 'Senior Frontend Engineer',
			bio: 'Specialist in modern frameworks, animation, and pixel-perfect interfaces.'
		},
		{
			name: 'Marcus Thompson',
			role: 'Backend & Infrastructure',
			bio: 'Database architecture, API design, and cloud infrastructure. Keeps everything running at scale.'
		},
		{
			name: 'Jennifer Park',
			role: 'SEO Strategist',
			bio: 'Data-driven search specialist. Turns organic traffic into revenue with technical SEO and content strategy.'
		},
		{
			name: 'David Kim',
			role: 'UI/UX Designer',
			bio: 'Human-centered design for complex applications. Converts wireframes into high-converting interfaces.'
		},
		{
			name: 'Emily Rodriguez',
			role: 'Project Manager',
			bio: 'Keeps timelines tight, communication clear, and deliverables on schedule. Your single point of contact.'
		}
	];
</script>

<svelte:head>
	<title>About Us — Meet the Team | Blackforge Digital</title>
	<meta
		name="description"
		content="Based in Wolcott, CT. Senior engineers, designers, and strategists who build digital products that last. No juniors. No outsourcing."
	/>
</svelte:head>

<!-- HERO -->
<Section background="black" padding="lg" grain={true}>
	<div
		class="relative"
		style="background: radial-gradient(ellipse at 30% 80%, rgba(255, 77, 0, 0.07) 0%, transparent 50%);"
	>
		<Container>
			<div class="grid grid-cols-1 gap-16 py-16 lg:grid-cols-2">
				<div>
					<Eyebrow class="mb-6">About Blackforge</Eyebrow>
					<h1 class="font-clash text-forge-white mb-6 text-5xl font-bold md:text-6xl">
						Built Different. On Purpose.
					</h1>
					<p class="text-forge-smoke text-xl leading-relaxed">
						Blackforge Digital isn't a traditional agency. We're a tight engineering team that
						builds custom digital products — websites, applications, and search strategies — for
						businesses that can't afford to blend in.
					</p>
				</div>
				<div class="flex items-center justify-center">
					<div class="relative h-96 w-full">
						<div
							class="bg-forge-charcoal absolute inset-0 opacity-20"
							style="clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);"
						></div>
						<div
							class="bg-forge-steel absolute inset-0 opacity-10"
							style="clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);"
						></div>
						<div
							class="bg-forge-ember absolute inset-0 opacity-5"
							style="clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%);"
						></div>
					</div>
				</div>
			</div>
		</Container>
	</div>
</Section>

<!-- ORIGIN STORY -->
<Section background="charcoal" padding="lg">
	<Container size="narrow">
		<h2 class="font-clash text-forge-white mb-8 text-4xl font-semibold md:text-5xl">
			The Forge Origin
		</h2>

		<div class="text-forge-smoke space-y-6 text-lg leading-relaxed">
			<p
				class="first-letter:font-clash first-letter:text-forge-ember first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:leading-none first-letter:font-bold"
			>
				Every agency says they're different. Here's how we actually are: We started Blackforge
				because we were tired of watching businesses get burned by agencies that deliver templates
				dressed up as "custom" work. Tired of seeing $30,000 WordPress sites that crumble under
				traffic and can't rank on Google.
			</p>

			<p>
				We believe that building a website should be an engineering discipline — not a design
				exercise. That the technology choices you make today determine whether your digital presence
				compounds in value or decays into technical debt. That businesses deserve partners who think
				in decades, not deliverables.
			</p>

			<div class="border-forge-ember my-12 border-l-4 pl-8">
				<blockquote class="font-clash text-forge-ember text-2xl italic md:text-3xl">
					"Businesses deserve partners who think in decades, not deliverables."
				</blockquote>
			</div>

			<p>
				Based in Wolcott, Connecticut, we've assembled a team of senior engineers, designers, and
				strategists who share one obsession: building digital products that are genuinely,
				measurably, undeniably better than what anyone else is shipping.
			</p>

			<p>
				We're small by choice. We don't want 200 clients — we want 20 clients who we can make
				unstoppable.
			</p>
		</div>
	</Container>
</Section>

<!-- VALUES -->
<Section background="black" padding="lg">
	<Container>
		<div class="mb-16">
			<Eyebrow withLine={true} class="mb-6">What We Stand For</Eyebrow>
			<h2 class="font-clash text-forge-white text-4xl font-semibold md:text-5xl">
				Principles. Not Platitudes.
			</h2>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each values as value}
				<div class="border-forge-steel flex gap-6 border-b pb-8">
					<div class="shrink-0">
						<div class="font-clash text-forge-ember/30 text-5xl font-bold">{value.number}</div>
					</div>
					<div>
						<h3 class="font-satoshi text-forge-white mb-2 text-xl font-semibold">
							{value.title}
						</h3>
						<p class="text-forge-ash leading-relaxed">{value.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</Container>
</Section>

<!-- TEAM -->
<Section background="charcoal" padding="lg">
	<Container>
		<div class="mb-16">
			<Eyebrow withLine={true} class="mb-6">The Team</Eyebrow>
			<h2 class="font-clash text-forge-white mb-4 text-4xl font-semibold md:text-5xl">
				Senior Talent Only.
			</h2>
			<p class="text-forge-smoke max-w-2xl text-lg">
				No interns. No junior devs learning on your project. Every team member has 7+ years of
				production experience.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each team as member}
				<div class="bg-forge-black group overflow-hidden transition-transform hover:-translate-y-1">
					<div
						class="bg-forge-steel flex aspect-square items-center justify-center grayscale transition-all duration-700 group-hover:grayscale-0"
					>
						<div
							class="bg-forge-charcoal border-forge-ember text-forge-white font-clash flex h-24 w-24 items-center justify-center rounded-full border-2 text-3xl font-bold"
						>
							{member.name.charAt(0)}
						</div>
					</div>
					<div class="p-6">
						<h3 class="font-satoshi text-forge-white mb-1 text-lg font-semibold">
							{member.name}
						</h3>
						<div class="text-forge-ember mb-3 text-sm">{member.role}</div>
						<p class="text-forge-ash mb-4 text-sm leading-relaxed">{member.bio}</p>
						<div class="flex gap-4">
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								class="text-forge-ash hover:text-forge-ember transition-colors"
								aria-label="LinkedIn profile"
							>
								<Icon icon="ph:linkedin-logo" width="18" />
							</a>
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								class="text-forge-ash hover:text-forge-ember transition-colors"
								aria-label="GitHub profile"
							>
								<Icon icon="ph:github-logo" width="18" />
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</Container>
</Section>

<!-- TOOLS -->
<Section background="black" padding="lg">
	<Container size="narrow">
		<div class="mb-12 text-center">
			<h2 class="font-clash text-forge-white mb-4 text-4xl font-semibold md:text-5xl">
				Our Toolkit
			</h2>
			<p class="text-forge-smoke">
				We use the best tools for the job — not the most popular ones. Here's what powers our work.
			</p>
		</div>

		<div class="grid grid-cols-3 gap-6 md:grid-cols-6">
			{#each ['SvelteKit', 'React', 'Next.js', 'TypeScript', 'Rust', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind', 'GSAP', 'Figma', 'Vercel', 'AWS', 'Cloudflare', 'Docker', 'Sanity', 'Ahrefs', 'GA4'] as tech}
				<div
					class="bg-forge-charcoal group flex aspect-square items-center justify-center opacity-40 transition-opacity hover:opacity-100"
				>
					<span class="font-jetbrains text-forge-smoke px-2 text-center text-xs">{tech}</span>
				</div>
			{/each}
		</div>
	</Container>
</Section>

<!-- CTA -->
<Section background="black" padding="lg">
	<div
		class="px-8 py-24 text-center"
		style="background: linear-gradient(135deg, var(--forge-ember) 0%, var(--forge-glow) 100%);"
	>
		<Container size="narrow">
			<h2 class="font-clash text-forge-black mb-6 text-4xl font-bold md:text-5xl">
				Ready to Work With a Team That Actually Gives a Damn?
			</h2>
			<p class="text-forge-black/80 mb-10 text-lg">
				Let's build something that makes your competitors nervous.
			</p>
			<Button variant="secondary" size="lg" href="/contact">
				{#snippet children()}
					<span class="text-forge-black hover:text-forge-white transition-colors">
						Talk to Our Team →
					</span>
				{/snippet}
			</Button>
		</Container>
	</div>
</Section>

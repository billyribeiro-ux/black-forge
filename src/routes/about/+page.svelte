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
				'We architect for 10-year longevity. No tech debt bombs. No "you\'ll need to rebuild in 2 years." Our code is an investment, not an expense.'
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
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
				<div>
					<Eyebrow class="mb-6">About Blackforge</Eyebrow>
					<h1 class="font-clash text-5xl md:text-6xl font-bold text-forge-white mb-6">
						Built Different. On Purpose.
					</h1>
					<p class="text-xl text-forge-smoke leading-relaxed">
						Blackforge Digital isn't a traditional agency. We're a tight engineering team that
						builds custom digital products — websites, applications, and search strategies — for
						businesses that can't afford to blend in.
					</p>
				</div>
				<div class="flex items-center justify-center">
					<div class="relative w-full h-96">
						<div
							class="absolute inset-0 bg-forge-charcoal opacity-20"
							style="clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);"
						></div>
						<div
							class="absolute inset-0 bg-forge-steel opacity-10"
							style="clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);"
						></div>
						<div
							class="absolute inset-0 bg-forge-ember opacity-5"
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
		<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-8">
			The Forge Origin
		</h2>

		<div class="space-y-6 text-forge-smoke leading-relaxed text-lg">
			<p class="first-letter:text-6xl first-letter:font-clash first-letter:font-bold first-letter:text-forge-ember first-letter:float-left first-letter:mr-3 first-letter:leading-none">
				Every agency says they're different. Here's how we actually are: We started Blackforge
				because we were tired of watching businesses get burned by agencies that deliver templates
				dressed up as "custom" work. Tired of seeing $30,000 WordPress sites that crumble under
				traffic and can't rank on Google.
			</p>

			<p>
				We believe that building a website should be an engineering discipline — not a design
				exercise. That the technology choices you make today determine whether your digital
				presence compounds in value or decays into technical debt. That businesses deserve partners
				who think in decades, not deliverables.
			</p>

			<div class="my-12 pl-8 border-l-4 border-forge-ember">
				<blockquote class="font-clash text-2xl md:text-3xl text-forge-ember italic">
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
			<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white">
				Principles. Not Platitudes.
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each values as value}
				<div class="flex gap-6 pb-8 border-b border-forge-steel">
					<div class="flex-shrink-0">
						<div class="font-clash text-5xl font-bold text-forge-ember/30">{value.number}</div>
					</div>
					<div>
						<h3 class="font-satoshi text-xl font-semibold text-forge-white mb-2">
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
			<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-4">
				Senior Talent Only.
			</h2>
			<p class="text-lg text-forge-smoke max-w-2xl">
				No interns. No junior devs learning on your project. Every team member has 7+ years of
				production experience.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each team as member}
				<div class="bg-forge-black overflow-hidden group hover:-translate-y-1 transition-transform">
					<div
						class="aspect-square bg-forge-steel grayscale group-hover:grayscale-0 transition-all duration-700 flex items-center justify-center"
					>
						<div
							class="w-24 h-24 rounded-full bg-forge-charcoal border-2 border-forge-ember flex items-center justify-center text-forge-white font-clash text-3xl font-bold"
						>
							{member.name.charAt(0)}
						</div>
					</div>
					<div class="p-6">
						<h3 class="font-satoshi text-lg font-semibold text-forge-white mb-1">
							{member.name}
						</h3>
						<div class="text-sm text-forge-ember mb-3">{member.role}</div>
						<p class="text-sm text-forge-ash leading-relaxed mb-4">{member.bio}</p>
						<div class="flex gap-4">
							<a href="#" class="text-forge-ash hover:text-forge-ember transition-colors">
								<Icon icon="ph:linkedin-logo" width="18" />
							</a>
							<a href="#" class="text-forge-ash hover:text-forge-ember transition-colors">
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
		<div class="text-center mb-12">
			<h2 class="font-clash text-4xl md:text-5xl font-semibold text-forge-white mb-4">
				Our Toolkit
			</h2>
			<p class="text-forge-smoke">
				We use the best tools for the job — not the most popular ones. Here's what powers our work.
			</p>
		</div>

		<div class="grid grid-cols-3 md:grid-cols-6 gap-6">
			{#each ['SvelteKit', 'React', 'Next.js', 'TypeScript', 'Rust', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind', 'GSAP', 'Figma', 'Vercel', 'AWS', 'Cloudflare', 'Docker', 'Sanity', 'Ahrefs', 'GA4'] as tech}
				<div
					class="aspect-square bg-forge-charcoal flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity group"
				>
					<span class="text-xs font-jetbrains text-forge-smoke text-center px-2">{tech}</span>
				</div>
			{/each}
		</div>
	</Container>
</Section>

<!-- CTA -->
<Section background="black" padding="lg">
	<div
		class="py-24 px-8 text-center"
		style="background: linear-gradient(135deg, var(--forge-ember) 0%, var(--forge-glow) 100%);"
	>
		<Container size="narrow">
			<h2 class="font-clash text-4xl md:text-5xl font-bold text-forge-black mb-6">
				Ready to Work With a Team That Actually Gives a Damn?
			</h2>
			<p class="text-lg text-forge-black/80 mb-10">
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

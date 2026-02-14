<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Icon from '@iconify/svelte';

	const phases = [
		{
			number: '01',
			title: 'Discovery & Strategy',
			duration: '1-2 Weeks',
			description:
				'Before a single line of code is written, we deep-dive into your business, your market, your competitors, and your users. This phase produces the strategic blueprint that every decision is built on.',
			deliverables: [
				'Competitive analysis & market positioning report',
				'User persona development',
				'Site architecture & information hierarchy',
				'SEO keyword strategy & content map',
				'Technical requirements specification',
				'Project timeline with milestones'
			]
		},
		{
			number: '02',
			title: 'Design & Prototyping',
			duration: '2-3 Weeks',
			description:
				"Design isn't decoration — it's communication. We create high-fidelity designs and interactive prototypes that you can click through, test, and approve before development begins. No surprises when the site launches.",
			deliverables: [
				'Brand integration & visual direction',
				'High-fidelity desktop & mobile mockups (Figma)',
				'Interactive prototype for key user flows',
				'Design system & component library',
				'Animation & micro-interaction specifications',
				'Client review & revision rounds (2 included)'
			]
		},
		{
			number: '03',
			title: 'Engineering & Development',
			duration: '4-8 Weeks',
			description:
				'This is where the forge fires up. Our engineers hand-code every component using modern frameworks and TypeScript strict mode. No page builders, no shortcuts. You get production-grade code that performs, scales, and lasts.',
			deliverables: [
				'Custom frontend development (SvelteKit/React/Next.js)',
				'Backend & API architecture',
				'CMS integration & content modeling',
				'Responsive implementation (mobile-first)',
				'Performance optimization (target: 95+ Lighthouse)',
				'Weekly progress demos & staging access'
			]
		},
		{
			number: '04',
			title: 'Testing & Quality Assurance',
			duration: '1-2 Weeks',
			description:
				"Nothing ships until it's tested across every browser, every device, and every edge case. We run automated tests, manual QA, accessibility audits, and performance benchmarks. If it doesn't meet our standards, it doesn't ship.",
			deliverables: [
				'Cross-browser testing (Chrome, Firefox, Safari, Edge)',
				'Device testing (iOS, Android, tablet, desktop)',
				'Accessibility audit (WCAG 2.1 AA compliance)',
				'Performance benchmarking & optimization',
				'SEO pre-launch audit',
				'Security vulnerability scan'
			]
		},
		{
			number: '05',
			title: 'Launch',
			duration: '1 Day',
			description:
				'Deployment is choreographed, not chaotic. DNS switches, SSL certificates, redirects, analytics — everything is handled. You wake up to a live site that works perfectly.',
			deliverables: [
				'DNS configuration & SSL setup',
				'301 redirect mapping (preserving SEO equity)',
				'Analytics & tracking verification',
				'Search Console & sitemap submission',
				'Performance monitoring activation',
				'Client walkthrough & CMS training'
			]
		},
		{
			number: '06',
			title: 'Growth & Optimization',
			duration: 'Ongoing',
			description:
				"Launch isn't the finish line — it's the starting line. We monitor performance, analyze user behavior, and continuously optimize. Your site gets better every month, not worse.",
			deliverables: [
				'Monthly performance reports',
				'Core Web Vitals monitoring',
				'Conversion rate optimization (CRO)',
				'Content updates & feature additions',
				'Security patches & dependency updates',
				'Priority support & bug fixes (SLA-backed)'
			]
		}
	];

	const faqs = [
		{
			question: 'How much does a project cost?',
			answer:
				'Every project is scoped individually because every business is different. Web development projects typically range from $8,000 to $50,000+ depending on complexity. We provide detailed proposals with fixed pricing — no hourly surprises.'
		},
		{
			question: 'How long does a typical project take?',
			answer:
				"Most projects launch in 10-16 weeks. Simple marketing sites can be faster (6-8 weeks), while complex web applications may take longer (16-24 weeks). You'll have a detailed timeline before we start."
		},
		{
			question: "Do I own the code when it's done?",
			answer:
				'100%. Full source code, full documentation, full repository access. You can take it anywhere. We earn your continued business through results, not vendor lock-in.'
		},
		{
			question: 'Do you work with businesses outside of Connecticut?',
			answer:
				"Absolutely. While we're based in Wolcott, CT, we work with clients nationwide. Our process is fully remote-friendly with structured communication and weekly demos."
		},
		{
			question: 'What if I already have a website?',
			answer:
				"We specialize in migrations and rebuilds. We'll audit your current site, preserve your SEO equity, and build you something dramatically better. Your rankings won't drop — they'll improve."
		},
		{
			question: 'What happens after launch?',
			answer:
				"We offer ongoing support and optimization packages. Monthly performance monitoring, content updates, security patches, and continuous improvement. We don't disappear after launch."
		}
	];

	let openFaqIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}
</script>

<svelte:head>
	<title>Our Process — How We Work | Blackforge Digital</title>
	<meta
		name="description"
		content="Our proven 6-phase framework: Discovery, Design, Engineering, Testing, Launch, and Growth. No surprises. Just results."
	/>
</svelte:head>

<!-- HERO -->
<Section background="black" padding="lg" grain={true} grid={true}>
	<Container>
		<div class="max-w-4xl py-16">
			<Eyebrow class="mb-6">How We Work</Eyebrow>
			<h1 class="font-clash text-forge-white mb-6 text-5xl font-bold md:text-6xl">
				Precision Has a Process.
			</h1>
			<p class="text-forge-smoke max-w-2xl text-xl leading-relaxed">
				Every Blackforge project follows a proven 6-phase framework designed to eliminate surprises,
				maintain quality, and deliver on time. Here's exactly what to expect.
			</p>
		</div>
	</Container>
</Section>

<!-- PHASES -->
{#each phases as phase, i}
	<Section background={i % 2 === 0 ? 'black' : 'charcoal'} padding="lg">
		<Container>
			<div class="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
				<div class="relative {i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}">
					<div
						class="font-clash text-forge-ember/15 pointer-events-none absolute -top-12 -left-8 text-9xl font-bold"
					>
						{phase.number}
					</div>
					<div class="relative z-10">
						<div
							class="bg-forge-ember/10 border-forge-ember text-forge-ember font-jetbrains mb-4 inline-block border px-3 py-1 text-xs tracking-wider uppercase"
						>
							Phase {phase.number}
						</div>
						<h2 class="font-clash text-forge-white mb-4 text-4xl font-semibold md:text-5xl">
							{phase.title}
						</h2>
						<div
							class="bg-forge-charcoal text-forge-smoke font-general mb-6 inline-block px-4 py-2 text-sm"
						>
							{phase.duration}
						</div>
						<p class="text-forge-smoke mb-8 text-lg leading-relaxed">
							{phase.description}
						</p>
						<div>
							<h3 class="font-satoshi text-forge-white mb-4 font-semibold">What You Get:</h3>
							<ul class="space-y-3">
								{#each phase.deliverables as deliverable}
									<li class="flex items-start gap-3">
										<Icon
											icon="ph:check-circle"
											class="text-forge-ember mt-1 shrink-0"
											width="20"
										/>
										<span class="text-forge-ash">{deliverable}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>

				<div class="flex items-center justify-center {i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}">
					<div class="bg-forge-steel/20 flex h-96 w-full items-center justify-center rounded-sm">
						<span class="text-forge-ash text-sm">Phase {phase.number} Visual</span>
					</div>
				</div>
			</div>
		</Container>
	</Section>
{/each}

<!-- TIMELINE -->
<Section background="black" padding="lg">
	<Container size="narrow">
		<div class="mb-12 text-center">
			<h2 class="font-clash text-forge-white mb-4 text-4xl font-semibold md:text-5xl">
				Typical Timeline
			</h2>
			<p class="text-forge-smoke">Most projects complete in 10-16 weeks from kickoff to launch.</p>
		</div>

		<div class="space-y-4">
			{#each [{ phase: 'Phase 1 — Discovery', weeks: 2, start: 0 }, { phase: 'Phase 2 — Design', weeks: 3, start: 2 }, { phase: 'Phase 3 — Engineering', weeks: 7, start: 5 }, { phase: 'Phase 4 — QA', weeks: 2, start: 12 }, { phase: 'Phase 5 — Launch', weeks: 1, start: 14 }, { phase: 'Phase 6 — Growth', weeks: 4, start: 15, ongoing: true }] as item}
				<div class="flex items-center gap-4">
					<div class="font-satoshi text-forge-white w-48 shrink-0 text-sm">
						{item.phase}
					</div>
					<div class="bg-forge-charcoal relative h-12 flex-1 overflow-hidden">
						<div
							class="from-forge-ember to-forge-glow absolute top-0 bottom-0 bg-linear-to-r"
							style="left: {(item.start / 19) * 100}%; width: {(item.weeks / 19) * 100}%;"
						></div>
						{#if item.ongoing}
							<div
								class="from-forge-glow absolute top-0 right-0 bottom-0 w-8 bg-linear-to-r to-transparent opacity-50"
							></div>
						{/if}
					</div>
					<div class="font-jetbrains text-forge-ash w-24 shrink-0 text-right text-xs">
						{item.ongoing ? 'Ongoing' : `Weeks ${item.start + 1}-${item.start + item.weeks}`}
					</div>
				</div>
			{/each}
		</div>
	</Container>
</Section>

<!-- FAQ -->
<Section background="charcoal" padding="lg">
	<Container size="narrow">
		<div class="mb-12 text-center">
			<h2 class="font-clash text-forge-white text-4xl font-semibold md:text-5xl">
				Questions We Get Asked.
			</h2>
		</div>

		<div class="bg-forge-steel space-y-px">
			{#each faqs as faq, i}
				<div class="bg-forge-black">
					<button
						onclick={() => toggleFaq(i)}
						class="hover:bg-forge-charcoal group flex w-full items-center justify-between p-6 text-left transition-colors"
					>
						<span
							class="font-satoshi text-lg font-medium {openFaqIndex === i
								? 'text-forge-ember'
								: 'text-forge-white'} transition-colors"
						>
							{faq.question}
						</span>
						<Icon
							icon="ph:plus"
							class="text-forge-ember shrink-0 transition-transform {openFaqIndex === i
								? 'rotate-45'
								: ''}"
							width="24"
						/>
					</button>
					{#if openFaqIndex === i}
						<div class="text-forge-ash px-6 pb-6 leading-relaxed">
							{faq.answer}
						</div>
					{/if}
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
				Enough Reading. Let's Talk.
			</h2>
			<p class="text-forge-black/80 mb-10 text-lg">
				Book a free strategy call and we'll walk you through exactly how this process applies to
				your project.
			</p>
			<Button variant="secondary" size="lg" href="/contact">
				{#snippet children()}
					<span class="text-forge-black hover:text-forge-white transition-colors">
						Book Your Strategy Call →
					</span>
				{/snippet}
			</Button>
		</Container>
	</div>
</Section>

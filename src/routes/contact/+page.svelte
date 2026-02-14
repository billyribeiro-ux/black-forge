<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
	import Icon from '@iconify/svelte';

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		company: '',
		service: '',
		budget: '',
		message: '',
		source: ''
	});

	let isSubmitting = $state(false);
	let isSuccess = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		isSubmitting = false;
		isSuccess = true;
	}
</script>

<svelte:head>
	<title>Contact Us — Start Your Project | Blackforge Digital</title>
	<meta
		name="description"
		content="Ready to build something exceptional? Get in touch. Average response time: under 4 hours. Based in Wolcott, CT."
	/>
</svelte:head>

<!-- HERO / CONTACT FORM SECTION -->
<Section background="black" padding="lg" grain={true}>
	<div
		class="relative"
		style="background: radial-gradient(ellipse at 20% 80%, rgba(255, 77, 0, 0.06) 0%, transparent 50%);"
	>
		<Container>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
				<!-- LEFT COLUMN - Contact Info -->
				<div>
					<Eyebrow class="mb-6">Let's Build</Eyebrow>
					<h1 class="font-clash text-5xl md:text-6xl font-bold mb-2">
						<span class="text-forge-white">Your Move</span><span class="text-forge-ember">.</span>
					</h1>
					<p class="text-xl text-forge-smoke leading-relaxed mb-12 max-w-lg">
						Every great project starts with a conversation. Tell us what you're building, and we'll
						tell you exactly how we'd approach it. No commitment. No pitch deck. Just a real talk.
					</p>

					<!-- Direct Contact -->
					<div class="mb-12">
						<div class="font-jetbrains text-xs uppercase tracking-wider text-forge-ember mb-6">
							Direct Contact
						</div>
						<div class="space-y-5">
							<a
								href="mailto:hello@blackforge.digital"
								class="flex items-center gap-4 text-forge-white hover:text-forge-ember transition-colors group"
							>
								<Icon icon="ph:envelope" class="text-forge-ember" width="24" />
								<span>hello@blackforge.digital</span>
							</a>
							<a
								href="tel:+12035550100"
								class="flex items-center gap-4 text-forge-white hover:text-forge-ember transition-colors group"
							>
								<Icon icon="ph:phone" class="text-forge-ember" width="24" />
								<span>(203) 555-0100</span>
							</a>
							<div class="flex items-start gap-4 text-forge-smoke">
								<Icon icon="ph:map-pin" class="text-forge-ember shrink-0 mt-1" width="24" />
								<div>
									<div>Wolcott, Connecticut 06716</div>
									<div class="text-sm text-forge-ash mt-1">Serving clients nationwide</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Response Time -->
					<div class="bg-forge-charcoal p-6 border-l-4 border-l-forge-ember max-w-md mb-12">
						<div class="flex items-center gap-3 text-forge-smoke">
							<Icon icon="ph:clock" class="text-forge-ember" width="20" />
							<span class="text-sm">
								Average response time: under 4 hours during business hours.
							</span>
						</div>
					</div>

					<!-- Social Links -->
					<div>
						<div class="font-jetbrains text-xs uppercase tracking-wider text-forge-ash mb-4">
							Follow Us
						</div>
						<div class="flex gap-5">
							{#each [ { icon: 'ph:linkedin-logo', href: '#', label: 'LinkedIn' }, { icon: 'ph:x-logo', href: '#', label: 'X/Twitter' }, { icon: 'ph:instagram-logo', href: '#', label: 'Instagram' }, { icon: 'ph:github-logo', href: '#', label: 'GitHub' } ] as social}
								<a
									href={social.href}
									class="text-forge-ash hover:text-forge-ember hover:-translate-y-0.5 transition-all"
									aria-label={social.label}
								>
									<Icon icon={social.icon} width="24" />
								</a>
							{/each}
						</div>
					</div>

					<!-- Office Hours -->
					<div class="mt-8">
						<div class="font-jetbrains text-xs uppercase tracking-wider text-forge-ash mb-3">
							Hours
						</div>
						<div class="text-sm text-forge-smoke space-y-1">
							<div>Monday – Friday: 8:00 AM – 6:00 PM EST</div>
							<div>Saturday: By Appointment</div>
							<div>Sunday: Closed</div>
						</div>
					</div>
				</div>

				<!-- RIGHT COLUMN - Contact Form -->
				<div>
					{#if !isSuccess}
						<div class="bg-forge-charcoal p-8 md:p-10 border border-forge-steel">
							<h2 class="font-satoshi text-2xl font-bold text-forge-white mb-2">
								Start Your Project
							</h2>
							<p class="text-sm text-forge-ash mb-8">
								Fill out the form below and we'll get back to you within one business day.
							</p>

							<form onsubmit={handleSubmit} class="space-y-6">
								<!-- Name -->
								<div>
									<label
										for="name"
										class="block font-satoshi text-sm font-medium uppercase tracking-wider text-forge-smoke mb-2"
									>
										Full Name <span class="text-forge-ember">*</span>
									</label>
									<input
										type="text"
										id="name"
										bind:value={formData.name}
										required
										placeholder="John Smith"
										class="w-full px-4 py-3 bg-forge-black border border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:outline-none focus:ring-1 focus:ring-forge-ember transition-colors"
									/>
								</div>

								<!-- Email -->
								<div>
									<label
										for="email"
										class="block font-satoshi text-sm font-medium uppercase tracking-wider text-forge-smoke mb-2"
									>
										Email Address <span class="text-forge-ember">*</span>
									</label>
									<input
										type="email"
										id="email"
										bind:value={formData.email}
										required
										placeholder="john@company.com"
										class="w-full px-4 py-3 bg-forge-black border border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:outline-none focus:ring-1 focus:ring-forge-ember transition-colors"
									/>
								</div>

								<!-- Phone -->
								<div>
									<label
										for="phone"
										class="block font-satoshi text-sm font-medium uppercase tracking-wider text-forge-smoke mb-2"
									>
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										bind:value={formData.phone}
										placeholder="(203) 555-0100"
										class="w-full px-4 py-3 bg-forge-black border border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:outline-none focus:ring-1 focus:ring-forge-ember transition-colors"
									/>
								</div>

								<!-- Company -->
								<div>
									<label
										for="company"
										class="block font-satoshi text-sm font-medium uppercase tracking-wider text-forge-smoke mb-2"
									>
										Company / Organization
									</label>
									<input
										type="text"
										id="company"
										bind:value={formData.company}
										placeholder="Acme Corp"
										class="w-full px-4 py-3 bg-forge-black border border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:outline-none focus:ring-1 focus:ring-forge-ember transition-colors"
									/>
								</div>

								<!-- Service -->
								<div>
									<label
										for="service"
										class="block font-satoshi text-sm font-medium uppercase tracking-wider text-forge-smoke mb-2"
									>
										What Do You Need? <span class="text-forge-ember">*</span>
									</label>
									<select
										id="service"
										bind:value={formData.service}
										required
										class="w-full px-4 py-3 bg-forge-black border border-forge-steel text-forge-white focus:border-forge-ember focus:outline-none focus:ring-1 focus:ring-forge-ember transition-colors"
									>
										<option value="">Select a service...</option>
										<option value="web">Web Development</option>
										<option value="app">App Development</option>
										<option value="seo">SEO & Digital Growth</option>
										<option value="web-seo">Web + SEO Package</option>
										<option value="full">Full Digital Ecosystem</option>
										<option value="unsure">Not Sure Yet — Let's Talk</option>
									</select>
								</div>

								<!-- Budget -->
								<div>
									<label
										for="budget"
										class="block font-satoshi text-sm font-medium uppercase tracking-wider text-forge-smoke mb-2"
									>
										Budget Range
									</label>
									<select
										id="budget"
										bind:value={formData.budget}
										class="w-full px-4 py-3 bg-forge-black border border-forge-steel text-forge-white focus:border-forge-ember focus:outline-none focus:ring-1 focus:ring-forge-ember transition-colors"
									>
										<option value="">Select a range...</option>
										<option value="under-8k">Under $8,000</option>
										<option value="8k-15k">$8,000 – $15,000</option>
										<option value="15k-30k">$15,000 – $30,000</option>
										<option value="30k-50k">$30,000 – $50,000</option>
										<option value="50k-plus">$50,000+</option>
										<option value="unsure">Not Sure Yet</option>
									</select>
								</div>

								<!-- Message -->
								<div>
									<label
										for="message"
										class="block font-satoshi text-sm font-medium uppercase tracking-wider text-forge-smoke mb-2"
									>
										Tell Us About Your Project <span class="text-forge-ember">*</span>
									</label>
									<textarea
										id="message"
										bind:value={formData.message}
										required
										rows="5"
										placeholder="What are you building? What problems are you solving? What does success look like?"
										class="w-full px-4 py-3 bg-forge-black border border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:outline-none focus:ring-1 focus:ring-forge-ember transition-colors resize-none"
									></textarea>
									<div class="text-xs text-forge-ash text-right mt-1">
										{formData.message.length} / 2000
									</div>
								</div>

								<!-- Submit Button -->
								<Button
									variant="primary"
									size="lg"
									type="submit"
									class="w-full"
									disabled={isSubmitting}
								>
									{#snippet children()}
										{#if isSubmitting}
											<span class="flex items-center justify-center gap-2">
												<Icon icon="ph:circle-notch" class="animate-spin" width="20" />
												Sending...
											</span>
										{:else}
											Submit Your Project →
										{/if}
									{/snippet}
								</Button>
							</form>
						</div>
					{:else}
						<!-- Success State -->
						<div class="bg-forge-charcoal p-8 md:p-10 border border-forge-steel text-center">
							<div
								class="w-16 h-16 rounded-full border-4 border-forge-ember flex items-center justify-center mx-auto mb-6"
							>
								<Icon icon="ph:check" class="text-forge-ember" width="32" />
							</div>
							<h2 class="font-clash text-3xl font-semibold text-forge-white mb-4">
								We're On It.
							</h2>
							<p class="text-forge-smoke mb-8 max-w-md mx-auto">
								Thank you for reaching out. We'll review your project details and get back to you
								within one business day — usually much sooner.
							</p>
							<div class="text-left max-w-md mx-auto mb-8">
								<div class="font-jetbrains text-xs uppercase tracking-wider text-forge-ember mb-4">
									What Happens Next
								</div>
								<div class="space-y-3">
									{#each ['We review your project details — within hours', 'We schedule a strategy call — to discuss your goals', 'We deliver a custom proposal — with timeline and pricing'] as step}
										<div class="flex items-start gap-3">
											<Icon icon="ph:check-circle" class="text-forge-ember shrink-0 mt-0.5" width="20" />
											<span class="text-sm text-forge-smoke">{step}</span>
										</div>
									{/each}
								</div>
							</div>
							<a
								href="/portfolio"
								class="inline-flex items-center gap-2 text-forge-ember hover:text-forge-glow font-satoshi text-sm uppercase tracking-wider transition-colors"
							>
								While you wait, check out our recent work →
							</a>
						</div>
					{/if}
				</div>
			</div>
		</Container>
	</div>
</Section>

<!-- MAP SECTION -->
<Section background="black" padding="lg">
	<Container>
		<div class="h-96 bg-forge-charcoal flex items-center justify-center">
			<div class="text-center">
				<Icon icon="ph:map-pin" class="text-forge-ember mx-auto mb-4" width="48" />
				<div class="font-satoshi text-forge-white font-semibold mb-2">Wolcott, CT 06716</div>
				<div class="text-sm text-forge-ash">
					Serving businesses across Connecticut and nationwide
				</div>
			</div>
		</div>
	</Container>
</Section>

<!-- ALTERNATIVE CONTACT METHODS -->
<Section background="charcoal" padding="lg">
	<Container>
		<div class="text-center mb-12">
			<h3 class="font-clash text-3xl md:text-4xl font-semibold text-forge-white">
				Prefer a Different Way to Connect?
			</h3>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each [ { icon: 'ph:envelope', title: 'Email Us Directly', text: 'hello@blackforge.digital', href: 'mailto:hello@blackforge.digital', cta: 'Send Email →' }, { icon: 'ph:phone', title: 'Call Our Team', text: '(203) 555-0100', subtext: 'Mon–Fri, 8am–6pm EST', href: 'tel:+12035550100', cta: 'Call Now →' }, { icon: 'ph:calendar', title: 'Book a Strategy Call', text: 'Pick a time that works for you', href: '#', cta: 'Open Calendar →' } ] as method}
				<div
					class="bg-forge-black p-8 text-center border border-forge-steel hover:border-forge-ember hover:-translate-y-1 transition-all"
				>
					<Icon icon={method.icon} class="text-forge-ember mx-auto mb-4" width="40" />
					<h4 class="font-satoshi text-lg font-semibold text-forge-white mb-2">
						{method.title}
					</h4>
					<p class="text-forge-smoke mb-1">{method.text}</p>
					{#if method.subtext}
						<p class="text-sm text-forge-ash mb-4">{method.subtext}</p>
					{/if}
					<a
						href={method.href}
						class="inline-flex items-center gap-2 text-forge-ember hover:text-forge-glow font-satoshi text-sm uppercase tracking-wider transition-colors mt-4"
					>
						{method.cta}
					</a>
				</div>
			{/each}
		</div>
	</Container>
</Section>

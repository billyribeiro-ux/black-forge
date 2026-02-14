<script lang="ts">
	/**
	 * Global error boundary for the application.
	 *
	 * This component is rendered when an unhandled error occurs during
	 * page rendering or data loading. It provides a user-friendly error
	 * message while logging the full error details for debugging.
	 */
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Section from '$lib/components/ui/Section.svelte';

	const statusCode = $page.status;
	const errorMessage = $page.error?.message ?? 'An unexpected error occurred';

	const errorTitles: Record<number, string> = {
		404: 'Page Not Found',
		403: 'Access Forbidden',
		500: 'Internal Server Error',
		503: 'Service Unavailable'
	};

	const errorDescriptions: Record<number, string> = {
		404: "The page you're looking for doesn't exist or has been moved.",
		403: "You don't have permission to access this resource.",
		500: 'Something went wrong on our end. Our team has been notified.',
		503: "We're temporarily down for maintenance. Please check back soon."
	};

	const title = errorTitles[statusCode] ?? 'Error';
	const description = errorDescriptions[statusCode] ?? errorMessage;
</script>

<svelte:head>
	<title>{statusCode} — {title} | Blackforge Digital</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Section background="black" padding="lg" grain={true}>
	<Container size="narrow">
		<div class="flex min-h-[60vh] flex-col items-center justify-center text-center">
			<!-- Error Code -->
			<div
				class="font-clash text-forge-ember mb-8 text-9xl font-bold opacity-20"
				aria-hidden="true"
			>
				{statusCode}
			</div>

			<!-- Error Title -->
			<h1 class="font-clash text-forge-white mb-4 text-4xl font-bold md:text-5xl">
				{title}
			</h1>

			<!-- Error Description -->
			<p class="text-forge-smoke mb-10 max-w-md text-lg leading-relaxed">
				{description}
			</p>

			<!-- Action Buttons -->
			<div class="flex flex-col gap-4 sm:flex-row">
				<Button variant="primary" size="lg" href="/">
					{#snippet children()}
						← Back to Home
					{/snippet}
				</Button>

				{#if statusCode === 404}
					<Button variant="secondary" size="lg" href="/contact">
						{#snippet children()}
							Contact Support
						{/snippet}
					</Button>
				{/if}
			</div>

			<!-- Additional Help -->
			{#if statusCode === 404}
				<div class="text-forge-ash mt-16 text-sm">
					<p class="mb-3">Looking for something specific?</p>
					<div class="flex flex-wrap justify-center gap-4">
						<a href="/services" class="hover:text-forge-ember transition-colors">Services</a>
						<span>·</span>
						<a href="/portfolio" class="hover:text-forge-ember transition-colors">Portfolio</a>
						<span>·</span>
						<a href="/about" class="hover:text-forge-ember transition-colors">About</a>
						<span>·</span>
						<a href="/blog" class="hover:text-forge-ember transition-colors">Blog</a>
					</div>
				</div>
			{/if}
		</div>
	</Container>
</Section>

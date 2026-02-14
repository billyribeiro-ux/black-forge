<script lang="ts">
	/**
	 * Admin login page.
	 *
	 * Provides email/password authentication for admin users.
	 */
	import { authClient } from '$lib/auth-client';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import Icon from '@iconify/svelte';

	let email = $state('');
	let password = $state('');
	let isLoading = $state(false);
	let error = $state('');

	async function handleLogin(e: Event): Promise<void> {
		e.preventDefault();
		error = '';
		isLoading = true;

		try {
			const result = await authClient.signIn.email({
				email,
				password
			});

			if (result.error) {
				error = result.error.message || 'Invalid email or password';
				isLoading = false;
				return;
			}

			// Redirect to admin dashboard
			await goto('/admin');
		} catch (err) {
			error = 'An unexpected error occurred. Please try again.';
			isLoading = false;
		}
	}
</script>

<svelte:head>
	<title>Admin Login | Blackforge Digital</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Section background="black" padding="lg" grain={true}>
	<Container size="narrow">
		<div class="flex min-h-[80vh] items-center justify-center">
			<div class="w-full max-w-md">
				<!-- Logo/Header -->
				<div class="mb-8 text-center">
					<h1 class="font-clash text-forge-white mb-2 text-4xl font-bold">
						<span class="text-forge-ember">BLACKFORGE</span> ADMIN
					</h1>
					<p class="text-forge-smoke">Sign in to manage your content</p>
				</div>

				<!-- Login Form -->
				<form onsubmit={handleLogin} class="bg-forge-charcoal border-forge-steel border p-8">
					{#if error}
						<div
							class="mb-6 flex items-start gap-3 border border-red-500 bg-red-500/10 p-4 text-sm text-red-400"
						>
							<Icon icon="ph:warning-circle" width="20" class="mt-0.5 shrink-0" />
							<span>{error}</span>
						</div>
					{/if}

					<!-- Email -->
					<div class="mb-6">
						<label
							for="email"
							class="font-satoshi text-forge-smoke mb-2 block text-sm font-medium tracking-wider uppercase"
						>
							Email Address
						</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							required
							autocomplete="email"
							placeholder="admin@blackforge.digital"
							class="bg-forge-black border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:ring-forge-ember w-full border px-4 py-3 transition-colors focus:ring-1 focus:outline-none"
						/>
					</div>

					<!-- Password -->
					<div class="mb-6">
						<label
							for="password"
							class="font-satoshi text-forge-smoke mb-2 block text-sm font-medium tracking-wider uppercase"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							bind:value={password}
							required
							autocomplete="current-password"
							placeholder="••••••••"
							class="bg-forge-black border-forge-steel text-forge-white placeholder:text-forge-ash focus:border-forge-ember focus:ring-forge-ember w-full border px-4 py-3 transition-colors focus:ring-1 focus:outline-none"
						/>
					</div>

					<!-- Submit Button -->
					<Button variant="primary" size="lg" type="submit" class="w-full" disabled={isLoading}>
						{#snippet children()}
							{#if isLoading}
								<span class="flex items-center justify-center gap-2">
									<Icon icon="ph:circle-notch" class="animate-spin" width="20" />
									Signing in...
								</span>
							{:else}
								<span class="flex items-center justify-center gap-2">
									<Icon icon="ph:sign-in" width="20" />
									Sign In
								</span>
							{/if}
						{/snippet}
					</Button>
				</form>

				<!-- Footer Note -->
				<div class="text-forge-ash mt-6 text-center text-sm">
					<p>Protected admin area. Authorized personnel only.</p>
				</div>
			</div>
		</div>
	</Container>
</Section>

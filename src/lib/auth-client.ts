/**
 * Better Auth client for browser use.
 *
 * Provides type-safe authentication methods for the frontend.
 *
 * @module auth-client
 */

import { createAuthClient } from 'better-auth/client';

/**
 * Auth client instance for browser-side authentication.
 *
 * Use this in Svelte components to handle login, logout, and session management.
 *
 * @example
 * ```ts
 * import { authClient } from '$lib/auth-client';
 *
 * // Sign in
 * await authClient.signIn.email({
 *   email: 'user@example.com',
 *   password: 'password123'
 * });
 *
 * // Sign out
 * await authClient.signOut();
 *
 * // Get session
 * const session = await authClient.getSession();
 * ```
 */
export const authClient = createAuthClient({
	baseURL: typeof window !== 'undefined' ? window.location.origin : ''
});

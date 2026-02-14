/**
 * Admin layout server load function.
 *
 * Checks authentication and redirects to login if not authenticated.
 *
 * @module routes/admin/+layout.server
 */

import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';

export const load: LayoutServerLoad = async (event) => {
	// Skip auth check for login page
	if (event.url.pathname === '/admin/login') {
		return {};
	}

	// Get session from Better Auth
	const session = await auth.api.getSession({
		headers: event.request.headers
	});

	// Redirect to login if not authenticated
	if (!session) {
		redirect(303, '/admin/login');
	}

	return {
		session,
		user: session.user
	};
};

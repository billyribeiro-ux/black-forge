/**
 * Better Auth API handler.
 *
 * Handles all authentication requests (login, logout, session, etc.)
 * via the Better Auth library.
 *
 * @module routes/api/auth/[...all]/+server
 */

import { auth } from '$lib/server/auth';
import type { RequestHandler } from './$types';

/**
 * Handle all HTTP methods for Better Auth.
 */
export const GET: RequestHandler = async (event) => {
	return auth.handler(event.request);
};

export const POST: RequestHandler = async (event) => {
	return auth.handler(event.request);
};

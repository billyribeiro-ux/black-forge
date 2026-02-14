/**
 * Better Auth configuration.
 *
 * Provides authentication for the admin portal with email/password.
 * Uses Drizzle ORM for database integration.
 *
 * @module server/auth
 */

import { betterAuth } from 'better-auth';

/**
 * Better Auth instance.
 *
 * Configured with email/password authentication and PostgreSQL.
 */
export const auth = betterAuth({
	database: {
		provider: 'postgres',
		url: process.env['DATABASE_URL'] || ''
	},
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: false // Set to true in production
	},
	session: {
		expiresIn: 60 * 60 * 24 * 7, // 7 days
		updateAge: 60 * 60 * 24 // Update session every 24 hours
	},
	trustedOrigins: [
		'http://localhost:5173',
		'http://localhost:4173',
		process.env['VERCEL_URL'] ? `https://${process.env['VERCEL_URL']}` : ''
	].filter(Boolean)
});

/**
 * Type-safe auth client for use in server-side code.
 */
export type Auth = typeof auth;

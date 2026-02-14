/**
 * Typed error hierarchy for Blackforge Digital application.
 * 
 * All application errors extend AppError to provide structured logging,
 * HTTP status codes, and consistent error handling across the codebase.
 * 
 * @module errors
 */

/**
 * Base error class for all application errors.
 * 
 * Provides structured error information including error codes, HTTP status codes,
 * timestamps, and contextual data for debugging and logging.
 */
export abstract class AppError extends Error {
	abstract readonly code: string;
	abstract readonly statusCode: number;
	readonly timestamp: string;
	readonly context: Record<string, unknown>;

	constructor(message: string, context: Record<string, unknown> = {}) {
		super(message);
		this.name = this.constructor.name;
		this.timestamp = new Date().toISOString();
		this.context = context;
		Error.captureStackTrace(this, this.constructor);
	}

	/**
	 * Serializes the error for structured logging.
	 * 
	 * @returns JSON-serializable error object
	 */
	toJSON(): Record<string, unknown> {
		return {
			name: this.name,
			code: this.code,
			message: this.message,
			statusCode: this.statusCode,
			timestamp: this.timestamp,
			context: this.context,
			stack: this.stack
		};
	}
}

/**
 * Validation error for invalid user input or data.
 * 
 * @example
 * ```ts
 * throw new ValidationError('Email is required', { field: 'email' });
 * ```
 */
export class ValidationError extends AppError {
	readonly code = 'VALIDATION_ERROR' as const;
	readonly statusCode = 400 as const;
}

/**
 * Resource not found error.
 * 
 * @example
 * ```ts
 * throw new NotFoundError('Post not found', { slug: 'my-post' });
 * ```
 */
export class NotFoundError extends AppError {
	readonly code = 'NOT_FOUND' as const;
	readonly statusCode = 404 as const;
}

/**
 * Authorization error for insufficient permissions.
 * 
 * @example
 * ```ts
 * throw new AuthorizationError('Admin access required');
 * ```
 */
export class AuthorizationError extends AppError {
	readonly code = 'UNAUTHORIZED' as const;
	readonly statusCode = 403 as const;
}

/**
 * Authentication error for invalid credentials or missing session.
 * 
 * @example
 * ```ts
 * throw new AuthenticationError('Invalid session token');
 * ```
 */
export class AuthenticationError extends AppError {
	readonly code = 'UNAUTHENTICATED' as const;
	readonly statusCode = 401 as const;
}

/**
 * Internal server error for unexpected failures.
 * 
 * @example
 * ```ts
 * throw new InternalError('Database connection failed', { error: err });
 * ```
 */
export class InternalError extends AppError {
	readonly code = 'INTERNAL_ERROR' as const;
	readonly statusCode = 500 as const;
}

/**
 * Rate limit exceeded error.
 * 
 * @example
 * ```ts
 * throw new RateLimitError('Too many requests', { retryAfter: 60 });
 * ```
 */
export class RateLimitError extends AppError {
	readonly code = 'RATE_LIMIT_EXCEEDED' as const;
	readonly statusCode = 429 as const;
}

/**
 * Data integrity error for corrupted or inconsistent data.
 * 
 * @example
 * ```ts
 * throw new DataIntegrityError('Unexpected null value', { index: 5 });
 * ```
 */
export class DataIntegrityError extends AppError {
	readonly code = 'DATA_INTEGRITY_ERROR' as const;
	readonly statusCode = 500 as const;
}

/**
 * Insufficient data error for operations requiring minimum data points.
 * 
 * @example
 * ```ts
 * throw new InsufficientDataError('Need at least 10 data points', { received: 5 });
 * ```
 */
export class InsufficientDataError extends AppError {
	readonly code = 'INSUFFICIENT_DATA' as const;
	readonly statusCode = 400 as const;
}

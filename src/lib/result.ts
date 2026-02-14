/**
 * Result pattern for operations where failure is an expected outcome.
 * 
 * Use this instead of try/catch for operations like parsing, validation,
 * and network calls where failure is a normal part of the control flow.
 * 
 * @module result
 */

import type { AppError } from './errors';

/**
 * Discriminated union representing either success or failure.
 * 
 * @template T - The success value type
 * @template E - The error type (defaults to AppError)
 */
export type Result<T, E = AppError> =
	| { ok: true; value: T }
	| { ok: false; error: E };

/**
 * Creates a successful Result.
 * 
 * @template T - The value type
 * @param value - The success value
 * @returns A successful Result containing the value
 * 
 * @example
 * ```ts
 * const result = ok(42);
 * if (result.ok) {
 *   console.log(result.value); // 42
 * }
 * ```
 */
export function ok<T>(value: T): Result<T, never> {
	return { ok: true, value };
}

/**
 * Creates a failed Result.
 * 
 * @template E - The error type
 * @param error - The error
 * @returns A failed Result containing the error
 * 
 * @example
 * ```ts
 * const result = err(new ValidationError('Invalid input'));
 * if (!result.ok) {
 *   console.error(result.error.message);
 * }
 * ```
 */
export function err<E>(error: E): Result<never, E> {
	return { ok: false, error };
}

/**
 * Unwraps a Result, returning the value or throwing the error.
 * 
 * Use this when you want to convert a Result back to exception-based flow.
 * 
 * @template T - The value type
 * @template E - The error type
 * @param result - The Result to unwrap
 * @returns The success value
 * @throws The error if the Result is a failure
 * 
 * @example
 * ```ts
 * const value = unwrap(parseSlug('hello-world')); // 'hello-world'
 * const value = unwrap(parseSlug('')); // throws ValidationError
 * ```
 */
export function unwrap<T, E extends Error>(result: Result<T, E>): T {
	if (result.ok) {
		return result.value;
	}
	throw result.error;
}

/**
 * Maps a Result's value through a function.
 * 
 * If the Result is an error, returns the error unchanged.
 * 
 * @template T - The input value type
 * @template U - The output value type
 * @template E - The error type
 * @param result - The Result to map
 * @param fn - The mapping function
 * @returns A new Result with the mapped value or the original error
 * 
 * @example
 * ```ts
 * const result = ok(5);
 * const doubled = map(result, x => x * 2); // ok(10)
 * ```
 */
export function map<T, U, E>(result: Result<T, E>, fn: (value: T) => U): Result<U, E> {
	if (result.ok) {
		return ok(fn(result.value));
	}
	return result;
}

/**
 * Chains Result-returning operations together.
 * 
 * If the Result is an error, returns the error unchanged.
 * 
 * @template T - The input value type
 * @template U - The output value type
 * @template E - The error type
 * @param result - The Result to chain from
 * @param fn - The function that returns a new Result
 * @returns The Result from fn or the original error
 * 
 * @example
 * ```ts
 * const result = parseSlug('hello-world');
 * const validated = andThen(result, slug => validateSlugUnique(slug));
 * ```
 */
export function andThen<T, U, E>(
	result: Result<T, E>,
	fn: (value: T) => Result<U, E>
): Result<U, E> {
	if (result.ok) {
		return fn(result.value);
	}
	return result;
}

/**
 * Returns the value if Ok, otherwise returns the default value.
 * 
 * @template T - The value type
 * @template E - The error type
 * @param result - The Result to unwrap
 * @param defaultValue - The default value to return if Result is an error
 * @returns The success value or the default value
 * 
 * @example
 * ```ts
 * const value = unwrapOr(parseSlug(''), 'default-slug'); // 'default-slug'
 * ```
 */
export function unwrapOr<T, E>(result: Result<T, E>, defaultValue: T): T {
	if (result.ok) {
		return result.value;
	}
	return defaultValue;
}

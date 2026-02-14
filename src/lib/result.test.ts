/**
 * Unit tests for Result pattern utilities.
 *
 * @module result.test
 */

import { describe, it, expect } from 'vitest';
import { ok, err, unwrap, unwrapOr, map, andThen } from './result';
import { ValidationError } from './errors';

describe('Result pattern', () => {
	// ─── ok() ───────────────────────────────────────────────
	describe('ok', () => {
		it('creates a successful Result', () => {
			const result = ok(42);
			expect(result.ok).toBe(true);
			if (result.ok) {
				expect(result.value).toBe(42);
			}
		});

		it('works with string values', () => {
			const result = ok('success');
			expect(result.ok).toBe(true);
			if (result.ok) {
				expect(result.value).toBe('success');
			}
		});

		it('works with object values', () => {
			const result = ok({ id: 1, name: 'test' });
			expect(result.ok).toBe(true);
			if (result.ok) {
				expect(result.value).toEqual({ id: 1, name: 'test' });
			}
		});
	});

	// ─── err() ──────────────────────────────────────────────
	describe('err', () => {
		it('creates a failed Result', () => {
			const error = new ValidationError('Invalid input');
			const result = err(error);
			expect(result.ok).toBe(false);
			if (!result.ok) {
				expect(result.error).toBe(error);
			}
		});

		it('preserves error details', () => {
			const error = new ValidationError('Test error', { field: 'email' });
			const result = err(error);
			expect(result.ok).toBe(false);
			if (!result.ok) {
				expect(result.error.message).toBe('Test error');
				expect(result.error.context).toEqual({ field: 'email' });
			}
		});
	});

	// ─── unwrap() ───────────────────────────────────────────
	describe('unwrap', () => {
		it('returns value for successful Result', () => {
			const result = ok(42);
			expect(unwrap(result)).toBe(42);
		});

		it('throws error for failed Result', () => {
			const error = new ValidationError('Test error');
			const result = err(error);
			expect(() => unwrap(result)).toThrow('Test error');
		});

		it('preserves error type when throwing', () => {
			const error = new ValidationError('Test error');
			const result = err(error);
			expect(() => unwrap(result)).toThrow(ValidationError);
		});
	});

	// ─── unwrapOr() ─────────────────────────────────────────
	describe('unwrapOr', () => {
		it('returns value for successful Result', () => {
			const result = ok(42);
			expect(unwrapOr(result, 0)).toBe(42);
		});

		it('returns default value for failed Result', () => {
			const error = new ValidationError('Test error');
			const result = err(error);
			expect(unwrapOr(result, 0)).toBe(0);
		});

		it('works with different types', () => {
			const result = err(new ValidationError('Error'));
			expect(unwrapOr(result, 'default')).toBe('default');
		});
	});

	// ─── map() ──────────────────────────────────────────────
	describe('map', () => {
		it('transforms successful Result value', () => {
			const result = ok(5);
			const doubled = map(result, (x) => x * 2);
			expect(doubled.ok).toBe(true);
			if (doubled.ok) {
				expect(doubled.value).toBe(10);
			}
		});

		it('passes through error unchanged', () => {
			const error = new ValidationError('Test error');
			const result = err(error);
			const mapped = map(result, (x: number) => x * 2);
			expect(mapped.ok).toBe(false);
			if (!mapped.ok) {
				expect(mapped.error).toBe(error);
			}
		});

		it('chains multiple transformations', () => {
			const result = ok(5);
			const transformed = map(
				map(result, (x) => x * 2),
				(x) => x + 1
			);
			expect(transformed.ok).toBe(true);
			if (transformed.ok) {
				expect(transformed.value).toBe(11);
			}
		});
	});

	// ─── andThen() ──────────────────────────────────────────
	describe('andThen', () => {
		it('chains successful Results', () => {
			const result = ok(5);
			const chained = andThen(result, (x) => ok(x * 2));
			expect(chained.ok).toBe(true);
			if (chained.ok) {
				expect(chained.value).toBe(10);
			}
		});

		it('short-circuits on first error', () => {
			const error = new ValidationError('First error');
			const result = err(error);
			const chained = andThen(result, (x: number) => ok(x * 2));
			expect(chained.ok).toBe(false);
			if (!chained.ok) {
				expect(chained.error).toBe(error);
			}
		});

		it('propagates errors from chained function', () => {
			const result = ok(5);
			const error = new ValidationError('Chained error');
			const chained = andThen(result, () => err(error));
			expect(chained.ok).toBe(false);
			if (!chained.ok) {
				expect(chained.error).toBe(error);
			}
		});

		it('chains multiple operations', () => {
			const result = ok(5);
			const final = andThen(
				andThen(result, (x) => ok(x * 2)),
				(x) => ok(x + 1)
			);
			expect(final.ok).toBe(true);
			if (final.ok) {
				expect(final.value).toBe(11);
			}
		});
	});

	// ─── Real-World Scenarios ───────────────────────────────
	describe('real-world usage', () => {
		function parseSlug(input: string) {
			const slug = input
				.toLowerCase()
				.replace(/[^a-z0-9-]/g, '-')
				.replace(/-+/g, '-');
			if (slug.length === 0) {
				return err(new ValidationError('Slug cannot be empty'));
			}
			if (slug.length > 200) {
				return err(new ValidationError('Slug too long'));
			}
			return ok(slug);
		}

		it('validates and transforms valid input', () => {
			const result = parseSlug('Hello World');
			expect(result.ok).toBe(true);
			if (result.ok) {
				expect(result.value).toBe('hello-world');
			}
		});

		it('rejects empty input', () => {
			const result = parseSlug('!!!');
			expect(result.ok).toBe(false);
			if (!result.ok) {
				expect(result.error.message).toBe('Slug cannot be empty');
			}
		});

		it('rejects too long input', () => {
			const result = parseSlug('a'.repeat(300));
			expect(result.ok).toBe(false);
			if (!result.ok) {
				expect(result.error.message).toBe('Slug too long');
			}
		});
	});
});

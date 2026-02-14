/**
 * Unit tests for cn utility function.
 *
 * @module utils/cn.test
 */

import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
	// ─── Happy Path ─────────────────────────────────────────
	it('merges multiple class names', () => {
		expect(cn('class-1', 'class-2', 'class-3')).toBe('class-1 class-2 class-3');
	});

	it('handles single class name', () => {
		expect(cn('single-class')).toBe('single-class');
	});

	it('handles empty input', () => {
		expect(cn()).toBe('');
	});

	// ─── Falsy Value Filtering ──────────────────────────────
	it('filters out undefined values', () => {
		expect(cn('class-1', undefined, 'class-2')).toBe('class-1 class-2');
	});

	it('filters out null values', () => {
		expect(cn('class-1', null, 'class-2')).toBe('class-1 class-2');
	});

	it('filters out false values', () => {
		expect(cn('class-1', false, 'class-2')).toBe('class-1 class-2');
	});

	it('filters out all falsy values', () => {
		expect(cn('class-1', undefined, null, false, 'class-2')).toBe('class-1 class-2');
	});

	it('returns empty string when all values are falsy', () => {
		expect(cn(undefined, null, false)).toBe('');
	});

	// ─── Conditional Classes ────────────────────────────────
	it('handles conditional classes with &&', () => {
		const isActive = true;
		const isDisabled = false;
		expect(cn('base', isActive && 'active', isDisabled && 'disabled')).toBe('base active');
	});

	it('handles ternary conditional classes', () => {
		const variant = 'primary';
		expect(cn('btn', variant === 'primary' ? 'btn-primary' : 'btn-secondary')).toBe(
			'btn btn-primary'
		);
	});

	// ─── Edge Cases ─────────────────────────────────────────
	it('handles empty strings', () => {
		expect(cn('class-1', '', 'class-2')).toBe('class-1  class-2');
	});

	it('handles classes with special characters', () => {
		expect(cn('hover:bg-blue-500', 'md:text-lg', 'dark:text-white')).toBe(
			'hover:bg-blue-500 md:text-lg dark:text-white'
		);
	});

	it('handles very long class lists', () => {
		const classes = Array.from({ length: 100 }, (_, i) => `class-${i}`);
		const result = cn(...classes);
		expect(result.split(' ')).toHaveLength(100);
	});

	// ─── Real-World Usage ───────────────────────────────────
	it('works with Tailwind responsive classes', () => {
		expect(cn('text-sm', 'md:text-base', 'lg:text-lg')).toBe('text-sm md:text-base lg:text-lg');
	});

	it('works with component variant patterns', () => {
		const variant = 'primary';
		const size = 'lg';
		const disabled = false;
		expect(
			cn(
				'btn',
				variant === 'primary' && 'btn-primary',
				size === 'lg' && 'btn-lg',
				disabled && 'btn-disabled'
			)
		).toBe('btn btn-primary btn-lg');
	});
});

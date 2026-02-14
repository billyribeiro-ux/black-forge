/**
 * Merges class names into a single string, filtering out falsy values.
 *
 * This utility is used throughout the application to conditionally combine
 * Tailwind CSS classes. It handles undefined, null, and false values gracefully,
 * making it ideal for conditional class application in components.
 *
 * @param classes - Variable number of class name strings or falsy values
 * @returns A single space-separated string of valid class names
 *
 * @example
 * ```ts
 * cn('base-class', isActive && 'active', undefined, 'another-class');
 * // => 'base-class active another-class'
 *
 * cn('btn', variant === 'primary' && 'btn-primary', className);
 * // => 'btn btn-primary custom-class'
 * ```
 */
export function cn(...classes: readonly (string | undefined | null | false)[]): string {
	return classes.filter(Boolean).join(' ');
}

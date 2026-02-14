/**
 * GSAP utilities for Svelte 5 with proper cleanup and lifecycle management.
 *
 * This module provides hooks and utilities for integrating GSAP animations
 * with Svelte 5's reactive system. All animations are automatically cleaned up
 * when components unmount to prevent memory leaks.
 *
 * @module gsap.svelte
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMount } from 'svelte';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook for GSAP animations with automatic cleanup.
 *
 * This hook provides a way to create GSAP animations that are automatically
 * cleaned up when the component unmounts.
 *
 * @param {function} animationFn - The function that returns the GSAP animation.
 * @returns {void}
 *
 * Usage in Svelte 5 components:
 *
 * let ref = $state<HTMLElement>();
 * useGsap(() => {
 *   if (ref) gsap.from(ref, { opacity: 0, y: 20 });
 * });
 *
 * For reactive animations, wrap useGsap in $effect:
 * $effect(() => {
 *   if (ref) {
 *     useGsap(() => gsap.from(ref, { opacity: 0, y: 20 }));
 *   }
 * });
 */
export function useGsap(
	animationFn: () => gsap.core.Tween | gsap.core.Timeline | void
) {
	let ctx: gsap.Context | null = null;

	onMount(() => {
		ctx = gsap.context(() => {
			animationFn();
		});

		return () => {
			ctx?.revert();
		};
	});
}

/**
 * Scroll-triggered animation hook
 */
export function useScrollTrigger(element: HTMLElement | null, config: ScrollTrigger.Vars) {
	let trigger: ScrollTrigger | null = null;

	onMount(() => {
		if (!element) return;

		trigger = ScrollTrigger.create({
			trigger: element,
			...config
		});

		return () => {
			trigger?.kill();
		};
	});
}

/**
 * Fade in animation preset
 */
export function fadeIn(
	element: HTMLElement,
	options: {
		duration?: number;
		delay?: number;
		y?: number;
		stagger?: number;
	} = {}
) {
	const { duration = 0.7, delay = 0, y = 20, stagger = 0 } = options;

	return gsap.from(element, {
		opacity: 0,
		y,
		duration,
		delay,
		stagger,
		ease: 'power3.out'
	});
}

/**
 * Slide in animation preset
 */
export function slideIn(
	element: HTMLElement,
	direction: 'left' | 'right' | 'up' | 'down' = 'up',
	options: {
		duration?: number;
		delay?: number;
		distance?: number;
	} = {}
) {
	const { duration = 0.8, delay = 0, distance = 50 } = options;

	const directionMap = {
		left: { x: -distance, y: 0 },
		right: { x: distance, y: 0 },
		up: { x: 0, y: distance },
		down: { x: 0, y: -distance }
	};

	return gsap.from(element, {
		...directionMap[direction],
		opacity: 0,
		duration,
		delay,
		ease: 'power2.out'
	});
}

/**
 * Stagger animation helper
 */
export function staggerAnimation(
	elements: HTMLElement[] | NodeListOf<Element>,
	animation: gsap.TweenVars,
	staggerAmount = 0.1
) {
	return gsap.from(elements, {
		...animation,
		stagger: staggerAmount
	});
}

/**
 * Count up animation for numbers
 */
export function countUp(
	element: HTMLElement,
	targetValue: number,
	options: {
		duration?: number;
		delay?: number;
		decimals?: number;
		suffix?: string;
	} = {}
) {
	const { duration = 1.2, delay = 0, decimals = 0, suffix = '' } = options;

	return gsap.fromTo(
		element,
		{ textContent: 0 },
		{
			textContent: targetValue,
			duration,
			delay,
			ease: 'power1.inOut',
			snap: { textContent: decimals === 0 ? 1 : 1 / Math.pow(10, decimals) },
			onUpdate: function () {
				const value = gsap.getProperty(element, 'textContent') as number;
				element.textContent = value.toFixed(decimals) + suffix;
			}
		}
	);
}

/**
 * Magnetic button effect
 */
export function magneticButton(button: HTMLElement, strength = 0.3) {
	const handleMouseMove = (e: MouseEvent) => {
		const rect = button.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const deltaX = (e.clientX - centerX) * strength;
		const deltaY = (e.clientY - centerY) * strength;

		gsap.to(button, {
			x: deltaX,
			y: deltaY,
			duration: 0.3,
			ease: 'power2.out'
		});
	};

	const handleMouseLeave = () => {
		gsap.to(button, {
			x: 0,
			y: 0,
			duration: 0.5,
			ease: 'elastic.out(1, 0.3)'
		});
	};

	button.addEventListener('mousemove', handleMouseMove);
	button.addEventListener('mouseleave', handleMouseLeave);

	return () => {
		button.removeEventListener('mousemove', handleMouseMove);
		button.removeEventListener('mouseleave', handleMouseLeave);
	};
}

/**
 * Parallax effect
 */
export function parallax(element: HTMLElement, speed = 0.5) {
	return ScrollTrigger.create({
		trigger: element,
		start: 'top bottom',
		end: 'bottom top',
		scrub: true,
		onUpdate: (self) => {
			const y = self.progress * 100 * speed;
			gsap.set(element, { y: -y });
		}
	});
}

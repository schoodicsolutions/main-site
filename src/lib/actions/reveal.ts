import type { Action } from 'svelte/action';

/** Fade-and-rise an element the first time it scrolls into view. */
export const reveal: Action<HTMLElement, { delay?: number } | undefined> = (node, options) => {
	node.classList.add('reveal');
	if (options?.delay) node.style.transitionDelay = `${options.delay}ms`;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('revealed');
				observer.disconnect();
			}
		},
		{ rootMargin: '0px 0px -10% 0px' },
	);

	observer.observe(node);

	return {
		destroy: () => observer.disconnect(),
	};
};

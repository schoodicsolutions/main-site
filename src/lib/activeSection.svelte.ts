/** Id of the home page section currently in view, for nav highlighting. */
export const activeSection = $state({ id: '' });

/** Observe every `section[id]` inside `root` and keep `activeSection` in sync. */
export function trackSections(root: ParentNode = document) {
	const sections = Array.from(root.querySelectorAll<HTMLElement>('section[id]'));
	if (!sections.length) return () => {};

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) activeSection.id = entry.target.id;
			}
		},
		// A thin band across the upper middle of the viewport decides what's "current"
		{ rootMargin: '-35% 0px -60% 0px' },
	);

	sections.forEach((section) => observer.observe(section));

	return () => {
		observer.disconnect();
		activeSection.id = '';
	};
}

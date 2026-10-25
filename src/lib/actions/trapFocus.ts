import type { Action } from 'svelte/action';

const focusable =
	'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Keep Tab focus inside a dialog while it's open, then hand focus back to whatever opened it. */
export const trapFocus: Action<HTMLElement> = (node) => {
	const previous = document.activeElement as HTMLElement | null;
	const items = () => Array.from(node.querySelectorAll<HTMLElement>(focusable));

	items()[0]?.focus();

	function onkeydown(e: KeyboardEvent) {
		if (e.key !== 'Tab') return;
		const list = items();
		const first = list[0];
		const last = list[list.length - 1];

		if (e.shiftKey && document.activeElement === first) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	}

	node.addEventListener('keydown', onkeydown);

	return {
		destroy() {
			node.removeEventListener('keydown', onkeydown);
			// Navigating via a menu link moves focus to the new page; only restore if focus was lost
			if (!document.activeElement || document.activeElement === document.body) previous?.focus();
		},
	};
};

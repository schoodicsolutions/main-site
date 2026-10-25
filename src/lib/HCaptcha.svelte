<script module lang="ts">
	interface HCaptchaApi {
		render(container: HTMLElement, options: Record<string, unknown>): string;
		reset(widgetId?: string): void;
		remove(widgetId: string): void;
	}

	declare global {
		interface Window {
			hcaptcha?: HCaptchaApi;
			onHCaptchaLoad?: () => void;
		}
	}

	let api: Promise<HCaptchaApi> | undefined;

	/** Load the hCaptcha script once per page, however many widgets ask for it */
	function loadApi() {
		api ??= new Promise((resolve, reject) => {
			window.onHCaptchaLoad = () => resolve(window.hcaptcha!);
			const script = document.createElement('script');
			script.src = 'https://js.hcaptcha.com/1/api.js?render=explicit&onload=onHCaptchaLoad';
			script.async = true;
			script.onerror = () => {
				api = undefined;
				reject(new Error('hCaptcha failed to load'));
			};
			document.head.append(script);
		});
		return api;
	}
</script>

<script lang="ts">
	interface Props {
		/** Called with a fresh token, or `null` when the token expires or errors */
		onchange: (token: string | null) => void;
	}

	let { onchange }: Props = $props();

	let container: HTMLDivElement;
	let widgetId: string | undefined;
	let failed = $state(false);

	export function reset() {
		if (widgetId !== undefined) window.hcaptcha?.reset(widgetId);
		onchange(null);
	}

	$effect(() => {
		let destroyed = false;

		// hCaptcha is heavy (~300 KB and a third-party cookie), so wait until the form is close
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				observer.disconnect();
				loadApi()
					.then((hcaptcha) => {
						if (destroyed) return;
						widgetId = hcaptcha.render(container, {
							sitekey: __HCAPTCHA_SITEKEY__,
							callback: (token: string) => onchange(token),
							'expired-callback': () => onchange(null),
							'error-callback': () => onchange(null),
						});
					})
					.catch(() => (failed = true));
			},
			{ rootMargin: '600px 0px' },
		);
		observer.observe(container);

		return () => {
			destroyed = true;
			observer.disconnect();
			if (widgetId !== undefined) window.hcaptcha?.remove(widgetId);
			widgetId = undefined;
		};
	});
</script>

<div bind:this={container} class="min-h-[78px]"></div>
{#if failed}
	<p class="hint">The spam check couldn’t load. Please disable any blockers and reload the page.</p>
{/if}

declare module 'svelte-hcaptcha' {
	import { SvelteComponent } from 'svelte';

	export interface HCaptchaProps {
		sitekey?: string;
		apihost?: string;
		hl?: string;
		reCaptchaCompat?: boolean;
		theme?: 'light' | 'dark';
		size?: 'normal' | 'compact' | 'invisible';
		tabindex?: number;
		on?: {
			error?: (event: any) => void;
			verified?: (event: any) => void;
			expired?: () => void;
			'challenge-expired'?: () => void;
			opened?: () => void;
			closed?: () => void;
		};
	}

	export default class HCaptcha extends SvelteComponent<HCaptchaProps> {}
}

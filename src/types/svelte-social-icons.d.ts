declare module '@rodneylab/svelte-social-icons' {
	import { SvelteComponent } from 'svelte';

	export interface SocialIconsProps {
		network?: string;
		bgColor?: string;
		fgColor?: string;
		width?: number;
		height?: number;
	}

	export default class SocialIcons extends SvelteComponent<SocialIconsProps> {}
}

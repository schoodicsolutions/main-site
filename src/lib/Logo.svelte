<script lang="ts">
	import Mark from './Mark.svelte';

	export let variant: 'normal' | 'white' = 'normal';
	export let size: 'small' | 'medium' | 'large' = 'large';
	$: [normal, white] = [variant === 'normal', variant === 'white'];
	$: [small, medium, large] = [size === 'small', size === 'medium', size === 'large'];
</script>

<div class="flex items-center select-none" aria-label="Schoodic Solutions Logo">
	<div class:h-[35px]={large} class:h-[23px]={medium} class:h-[21px]={small}>
		<Mark height="100%" variant={normal ? 'blue' : white ? 'white' : undefined} />
	</div>
	<span
		class="font-brand font-bold"
		class:text-[32px]={large}
		class:text-[22px]={medium}
		class:text-[19px]={small}
		class:tracking-tight={large}
		class:-tracking-[1.2px]={medium || small}
		class:text-black={normal}
		class:text-white={white}
	>
		Schoodic&nbsp;Solutions
	</span>
</div>

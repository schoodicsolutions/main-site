<script lang="ts">
	import { drawerOpen } from './stores';
</script>
{#if $drawerOpen}
    <div class="z-40 fixed inset-0 bg-black/50" aria-hidden={!$drawerOpen} on:click={() => $drawerOpen = !$drawerOpen} />
{/if}
<div class="w-60 md:w-80 h-screen z-50 fixed top-0 right-0 bg-white shadow transform transition-transform p-6" class:translate-x-full={!$drawerOpen}>
    <slot />
</div>
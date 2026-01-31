<script lang="ts">
	import { drawerOpen } from './stores';
    import { fade, fly } from 'svelte/transition';

</script>
{#if $drawerOpen}
    <div transition:fade class="z-40 fixed inset-0 bg-black/50" aria-hidden={true} on:click={() => $drawerOpen = !$drawerOpen}></div>
    <div transition:fly={{ duration: 500, y: '-100%', opacity: 0.5 }} class="w-full z-50 fixed top-0 right-0 bg-white shadow">
        <slot />
    </div>
{/if}

<script lang="ts">
    export let open = false;
    const toggle = () => open = !open;
</script>
{#if open}
    <div class="z-40 fixed inset-0 bg-black/50" on:click={toggle} />
{/if}
<div class={`w-60 md:w-80 h-screen z-50 fixed top-0 right-0 bg-white shadow transform transition-transform p-6 ${open ? '' : 'translate-x-full'}`}>
    <slot />
</div>
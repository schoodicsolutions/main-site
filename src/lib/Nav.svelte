<script lang="ts">
    export let color: 'black' | 'white' = 'black';
    $: [black, white] = [color === 'black', color === 'white']
</script>

<nav 
    aria-label="Main" 
    class="transition-colors"
    class:text-black={black}
    class:text-white={white}
>
    <ul class="flex gap-8 font-semibold">
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
    </ul>
</nav>
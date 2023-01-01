<script lang="ts">
    import { page } from '$app/stores';

    export let color: 'black' | 'white' = 'black';
    $: [black, white] = [color === 'black', color === 'white']

    const menu = [
        {caption: 'Home', path: '/'},
        {caption: 'Services', path: '/', hash: '#services', submenu: []},
        {caption: 'Contact', path: '/', hash: '#contact'},
    ]

</script>

<nav 
    aria-label="Main" 
    class="transition-colors"
    class:text-black={black}
    class:text-white={white}
>
    <ul class="flex gap-8 font-semibold">
        {#each menu as link}
            <li class="flex flex-col">
                <a href={`${link.path}${link.hash || ''}`}>{link.caption}</a>
                <div 
                    class="h-0.5 w-full bg-brand"
                    class:invisible={`${link.path}${link.hash || ""}` !== `${$page.url.pathname}${$page.url.hash}`}
                />
            </li>
        {/each}
    </ul>
</nav>
<script>
	import { scrollTo } from "$lib/scroll";
    import { onMount } from "svelte";
</script>
<slot />
<section class="bg-almond">
    <h3 class="font-bold text-4xl text-center px-6 tracking-tight">Want to work with us?</h3>
    <a class="button button-blue" use:scrollTo={{pathname: '/', scrollTo: 'contact'}}>Get in Touch</a>
</section>
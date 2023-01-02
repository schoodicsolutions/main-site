<script>
	import { scrollTo } from "$lib/scroll";
    import { onMount } from "svelte";
</script>
<div class="p-8" />
<slot />
<section class="bg-almond">
    <h3 class="font-bold text-4xl">Want to work with us?</h3>
    <a class="button button-blue" use:scrollTo={{pathname: '/', scrollTo: 'contact'}}>Get in Touch</a>
</section>
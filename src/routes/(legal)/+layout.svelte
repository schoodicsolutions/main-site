<script lang="ts">
	import { metadata } from "../../stores";
	import { scrollTo } from "$lib/scroll";
	import ServiceHeader from "$lib/ServiceHeader.svelte";

</script>

<ServiceHeader>
    <h1>{$metadata.title}</h1>
</ServiceHeader>

<section>
    <div class="w-[1440px] max-w-full flex flex-col gap-4 text-xl">
        <slot />
    </div>
</section>

<section class="bg-almond">
    <h3 class="font-bold text-4xl text-center px-6 tracking-tight">Need to contact us regarding our policies?</h3>
    <a class="button button-blue" use:scrollTo={{pathname: '/', scrollTo: 'contact'}}>Get in Touch</a>
</section>
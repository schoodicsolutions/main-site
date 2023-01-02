<script>
	import { page } from "$app/stores"
</script>

<main class="block bg-croix text-white w-screen h-screen flex flex-col gap-6 justify-center items-center">
    <h1>{$page.error && $page.error.message}</h1>
    <h3 class="text-xl">Whatever you were looking for, isn't here!</h3>
</main>
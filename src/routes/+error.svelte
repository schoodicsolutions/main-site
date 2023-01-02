<script>
	import { page } from "$app/stores"
</script>

<main class="block bg-croix text-white w-screen h-screen flex flex-col gap-6 px-6 justify-center items-center">
    <h1>{$page.error && $page.error.message}</h1>
    <p class="text-xl center">Whatever you were looking for, isn't here!</p>
</main>
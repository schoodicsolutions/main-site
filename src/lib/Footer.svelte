<script>
	import { page } from "$app/stores";
    import Logo from "./Logo.svelte";
	import Wave from "./Wave.svelte";

    const year = new Date().getFullYear();
</script>

<footer class="text-center">
    {#if !$page.error}
        <div class="w-full h-8 lg:h-[6vw] bg-almond">
            <Wave class="text-croix" height="100%" />
        </div>
    {/if}
    <div class="bg-croix text-white">
        <div class="flex flex-col lg:flex-row justify-center lg:items-start gap-10 lg:gap-40 py-20">
            <section class="flex flex-col items-center lg:order-1 gap-1 lg:gap-4">
                <Logo variant="white" />
                <div>
                    <p>Proudly built with ❤️ in Washington County</p>
                    <p>Copyright &copy; {year} Schoodic Media</p>
                </div>
            </section>
            <section class="flex flex-col items-center gap-1 lg:gap-4">
                <h3 class="text-xl font-bold">Services</h3>
                <ul>
                    <li>Full Stack Web Development</li>
                    <li>Responsive Web Design</li>
                    <li>Digital Marketing</li>
                    <li>Search Engine Optimization</li>
                    <li>Managed Hosting</li>
                </ul>
            </section>
            <section class="flex flex-col items-center gap-1 lg:gap-4 order-2">
                <h3 class="text-xl font-bold">Legal</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                </ul>
            </section>
        </div>
    </div>
</footer>
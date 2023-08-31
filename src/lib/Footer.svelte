<script>
	import { page } from '$app/stores';
	import { scrollTo } from 'svelte-scroll-nav';
    import Logo from "./Logo.svelte";

    import SocialIcons from '@rodneylab/svelte-social-icons';

    const year = new Date().getFullYear();
</script>

<footer class="text-center border-gray-300 border-t">
    <div>
        <div class="flex flex-col lg:flex-row justify-center lg:items-start gap-10 md:gap-20 xl:gap-40 py-12 h-full">
            <section class="flex flex-col items-center lg:items-start gap-1 lg:gap-4 p-0">
                <a href="/" class="navlink">
                    <span class="a11y-hidden">Back to top</span>
                    <div aria-hidden={true}><Logo variant="normal" size="medium" /></div>
                </a>
                <div>
                    <p>Built with ❤️ in Washington County, Maine</p>
                </div>
                <div class="flex gap-2">
                    <a href="https://www.facebook.com/schoodicsolutions"><SocialIcons network="facebook" bgColor="black" width={24} height={24}/></a>
                    <a href="https://www.linkedin.com/company/schoodic"><SocialIcons network="linkedin" bgColor="black" width={24} height={24}/></a>
                    <a href="https://www.github.com/schoodicsolutions"><SocialIcons network="github" bgColor="black" width={24} height={24}/></a>
                </div>
            </section>
            <section class="flex flex-col items-center gap-1 lg:gap-4 p-0">
                <h3 class="text-xl font-bold">Services</h3>
                <nav aria-label="Services">
                    <ul>
                        <li><a href="/full-stack">Full Stack Web Development</a></li>
                        <li><a href="/responsive-design">Responsive Web Design</a></li>
                        <li><a href="/digital-marketing">Digital Marketing</a></li>
                        <li><a href="/search-engine-optimization">Search Engine Optimization</a></li>
                        <li><a href="/managed-hosting">Managed Hosting</a></li>
                    </ul>
                </nav>
            </section>
            <section class="flex flex-col items-center gap-1 lg:gap-4 p-0">
                <h3 class="text-xl font-bold">General</h3>
                <nav aria-label="Services">
                    <ul>
                        <li><a use:scrollTo={{ section: '+top'}} href="/" aria-hidden={true}>Home</a></li>
                        <li><a use:scrollTo={{ section: 'about'}} href="/" >About</a></li>
                        <li><a use:scrollTo={{ section: 'services'}} href="/" >Services</a></li>
                        <li><a use:scrollTo={{ section: 'our-team'}} href="/" >Our Team</a></li>
                        <li><a use:scrollTo={{ section: 'contact'}} href="/" >Contact Us</a></li>
                    </ul>
                </nav>
            </section>
        </div>
    </div>
    <div class="border-gray-300 border-t py-3 px-4">
        Copyright &copy; { new Date().getFullYear() } Schoodic Media LLC d/b/a Schoodic Solutions, All Rights Reserved
        <span aria-hidden={true} class="hidden lg:inline">&nbsp;&bull;&nbsp;</span>
        <br class="block lg:hidden"/>
        <a class="text-black" href="/privacy-policy">Privacy Policy</a>
        <span aria-hidden={true}>&nbsp;&bull;&nbsp;</span>
        <a class="text-black" href="/terms-and-conditions">Terms and Conditions</a>
    </div>
</footer>
<script lang="ts">
	import ServiceIcon from "./ServiceIcon.svelte";
</script>

<nav 
    class="service-cards"
    aria-label="Services"
>
    <div class="service-card">
        <h3>Full-Stack Web Development</h3>
        <ServiceIcon variant="blue" height="125px" icon="toolbox" />
        <a class="button button-blue" href="/full-stack" aria-label="Learn More About Full-Stack Web Development">Learn More</a>
    </div>
    <div class="service-card">
        <h3>Responsive Web Design</h3>
        <ServiceIcon variant="blue" height="125px" icon="phone" />
        <a class="button button-blue" href="/responsive-design" aria-label="Learn More About Responsive Web Design">Learn More</a>
    </div>
    <div class="service-card">
        <h3>Digital Marketing</h3>
        <ServiceIcon variant="blue" height="125px" icon="megaphone" />
        <a class="button button-blue" href="/digital-marketing" aria-label="Learn More About Digital Marketing">Learn More</a>
    </div>
    <div class="service-card">
        <h3>Search Engine Optimization</h3>
        <ServiceIcon variant="blue" height="125px" icon="magnifier" />
        <a class="button button-blue" href="/search-engine-optimization" aria-label="Learn More About Search Engine Optimization">Learn More</a>
    </div>
    <div class="service-card">
        <h3>Managed Hosting</h3>
        <ServiceIcon variant="blue" height="125px" icon="servers" />
        <a class="button button-blue" href="/managed-hosting" aria-label="Learn More About Managed Hosting">Learn More</a>
    </div>
</nav>
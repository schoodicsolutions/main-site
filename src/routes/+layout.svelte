<script lang="ts">
	import Meta from '$lib/Meta.svelte';
    import '../app.css';
</script>


<Meta />

<svelte:head> 
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-MKT51K17JR"></script>

    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-MKT51K17JR');
    </script>
</svelte:head>


<slot />
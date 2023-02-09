<script lang='ts'>
    import { page } from '$app/stores';
    const city = $page.data.city;
</script>

<div class="max-w-[640px] w-full m-auto text-center">
    <h3 class="mb-4">Need A Great Website?</h3>
    <div class="flex flex-col gap-4">
        <p>
            So - maybe you just started a small business in <strong>{ city }</strong>.
        </p>
        <p>
            Or maybe you've been the local leader in your industry for 50 years!
        </p>
        <p>
            No matter what you do or how long you've been doing it, we've got you covered here at <strong>Schoodic Media.</strong>
        </p>
    </div>
</div>

<div class="mt-12 max-w-[640px] w-full m-auto text-center flex flex-col">
    <h4>What We Can Do For You</h4>
    <ul class="flex flex-col gap-4 list-disc w-60 md:w-full m-auto mt-2">
        <li>Boost your presence on Google</li>
        <li>Get you more clicks and more calls</li>
        <li>Build you a new, modern website</li>
        <li>Make your site friendlier and easier to use</li>
        <li>Spruce up your socials</li>
    </ul>
    <p class="text-center text-lg short:text-2xl lg:text-2xl flex flex-col mt-8">... and much, much more!</p>
</div>
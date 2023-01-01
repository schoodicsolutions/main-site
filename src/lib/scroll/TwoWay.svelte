<script lang="ts">
	import { TOP } from "./constants";
	import { currentSection, sections } from "./stores";

    function getSectionBounds() {
        if (window.scrollY === 0) {
            $currentSection = TOP;
            return;
        }

        for (let [name, section] of $sections.entries()) {
            const boundingRect = section.getBoundingClientRect();
            console.log(name, boundingRect.top, window.scrollY);
            if (boundingRect.top <= window.screen.height / 2 && boundingRect.top > 0) {
                $currentSection = name;
                break;
            }
        }
    }
</script>

<svelte:window on:scroll={getSectionBounds} />
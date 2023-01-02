<script lang="ts">
	import { reserved } from "./constants";
	import { currentSection, sections } from "./stores";

    let timer: number | NodeJS.Timeout;

    function getSectionBounds() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (window.scrollY === 0) {
                $currentSection = reserved.top;
                return;
            }

            for (let [name, section] of $sections) {
                const boundingRect = section.getBoundingClientRect();

                const withinTopHalf = boundingRect.top <= window.screen.height / 2;
                const aboveScreen = boundingRect.top > 0;
                const isLastSection = section === Array.from($sections.values()).at(-1);

                if (withinTopHalf && (aboveScreen || isLastSection)) {
                    $currentSection = name;
                    break;
                }
            }
        }, 100);
    }
</script>

<svelte:window on:scroll={getSectionBounds} />
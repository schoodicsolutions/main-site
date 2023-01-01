import { get } from "svelte/store";

import { TOP } from "./constants";
import { currentSection, sections } from "./stores";

export function scrollTo(node: HTMLAnchorElement, section: string) {
    const listener = (e: MouseEvent) => {
        e.preventDefault();

        if (section === TOP) {
            window.scrollTo({top: 0});
        } else {
            const currentSections = get(sections);
            const wantedSection = currentSections.get(section);

            if (wantedSection) {
                wantedSection.scrollIntoView(true);
            } else {
                return;
            }
        }

        currentSection.set(section);

    };

    node.addEventListener('click', listener);
    node.href = "/";

    return {
        destroy() {
            node.removeEventListener('click', listener);
        }
    }
}

export function scrollRef(node: HTMLElement, name: string) {
    if (name === TOP) {
        throw new Error(`${TOP} is a reserved name`);
    }
    
    const currentSections = get(sections);

    if (currentSections.has(name)) {
        return;
    }

    sections.update(prev => {
        prev.set(name, node);
        return prev;
    });

    return {
        destroy() {
            sections.update(prev => {
                prev.delete(name);
                return prev;
            });  
        }
    }
}
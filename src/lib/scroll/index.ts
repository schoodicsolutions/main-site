import { get } from "svelte/store";
import { page } from "$app/stores";

import { TOP } from "./constants";
import { currentSection, sections } from "./stores";
import { goto } from "$app/navigation";

interface ScrollLinkOptions {
    pathname?: string;
    scrollTo: string;
}

export function scrollTo(node: HTMLAnchorElement, options: ScrollLinkOptions) {
    const {pathname, scrollTo} = options;

    const listener = async (e: MouseEvent) => {
        e.preventDefault();

        if (pathname) {
            await goto(pathname);
        } else {
            await goto(get(page).url.pathname);
        }

        if (scrollTo === TOP) {
            window.scrollTo({top: 0});
        } else {
            const currentSections = get(sections);
            const wantedSection = currentSections.get(scrollTo);

            if (wantedSection) {
                wantedSection.scrollIntoView(true);
            } else {
                return;
            }
        }

        currentSection.set(scrollTo);

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
        console.error(`Duplicate section '${name}'`);
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
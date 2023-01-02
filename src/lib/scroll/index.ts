import { get } from "svelte/store";
import { page } from "$app/stores";

import { reserved } from "./constants";
import { currentSection, sections } from "./stores";
import { goto } from "$app/navigation";

interface ScrollLinkOptions {
    pathname?: string;
    scrollTo: string;
}

export function scrollTo(node: HTMLAnchorElement, options: ScrollLinkOptions) {
    const {pathname, scrollTo} = options;

    const navigate = async () => {
        if (pathname) {
            await goto(pathname);
        } else {
            await goto(get(page).url.pathname);
        }
    }

    const listener = async (e: MouseEvent) => {
        e.preventDefault();

        if (scrollTo === reserved.top) {
            await navigate();
        } else {
            const currentSections = get(sections);
            const wantedSection = currentSections.get(scrollTo);

            if (wantedSection) {
                await navigate();
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
    if (name[1] === "+") {
        throw new Error(`${name} is a reserved name`);
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
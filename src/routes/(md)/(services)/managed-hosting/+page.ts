import type { Metadata } from "src/types/metadata";

export async function load() {
    console.log(import.meta.glob('./*'));
    const page = Object.values(import.meta.glob('./+page.md'))[0];
    const { metadata } = await page() as {metadata: Metadata};
    return metadata;
}
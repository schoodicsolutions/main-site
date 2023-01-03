import type { Metadata } from "src/types";

export async function load() {
    const page = Object.values(import.meta.glob('./+page.md'))[0];
    const { metadata } = await page() as {metadata: Metadata};
    return metadata;
}
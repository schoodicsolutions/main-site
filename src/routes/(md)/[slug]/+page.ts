import { error } from "@sveltejs/kit";
import type { Metadata } from "src/types";

export async function load({ params }: {params: Record<string, string>}) {
     const pages = Object.entries(import.meta.glob(`./../*.md`));
     const [ , page ] = pages.find(([filename]) => filename === `../${params.slug}.md`) || [];

     if (!page) {
          throw error(404, { message: "Not Found" });
     }

     const {default: content, metadata} = await page() as {default: () => unknown, metadata: Metadata};

     return {
          content,
          ...metadata
     }
}
export const prerender = true;

import { error } from '@sveltejs/kit';
import type { Metadata } from 'src/types';

export async function load({ params }: {params: Record<string, string>}) {
     const [ , page ] = Object.entries(import.meta.glob(`./../*.md`)).find(
          ([filename]) => filename === `../${params.slug}.md`
     ) || [];

     if (!page) {
          throw error(404, { message: 'Not Found' });
     }

     const {default: content, metadata} = await page() as {default: () => unknown, metadata: Metadata};

     const defaultMetadata: Metadata = {
          image: '/assets/social/graph-card.jpg',
     };

     return {
          content,
          ...defaultMetadata,
          ...metadata,
     }
}
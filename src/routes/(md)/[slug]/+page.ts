import { error } from '@sveltejs/kit';
import type { Metadata } from 'src/types';
import cities from './cities.json';

export const prerender = false;

const defaultMetadata: Metadata = {
     image: '/assets/social/graph-card.jpg',
};

const cityPrefix = 'web-design-in-';

export async function load({ params }: {params: Record<string, string>}) {

     if (params.slug.slice(0, cityPrefix.length) === cityPrefix) {
          const citySlugs = cities.map(
               (city) => ({city, slug: cityPrefix + city.toLowerCase().split(' ').join('-')})
          )

          const { city, slug } = citySlugs.find(
               ({ slug }) => slug === params.slug
          ) || {};

          if (!slug) {
               throw error(404, { message: 'Not Found' });
          }

          const [ , page ] = Object.entries(import.meta.glob(`./../web-design-in-city.md`))[0];
          
          const {default: content} = await page() as {default: () => unknown, metadata: Metadata};

          const metadata = {
               title: `${city} Maine Web Design`,
               description: `${city} Maine Web Design Since 2023. Your One Stop Shop for Web Design & E-Commerce`
          };

          return {
               content,
               city,
               ...defaultMetadata,
               ...metadata,
          }
     }

     const [ , page ] = Object.entries(import.meta.glob(`./../*.md`)).find(
          ([filename]) => filename === `../${params.slug}.md`
     ) || [];

     if (!page) {
          throw error(404, { message: 'Not Found' });
     }

     const {default: content, metadata} = await page() as {default: () => unknown, metadata: Metadata};

     return {
          content,
          ...defaultMetadata,
          ...metadata,
     }
}
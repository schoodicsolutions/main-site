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
               title: `Web Design in ${city}, Maine`,
               description: `Need a website for your business in ${city}, Maine? Schoodic Media in Calais, Maine has you covered. We will work with you remotely to build you a world-class website.`
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
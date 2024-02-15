import { PUBLIC_BASEURL } from '$env/static/public';

import { error } from '@sveltejs/kit';
import type { Metadata } from '../../../types';
import cities from './cities.json';

const cityPrefix = 'web-design-in-';

export async function load({ params, url }: {params: Record<string, string>, url: URL }) {

     const defaultMetadata: Metadata = {
          image: `${PUBLIC_BASEURL}/assets/social/graph-card.jpg`,
          canonical: `${PUBLIC_BASEURL}${url.pathname}`,
     };

     if (params.slug.slice(0, cityPrefix.length) === cityPrefix) {
          const citySlugs = cities.map(
               (city) => ({city, slug: cityPrefix + city.toLowerCase().split(' ').join('-')})
          )

          const { city, slug } = citySlugs.find(
               ({ slug }) => slug === params.slug
          ) || {};

          if (!city || !slug) {
               throw error(404, { message: 'Not Found' });
          }

          const [ , page ] = Object.entries(import.meta.glob(`./../web-design-in-city.svelte`))[0];
          
          const {default: content} = await page() as {default: () => unknown, metadata: Metadata};

          const metadata: Metadata = {
               title: `${city} Maine Web Design`,
               heading: `Web Design in ${city}, Maine`,
               description: `${city} Maine Web Design Since 2023. Schoodic Solutions Is Your #1 Company for Local Web Design. Located in Calais, Maine.`,
               contactBlurb: 'Get In Touch',
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
import { PUBLIC_BASEURL } from '$env/static/public';

import { error } from '@sveltejs/kit';
import type { Metadata } from '../../../types';
import cities from './cities.json';

const cityPrefix = 'web-design-in-';

export async function load({ params, url }: {params: Record<string, string>, url: URL }) {

     const defaultMetadata: Metadata = {
          image: `${PUBLIC_BASEURL}/assets/social/graph-card2.jpg`,
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
               description: `${city}Schoodic Solutions offers custom web design, development, and software solutions in Washington County, ME (Portland, Belfast, Camden). We help businesses grow online! Maine Web Design Since 2023. Schoodic Solutions Is Your #1 Company for Local Web Design. Located in Calais, Maine.`,
               keywords: `maine web developers, web designers in maine, heights skowhegan, schoodic, cutting edge kennebunk, custom software development washington county main, website development washington county maine, software development company washington county maine, web development company washington county maine, washington county maine custom software, washington county maine website development, custom software development near me, website development near me, washington county maine web design, washington county maine app development, maine web design, maine app development, web design portland maine, website hosting and design services, maine web developers, managed hosting services maine, responsive web development services maine, web design belfast, camden web design, web designer portland maine, website design belfast, responsive development maine`,
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
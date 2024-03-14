import { PUBLIC_BASEURL } from '$env/static/public';
import type { Metadata } from '../../types';

export function load({ url }: { url: URL } ) {
    const meta: Metadata = {
        description: 'Schoodic Solutions offers custom web design, development, and software solutions in Washington County, ME (Calais, Machias, Lubec, Eastport). We help businesses grow online!',
        keywords: 'maine web developers, web designers in maine, heights skowhegan, schoodic, cutting edge kennebunk, custom software development washington county main, website development washington county maine, software development company washington county maine, web development company washington county maine, washington county maine custom software, washington county maine website development, custom software development near me, website development near me, washington county maine web design, washington county maine app development, maine web design, maine app development, web design portland maine, website hosting and design services, maine web developers, managed hosting services maine, responsive web development services maine, web design belfast, camden web design, web designer portland maine, website design belfast, responsive development maine',
        suffix: 'Maine Web Developers',
        image: `${PUBLIC_BASEURL}/assets/social/graph-card2.jpg`,
        canonical: `${PUBLIC_BASEURL}${url.pathname}`
    }

    return meta;
}
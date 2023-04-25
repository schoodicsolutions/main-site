import { PUBLIC_BASEURL } from '$env/static/public';
import type { Metadata } from '../../types';

export function load({ url }: { url: URL } ) {
    const meta: Metadata = {
        description: 'Welcome to Schoodic Solutions, your go-to source for web design, full stack development, and digital marketing in Maine. Contact us to see how we can help your business succeed online.',
        suffix: 'Web Design in Calais, Maine',
        image: '/assets/social/graph-card.jpg',
        canonical: `${PUBLIC_BASEURL}${url.pathname}`
    }

    return meta;
}
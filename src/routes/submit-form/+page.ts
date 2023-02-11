export const prerender = false;
import { redirect } from '@sveltejs/kit';

export function load() {
    throw redirect(302, '/');
}
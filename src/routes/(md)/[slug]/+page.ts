import { baseMeta } from '$lib/content/site';
import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';
import type { Metadata } from '../../../types';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

type MarkdownModule = { default: Component; metadata: Metadata };

const pages = import.meta.glob<MarkdownModule>('../*.md');

export const entries: EntryGenerator = () => {
	return Object.keys(pages).map((path) => ({ slug: path.slice(3, -3) }));
};

export const load: PageLoad = async ({ params, url }) => {
	const page = pages[`../${params.slug}.md`];

	if (!page) {
		error(404, { message: 'Not Found' });
	}

	const { default: content, metadata } = await page();

	return {
		content,
		...baseMeta(url),
		...metadata,
	};
};

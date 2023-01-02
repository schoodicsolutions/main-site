import { writable } from 'svelte/store';
import { reserved } from './constants';

export const currentSection = writable(reserved.top);
export const sections = writable<Map<string, HTMLElement>>(new Map());
import { writable } from 'svelte/store';
import { TOP } from './constants';

export const currentSection = writable(TOP);
export const sections = writable<Map<string, HTMLElement>>(new Map());
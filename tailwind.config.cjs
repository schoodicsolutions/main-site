/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,md,ts}'],
	theme: {
		extend: {
			colors: {
				brand: '#1F5CE2',
				croix: '#0077FF',
				almond: '#F2F1EC',
				bone: '#F6F6F6',
				ink: '#1B2236',
				line: '#E3E5EA',
				midnight: {
					DEFAULT: '#0A1534',
					950: '#060D22',
					900: '#0A1534',
					800: '#111E45',
					700: '#1B2A5A',
				},
			},
			fontFamily: {
				sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
				mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
				brand: ['Quicksand', ...defaultTheme.fontFamily.sans],
			},
			maxWidth: {
				site: '1280px',
			},
			backgroundImage: {
				grid: 'linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)',
			},
			backgroundSize: {
				grid: '48px 48px',
			},
		},
		screens: {
			xs: '428px',
			...defaultTheme.screens,
		},
	},
	plugins: [],
};

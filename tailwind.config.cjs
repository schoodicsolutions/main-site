/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,md,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#00A3FF',
        croix: '#0077FF',
        almond: '#F2F1EC',
      },
      fontFamily: {
        'brand': 'Quicksand',
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      },
      screens: {
        'short': { 'raw': '(max-height: 800px)' },
      }
    },
  },
  plugins: []
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#00A3FF',
        croix: '#0077FF',
      },
      fontFamily: {
        'brand': 'Rubik',
      }
    },
  },
  plugins: []
};
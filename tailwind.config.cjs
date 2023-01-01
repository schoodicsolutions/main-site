/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#00A3FF',
        croix: '#0077FF',
        almond: '#F2F1EC',
      },
      fontFamily: {
        'brand': 'Rubik',
      }
    },
  },
  plugins: []
};
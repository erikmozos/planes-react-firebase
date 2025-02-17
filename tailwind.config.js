/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        bubblegum: ['Bubblegum Sans', 'sans-serif'],
        fira: ['Fira Sans', 'sans-serif'],
        yusei: ['Yusei Magic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

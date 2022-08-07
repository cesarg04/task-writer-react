/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    minHeight: {
      '3': '30px',
    },
    fontFamily:{
      rubik: ['Rubik', 'sans-serif']
    },
  },
  plugins: [],
}
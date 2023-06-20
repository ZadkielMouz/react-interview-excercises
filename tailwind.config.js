/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      textColor: {
        headerGrey: '#3E3E3E',
        clockGrey: '#727272'
      },
      backgroundColor: {
        bgGrey: '#F8F8F8',
      },
      colors: {
        darkerGrey: '#3E3E3E',
        darkerGrey2: '#3C3C3C',
      }
    },
  },
  plugins: [],
}


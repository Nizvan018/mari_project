/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#21004D',
        custom_orange: '#F05222',
        cream: '#FEF4F0'
      }
    },
  },
  plugins: [],
}
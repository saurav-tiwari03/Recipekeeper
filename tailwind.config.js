/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inputForm':['MuseoModerno','sans-serif'],
        'Lato': ["Lato",'sans-serif']
      }
    },
  },
  plugins: [],
}
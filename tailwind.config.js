/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inputForm: ["MuseoModerno", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Mulish:["Mulish", "sans-serif"],
        Poppins:["Poppins", "sans-serif"],
        Anton:["Anton SC", "sans-serif"],
        OpenSans:["Open Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
};

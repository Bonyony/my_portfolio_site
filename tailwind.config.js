/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        eikoM: ["Eiko Med", "sans-serif"],
        eikoH: ["Eiko Heavy", "sans-serif"],
        roboto: ["Roboto Regular", "sans-serif"],
        robotoB: ["Roboto Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      // this is 20px larger than standard!
      xl: "1300px",
      // => @media (min-width: 1280px) { ... }

      // nearly 200px larger
      "2xl": "1700px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        eikoM: ["Eiko Med", "sans-serif"],
        eikoH: ["Eiko Heavy", "sans-serif"],
        roboto: ["Roboto Regular", "sans-serif"],
        robotoB: ["Roboto Bold", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    // darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};

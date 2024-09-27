const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/img/hero.webp')",
      },
      // screens: {
      //   sm: "480px",
      // },
    },
  },
  plugins: [flowbite.plugin()],
};

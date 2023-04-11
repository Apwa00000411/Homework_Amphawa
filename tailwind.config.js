/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        nav1: "#7fbdf0",
        nav2: "#4299f8",
        nav_mo: "#00a1ed",
        hero: "#230d06",
        hero1: "#27130d",
        hero_mo: "#250b05",
        main: "#00a6eb",
        head: "#4db8e0",
        sub: "#002575",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        omyim: ["omyim", "cursive"],
      },

      backgroundImage: {
        hero_: "src('../img/hero/bg-button.png')",
      },
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};

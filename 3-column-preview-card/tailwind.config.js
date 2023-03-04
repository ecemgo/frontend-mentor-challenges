/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "960px",
      lg: "1440px",
    },
    extend: {
      colors: {
        orange: "hsl(31, 77%, 52%)",
        cyan: "hsl(184, 100%, 22%)",
        "dark-cyan": "hsl(179, 100%, 13%)",
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "light-gray": "hsl(0, 0%, 95%)",
      },
      fontFamily: {
        shoulders: ["Big Shoulders Display", "cursive"],
        lexend: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};

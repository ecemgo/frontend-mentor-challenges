/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        main: "hsl(217, 54%, 11%)",
        card: "hsl(216, 50%, 16%)",
        line: "hsl(215, 32%, 27%)",
        white: "hsl(0, 0%, 100%)",
        attribution: "hsl(228, 45%, 44%)",
      },
      fontFamily: {
        body: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

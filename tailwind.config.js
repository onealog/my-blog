/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      colors: {
        green: {
          500: "#3C6255",
          400: "#61876E",
          300: "#A6BB8D",
        },
        gray: {
          500: "#000000",
          400: "#444444",
          300: "#B8B8B8",
          200: "#EDEDED",
          100: "#F2F2F2",
          0: "#FFFFFF",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};

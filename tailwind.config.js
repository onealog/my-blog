/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#3C6255',
          400: '#61876E',
          300: '#A6BB8D',
        },
        gray: {
          500: '#000000',
          400: '#444444',
          200: '#B8B8B8',
          100: '#F2F2F2',
          0: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
};

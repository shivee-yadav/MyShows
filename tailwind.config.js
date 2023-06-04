/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        purpy:

        {
          50: '#f9e4ff',
          100: '#e8b3ff',
          200: '#d881fd',
          300: '#c84ffc',
          400: '#b921fc',
          500: '#a00ee3',
          600: '#7c07b1',
          700: '#59037e',
          800: '#36004d',
          900: '#14001d',
        }

      }
    },
  },
  plugins: [],
}


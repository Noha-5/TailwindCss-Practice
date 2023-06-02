/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["build/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#252F40',
        }
      },
      keyframes: {
        wave: {
          '0%': { 'background-position-x': '0' },
          '100%': { 'background-position-x': '2000px' },
        },
      },
    }

  },
  plugins: [],
}


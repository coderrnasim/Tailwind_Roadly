/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        brandDark: '#0D172A',
        brandRed: '#FF3B25',
        brandLight: '#F8FAFC',
      }
    },
  },
  plugins: [],
}
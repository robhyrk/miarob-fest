/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      'sans': ['Nunito Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // custom added for smaller devices
      's300': {'max': '300px'}, 
    },
    extend: {},
  },
  plugins: [],
}

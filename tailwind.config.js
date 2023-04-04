/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'fasthand': ['Fasthand', 'cursive'],
        'amatic': ['Amatic SC', 'cursive'],
      },
    },
  },
  plugins: [],
}

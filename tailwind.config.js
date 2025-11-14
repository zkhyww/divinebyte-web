/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "conic-gradient": "conic-gradient(from 180deg at 50% 50%, #00F2DE 0deg, #FF00E5 180deg, #00F2DE 360deg)",
      },
    },
  },
  plugins: [],
}
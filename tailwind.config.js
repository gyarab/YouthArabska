/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dawn-gold': '#FFD700',
        'dawn-orange': '#FF7E5F',
        'dawn-purple': '#C779D0',
        // Light "milk" theme tokens
        'milk': '#FBF9F4',
        'milk-deep': '#F1ECE1',
        'ink': '#262234',
        'accent': '#BE7A12',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

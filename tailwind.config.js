/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['var(--font-mulish)'],
      }
    },
    colors: {
      transparent: 'transparent',
      'white': {
        default: '#FFFFFF'
      },
      'black': {
        default: '#151515'
      }
    }
  },
  plugins: [],
};

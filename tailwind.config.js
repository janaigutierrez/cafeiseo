/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'iseo': {
          50:  '#fffef2',
          100: '#fefcd4',  // crema - fons clars
          200: '#fdf5a0',
          300: '#c49a55',
          400: '#8c5a1a',
          500: '#663f08',  // marró - accent principal
          600: '#4d2f06',
          700: '#3a2304',
          800: '#2a1803',
          900: '#1f1202',  // fosc - text i fons foscos
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

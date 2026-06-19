/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        main: '#B80000',
        'gray-custom': '#B1AEAE',
        'light-gray': '#F0F0F0',
      },
      fontFamily: {
        almarai: ['Almarai', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

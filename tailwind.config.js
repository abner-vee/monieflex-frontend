/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#FFEDF2',
        'custom-background': '#F6F1FF',
        'current-account-color' : '#A3A3A3',
        'eye-background-color': '#08284E',

      },
      spacing: {
        '429': '429px',
        '186' : '186px',
        '381': '381px',
        '74.75': '299px',
        '48' : '192',
        '122': '122px',
        '16.67': '16.67px',
        '13.33': '13.33px',
        '3.33': '3.33px',
        '1.67': '1.67px',
        '172': '172px',
        '14': '14px',
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
      },
      letterSpacing: {
        '0.09em': '0.09em',
      },
    },
  },
  plugins: [],
}


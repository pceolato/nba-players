/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "app/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'DM Sans, sans-serif'
      },

      colors: {  
        white: '#f9f9f9',
        gray: {
          200: '#828282',
          400: '#333333',
          700: '#212121',
          900: '#171717 '
        }, 
        red: {
          300: '#ff4656',
          500: '#c9082a'
        },
        blue: {
          500: '#17408b' 
        },
        orange: {
          500: '#cf6143',
          100: '#E0866D'
        }
      }
    },
  },
  plugins: [],
}

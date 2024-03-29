/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "src/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundColor: {
        body: 'var(--color-bg-body)',
        card: 'var(--color-bg-card)',
        input: 'var(--color-bg-input)',
        hoverCard: 'var(--color-bg-card-hover)',
      },
      textColor: {
        title: 'var(--color-text-title)',
        subtitle: 'var(--color-text-subtitle)',
      },
      placeholderColor: {
        phInput: 'var(--color-placeholder-input)'
      },
      borderWidth: {
        cardBorder: 'var(--border-card)',
        inputBorder: 'var(--border-input)'
      },
      spacing: {
        '181': '45.25rem'
      },

      fontFamily: {
        sans: ['var(--font-dmSans)', ...fontFamily.sans],
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
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

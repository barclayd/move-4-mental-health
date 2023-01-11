/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '640px',
      lg: '1024px',
      xl: '1500px'
    },
    colors: {
      gray: {
        100: 'var(--color-gray-100)',
        300: 'var(--color-gray-300)',
        500: 'var(--color-gray-500)'
      },
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      pastel: {
        orange: 'var(--color-pastel-orange)',
        purple: 'var(--color-pastel-purple)'
      },
      'dark-blue': 'rgb(15 23 42)'
    },
    extend: {
      fontFamily: {
        sans: [
          'Matter',
          'Helvetica Neue',
          'Helvetica',
          ...defaultTheme.fontFamily.sans
        ]
      },
      fontSize: {
        xl: '1.375rem', // 22px
        '2xl': '1.5625rem', // 25px
        '3xl': '1.875rem', // 30px
        '4xl': '2.5rem', // 40px
        '5xl': '3.125rem', // 50px
        '6xl': '3.75rem', // 60px
        '7xl': '4.375rem' // 70px
      }
    }
  },
  plugins: []
};

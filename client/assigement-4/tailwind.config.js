/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(../src/assets/images/Background.svg)"
      }
    },
    fontFamily: {
      'Quicksand': ['Quicksand']
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1024px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '768px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
      'mobile-s': { 'max': '320px' },
      'mobile-m': { 'max': '375px' },
      'mobile-l': { 'max': '425px' },
      'iphone': { 'max': '414px' }
      // 480 => default 
    }
  },
  plugins: [],
}

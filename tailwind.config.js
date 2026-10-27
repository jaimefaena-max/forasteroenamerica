/** @type {import('tailwindcss').Config} */
// Misma configuración que antes vivía en el <script> del CDN de Tailwind.
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          terracotta: '#C85A32',
          terracottaDark: '#9E3F1B',
          ochre: '#D99B26',
          sand: '#F4E8C1',
          olive: '#4A5D36',
          oliveDark: '#2C3A1D',
          vintageBg: '#FAF6ED',
          cardBg: '#FFFDF9',
          darkText: '#2B2523'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        vintage: ['Special Elite', 'cursive'],
        hand: ['Caveat', 'cursive']
      }
    }
  },
  plugins: []
};

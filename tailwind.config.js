/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'biasa': 'Inter',
        'Elegant': 'Playfair Display',
      },
      colors:{
        'Dark10': '#1A1A1A',
        'bgbody': '#0F0F0F',
        'biru': '#03346E',
        'hoverbtn': '#4589DA'
      },
    },
  },
  plugins: [],
}


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
        'biru': '#3fa2f6',
        'hoverbtn': '#195b94',
        'border': '#3fa2f6',
      },
    },
  },
  plugins: [],
}


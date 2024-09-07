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
        'Dark10': '#426363',
        'biru': '#36ABB0',
        'hoverbtn': '#195b94',
        'border': '#3fa2f6',
        'blue/60': '#161D6F',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}


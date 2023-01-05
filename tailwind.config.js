/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FFD54C',
          secondary: '#f6d860',
          accent: '#202020',
          neutral: '#3d4451',
          'base-100': '#ffffff'
        }
      },
      'dark',
      'cupcake'
    ]
  },
  plugins: [require('daisyui')]
}

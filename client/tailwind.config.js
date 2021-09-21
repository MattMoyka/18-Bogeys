module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'golf-course': "url('https://imgur.com/3HOYHSq.jpeg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

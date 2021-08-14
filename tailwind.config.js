const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['Fira Code', 'monospace'],
    },
    colors: {
      gray: colors.trueGray,
      fuchsia: colors.fuchsia,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

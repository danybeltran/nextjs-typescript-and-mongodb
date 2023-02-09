module.exports = {
  purge: ['./app/**/*.tsx', './components/**/*.tsx'],
  darkMode: false,
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover', 'focus', 'active'],
    padding: ['responsive', 'hover', 'focus', 'active'],
    margin: ['responsive', 'hover', 'focus', 'active'],
    align: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [require('daisyui')]
}

/* const colors = {
  dye: "212, 72%,",
  prussian: "215, 66%,",
  oxford: "213, 72%,",
  cadet: "209, 32%,",
  mint: "111, 24%,",
};

var theme = {};
Object.keys(colors).map((color) => {
  theme[color] = {};
  for (let colorVariant = 1; colorVariant < 10; colorVariant++) {
    theme[color][colorVariant * 100] = "hsl(".concat(
      colors[color].concat(100 - colorVariant * 10, "%)")
    );
  }
});
 */
module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false,
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    fontSize: ["responsive", "hover", "focus", "active"],
    padding: ["responsive", "hover", "focus", "active"],
    margin: ["responsive", "hover", "focus", "active"],
    align: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};

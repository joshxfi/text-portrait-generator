module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5460E6",
        secondary: "#2F3136"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

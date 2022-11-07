const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["raleway", "sanserif"]
      }
    },
    colors: {
      header: "#2b2d42",
      headerfont: "#dad7cd",
      cardbg: "#4a4e69",
      background: "#9a8c98",
      white: "#ffffff",
      black: "#000000",
      fontbg: "#22223b",
      fontcolor: "#f2e9e4"
    }
  },
  plugins: [],
};

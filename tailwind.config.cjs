const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        raleway: ["raleway","sanserif"]
      }
    },
    colors:{
      header: "#2b2d42",
      headerfont: "#dad7cd",
      cardbg: "#a3b18a",
      background: "#e0e1dd",
      white: "#ffffff",
      black: "#000000"
    }
  },
  plugins: [],
};

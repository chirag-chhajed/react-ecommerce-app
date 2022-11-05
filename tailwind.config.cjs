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
      header: "#344e41",
      headerfont: "#dad7cd",
      main: "#588157",
      cardbg: "#a3b18a",
      background: "#c7f9cc"
    }
  },
  plugins: [],
};

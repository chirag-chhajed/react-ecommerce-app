const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        raleway: ["raleway","sanserif"]
      }
    },
  },
  plugins: [],
};

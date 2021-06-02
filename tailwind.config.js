const COLOR = require("./src/constant/variables/COLOR");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: {
          500: "#ffbc42",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

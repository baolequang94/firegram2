// const COLOR = require("./src/constant/variables/COLOR");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {},
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    extend: {
      colors: {
        main: {},
        lightGray: {
          250: "#cdcdcd",
          500: "#646464",
          750: "#5c5c5c",
        },
        dark: {
          100: "#111111",
          250: "#222222",
          500: "#161616",
          750: "#393939",
        },
        linear: {
          1: "#8A2387",
          2: "#E94057",
          3: "#F27121",
        },
        red: {
          primary: "#ed4956",
        },
        black: {
          light: "#262626",
          faded: "#00000059",
        },
        lightMode: {
          background: "#ffffff",
          gray: {
            base: "#616161",
            background: "#fafafa",
            primary: "#dbdbdb",
          },
        },
      },
    },
  },
  variants: {
    outline: ["focus", "active"],
    extend: {
      opacity: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
};

// ffbc42

// 50: "#dcd5d1",
// 100: "#C6BFBC",
// 150: "#B0AAA7",
// 200: "#9A9592",
// 250: "#847F7D",
// 300: "#6E6A68",
// 500: "#585553",
// 1000: "#D1D8DC",
// 2000: "#92a8a2",
// 5: "#DFD9D5",
// 10: "#E3DDDA",
// 15: "#E6E1DE",
// 20: "#EAE5E3",
// 25: "#EDE9E7",
// 30: "#F1EEEC",
// 35: "#F4F2F1",

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: "class",
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  purge: [
    "./pages/**/*.{js.ts,tsx,jsx}",
    "./components/**/*.{js.ts,tsx,jsx}",
    "./../../packages/components/**/*.{js.ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        base: colors.blue,
        blue: colors.blue,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        cyan: colors.cyan,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        gray: colors.gray,
        green: colors.green,
        indigo: colors.indigo,
        lightBlue: colors.lightBlue,
        lime: colors.lime,
        orange: colors.orange,
        pink: colors.pink,
        primary: colors.indigo,
        purple: colors.purple,
        red: colors.red,
        rose: colors.rose,
        secondary: colors.purple,
        teal: colors.teal,
        trueGray: colors.trueGray,
        violet: colors.violet,
        warmGray: colors.warmGray,
        yellow: colors.yellow,
      },
      textColor: {
        base: colors.warmGray,
        primary: colors.blueGray,
        secondary: colors.coolGray,
      },
    },
  },
};

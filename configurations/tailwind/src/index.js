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
  purge: ["./**/**/components/**/*.{js.ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        cyan: colors.cyan,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
        lime: colors.lime,
        orange: colors.orange,
        rose: colors.rose,
        secondary: colors.purple,
        sky: colors.sky,
        teal: colors.teal,
        trueGray: colors.trueGray,
        violet: colors.violet,
        warmGray: colors.warmGray,
      },
    },
  },
};

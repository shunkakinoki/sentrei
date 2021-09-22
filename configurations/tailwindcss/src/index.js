const { join } = require("path");

const colors = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
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
    join(__dirname, "src/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "../../../components/atoms/src/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "../../../components/molecules/src/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "../../../components/organisms/src/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "../../../components/roots/src/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "../../../components/screens/src/**/*.{js,ts,jsx,tsx}"),
  ],
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
    fontFamily: {
      Atari: ["AtariClassic"],
    },
  },
};

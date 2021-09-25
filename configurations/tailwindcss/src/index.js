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
    join(__dirname, "../../../apps/**/src/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "../../../components/**/src/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
      },
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
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
    },
    fontFamily: {
      Atari: ["AtariClassic"],
    },
  },
};

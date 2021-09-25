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
    require("tailwindcss-border-gradients")(),
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
      backgroundImage: {
        conic: "conic-gradient(var(--tw-gradient-stops))",
        "conic-to-t": "conic-gradient(at top, var(--tw-gradient-stops))",
        "conic-to-b": "conic-gradient(at bottom, var(--tw-gradient-stops))",
        "conic-to-l": "conic-gradient(at left, var(--tw-gradient-stops))",
        "conic-to-r": "conic-gradient(at right, var(--tw-gradient-stops))",
        "conic-to-tl": "conic-gradient(at top left, var(--tw-gradient-stops))",
        "conic-to-tr": "conic-gradient(at top right, var(--tw-gradient-stops))",
        "conic-to-bl":
          "conic-gradient(at bottom left, var(--tw-gradient-stops))",
        "conic-to-br":
          "conic-gradient(at bottom right, var(--tw-gradient-stops))",
        radial: "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "radial-at-t":
          "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
        "radial-at-b":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
        "radial-at-l":
          "radial-gradient(ellipse at left, var(--tw-gradient-stops))",
        "radial-at-r":
          "radial-gradient(ellipse at right, var(--tw-gradient-stops))",
        "radial-at-tl":
          "radial-gradient(ellipse at top left, var(--tw-gradient-stops))",
        "radial-at-tr":
          "radial-gradient(ellipse at top right, var(--tw-gradient-stops))",
        "radial-at-bl":
          "radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))",
        "radial-at-br":
          "radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))",
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
        purple: colors.purple,
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
      linearBorderGradients: theme => {
        return {
          colors: theme("colors"),
        };
      },
    },
  },
  variants: {
    linearBorderGradients: ["responsive", "hover", "dark"],
  },
};

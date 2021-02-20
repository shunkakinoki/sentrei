module.exports = {
  darkMode: "class",
  purge: ["src/**/*.tsx"],
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

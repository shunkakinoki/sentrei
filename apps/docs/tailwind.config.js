// eslint-disable-next-line @typescript-eslint/unbound-method
const { join } = require("path");

const { createGlobPatternsForDependencies } = require("@nrwl/next/tailwind");

/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig }
 */
module.exports = {
  presets: [require("@sentrei/tailwindcss")],
  purge: [
    join(__dirname, "src/**/*.{js,ts,jsx,tsx}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};

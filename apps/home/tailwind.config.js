// eslint-disable-next-line @typescript-eslint/unbound-method
const { join } = require("path");

const { createGlobPatternsForDependencies } = require("@nrwl/next/tailwind");

module.exports = {
  presets: [require("@sentrei/tailwind")],
  purge: [
    join(__dirname, "pages/**/*.{js,ts,jsx,tsx}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};

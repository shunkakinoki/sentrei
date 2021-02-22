module.exports = {
  "*.{js,ts,tsx}": ["yarn run eslint:lint", "yarn run prettier:lint"],
  "*.{md,json,yml}": ["yarn run prettier:lint"],
  "package.json": [
    "yarn run npm-package-json:check",
    "yarn run sort-package-json:check",
    "yarn run prettier:lint",
  ],
};

module.exports = {
  "*.{js,ts,tsx}": ["yarn run eslint:fix", "yarn run prettier:fix"],
  "*.{md,json,yml}": ["yarn run prettier:fix"],
  "package.json": ["yarn run npm-package-json:lint", "yarn run prettier:fix"],
};

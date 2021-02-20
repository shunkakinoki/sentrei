module.exports = {
  "*.{js,ts,tsx}": ["yarn run eslint:fix", "yarn run prettier:fix"],
  "*.json": ["yarn run prettier:fix"],
  "package.json": ["yarn run sort-package-json:fix"],
};

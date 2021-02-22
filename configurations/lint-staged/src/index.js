module.exports = {
  "*.{js,ts,tsx}": ["yarn run eslint:fix", "yarn run prettier:fix", "git add"],
  "*.{md,json,yml}": ["yarn run prettier:fix", "git add"],
  "package.json": [
    "yarn run npm-package-json:lint",
    "yarn run sort-package-json:fix",
    "yarn run prettier:fix",
    "git add",
  ],
};

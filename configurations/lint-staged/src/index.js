module.exports = {
  "*.{js,ts,tsx}": [
    "yarn run eslint:cmd --fix",
    "yarn run prettier:cmd --write",
  ],
  "*.{md,json,yml}": ["yarn run prettier:cmd --write"],
  "package.json": [
    "yarn run npm-package-json:lint",
    "yarn run prettier:cmd --write",
  ],
};

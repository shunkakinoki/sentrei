const path = require("path");

const createAlias = (from, useArr) =>
  useArr.reduce(
    (acc, cur) => ({
      ...acc,
      [`@sentrei/${cur}/src`]: path.resolve(__dirname, "..", from, cur),
    }),
    {},
  );

module.exports = {
  ...createAlias("components", ["atoms", "molecules", "organisms", "view"]),
};

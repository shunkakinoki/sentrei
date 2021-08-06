const { defaultConfig, miniPlugins, withPlugins } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  ...defaultConfig,
  basePath: "/og",
};

module.exports = withPlugins(miniPlugins, config);

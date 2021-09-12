const { defaultConfig, miniPlugins, withPlugins } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  ...defaultConfig,
  target: "experimental-serverless-trace",
};

module.exports = withPlugins(miniPlugins, config);

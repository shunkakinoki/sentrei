const { defaultConfig, plugins, withPlugins } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  ...delete defaultConfig.experimental,
  basePath: "/app",
};

module.exports = withPlugins(plugins, config);

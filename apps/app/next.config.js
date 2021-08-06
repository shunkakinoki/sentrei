const { defaultConfig, plugins, withPlugins } = require("@sentrei/next");

const isProduction = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
const config = {
  ...delete defaultConfig.experimental,
  basePath: isProduction ? "/app" : "/",
};

module.exports = withPlugins(plugins, config);

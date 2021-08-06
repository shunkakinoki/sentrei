const { plugins, withPlugins } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  basePath: "/app",
};

module.exports = withPlugins(plugins, config);

const { defaultConfig, plugins, withPlugins } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = { ...defaultConfig, ...{ basePath: "/app" } };

module.exports = withPlugins(plugins, config);

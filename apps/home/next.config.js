const { defaultConfig, plugins, withPlugins } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = { ...defaultConfig, basePath: "/" };

module.exports = withPlugins(plugins, config);

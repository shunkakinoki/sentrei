const { defaultConfig, miniPlugins, withPlugins } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = { ...defaultConfig };

module.exports = withPlugins(miniPlugins, config);

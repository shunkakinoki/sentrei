const { defaultConfig, plugins, withPlugins } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = { ...defaultConfig, ...{ basePath: "/app" } };

console.log(config);

module.exports = withPlugins(plugins, config);

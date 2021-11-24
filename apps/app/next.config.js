// eslint-disable-next-line no-unused-vars
const { defaultConfig, plugins, withPlugins } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  ...defaultConfig,
  async rewrites() {
    return [
      {
        source: "/docs/:slug",
        destination: "https://docs.sentrei.com/:slug",
      },
      {
        source: "/home/:slug",
        destination: "https://home.sentrei.com/:slug",
      },
    ];
  },
};

module.exports = config;
// module.exports = withPlugins(plugins, config);

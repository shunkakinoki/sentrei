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
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/docs",
        destination: "https://docs.sentrei.com/docs",
      },
      {
        source: "/docs/:path*",
        destination: "$https://docs.sentrei.com/docs/:path*",
      },
      {
        source: "/home",
        destination: "https://home.sentrei.com/home",
      },
      {
        source: "/home/:path*",
        destination: "https://home.sentrei.com/home/:path*",
      },
    ];
  },
};

module.exports = config;
// module.exports = withPlugins(plugins, config);

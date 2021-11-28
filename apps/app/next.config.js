// eslint-disable-next-line no-unused-vars
const { defaultConfig, plugins, withPlugins } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  ...defaultConfig,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `/:path*`,
        },
        {
          source: "/home",
          destination: "https://home.sentrei.com/home",
        },
        {
          source: "/home/:path*",
          destination: "https://home.sentrei.com/home/:path*",
        },
      ],
    };
  },
};

module.exports = config;
// module.exports = withPlugins(plugins, config);

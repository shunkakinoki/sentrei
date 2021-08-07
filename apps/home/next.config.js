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
        source: "/app/:path",
        destination: "https://app.sentrei.com/:path",
      },
      {
        source: "/demo/:path",
        destination: "https://demo.sentrei.com/:path",
      },
      {
        source: "/docs/:path",
        destination: "https://docs.sentrei.com/:path",
      },
      {
        source: "/og/:path",
        destination: "https://og.sentrei.com/:path",
      },
    ];
  },
};

module.exports = withPlugins(plugins, config);

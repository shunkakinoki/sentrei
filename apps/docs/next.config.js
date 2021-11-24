const { defaultConfig } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  ...defaultConfig,
  basePath: "/docs",
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://app.sentrei.com/:path*`,
          basePath: false,
        },
      ],
    };
  },
};

module.exports = config;

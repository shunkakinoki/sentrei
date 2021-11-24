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
          has: [
            {
              type: "host",
              value: "docs.sentrei.com",
            },
          ],
          destination: `https://app.sentrei.com/docs/:path*`,
          basePath: false,
        },
      ],
    };
  },
};

module.exports = config;

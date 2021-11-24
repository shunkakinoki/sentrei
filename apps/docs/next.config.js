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
              value: "sentrei.com",
            },
          ],
          destination: "/docs",
        },
      ],
    };
  },
};

module.exports = config;

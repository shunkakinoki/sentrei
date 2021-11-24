const { defaultConfig } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  ...defaultConfig,
  basePath: "/docs",
  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "docs.sentrei.com",
          },
        ],
        destination: "/docs",
      },
    ];
  },
};

module.exports = config;

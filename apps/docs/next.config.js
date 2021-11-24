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
        source: "/docs",
        has: [
          {
            type: "host",
            value: "docs.sentrei.com",
            basePath: false,
          },
        ],
        destination: "/",
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "docs.sentrei.com",
            basePath: false,
          },
        ],
        destination: "/:path*",
      },
    ];
  },
};

module.exports = config;

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
            value: "*.vercel.app",
          },
        ],
        destination: "https://app.sentrei.com/docs",
      },
    ];
  },
};

module.exports = config;

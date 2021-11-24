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
          source: "/",
          destination: "/docs",
          basePath: false,
        },
      ],
    };
  },
};

module.exports = config;

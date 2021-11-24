const { defaultConfig } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  ...defaultConfig,
  basePath: "/docs",
};

module.exports = config;

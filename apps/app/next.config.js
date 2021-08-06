const withNx = require("@nrwl/next/plugins/with-nx");
const { defaultConfig } = require("@sentrei/next");
/**
 * @type {import('next').NextConfig}
 */
const config = {
  ...defaultConfig,
  basePath: "/app",
};

module.exports = withNx(config);

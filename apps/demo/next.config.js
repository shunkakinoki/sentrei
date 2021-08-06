const { defaultConfig, plugins, withPlugins } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  ...defaultConfig,
  basePath: "/demo",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/demo",
        permanent: true,
      },
    ];
  },
};

module.exports = withPlugins(plugins, config);

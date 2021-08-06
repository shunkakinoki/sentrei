const { defaultConfig, miniPlugins, withPlugins } = require("@sentrei/next");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  ...defaultConfig,
  basePath: "/og",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/og",
        permanent: true,
      },
    ];
  },
};

module.exports = withPlugins(miniPlugins, config);

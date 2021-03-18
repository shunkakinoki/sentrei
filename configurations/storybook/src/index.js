const path = require("path");

const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  addons: ["@storybook/addon-essentials", "storybook-addon-designs"],
  stories: ["../apps/**/*.stories.tsx"],
  typescript: {
    reactDocgen: false,
  },
  refs: { "@chakra-ui/react": { disable: true } },
  // eslint-disable-next-line @typescript-eslint/require-await
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};

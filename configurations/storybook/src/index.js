const path = require("path");

const toPath = _path => {
  return path.join(process.cwd(), _path);
};

module.exports = {
  addons: ["@storybook/addon-essentials"],
  stories: ["../components/**/*.stories.tsx"],
  options: {
    storySort: {
      method: "alphabetical",
      order: [],
      locales: "",
    },
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  typescript: {
    reactDocgen: false,
  },
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

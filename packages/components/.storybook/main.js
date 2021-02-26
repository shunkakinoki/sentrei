const path = require("path");

const aliases = {
  "@sentrei/components": path.resolve(__dirname, "../src"),
};

module.exports = {
  addons: ["@storybook/addon-essentials"],
  stories: ["../src/**/*.stories.tsx"],
  refs: { "@chakra-ui/react": { disable: true } },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    };
    return config;
  },
};

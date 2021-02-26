module.exports = {
  addons: ["@storybook/addon-essentials"],
  stories: ["../src/**/*.stories.tsx"],
  refs: { "@chakra-ui/react": { disable: true } },
};

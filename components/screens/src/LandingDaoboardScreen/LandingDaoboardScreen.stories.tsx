import type { Story, Meta } from "@storybook/react";

import { LandingDaoboardScreen } from "./LandingDaoboardScreen";

export default {
  component: LandingDaoboardScreen,
  title: "Screens/LandingDaoboardScreen",
} as Meta;

export const _LandingDaoboardScreen: Story = args => {
  return <LandingDaoboardScreen {...args} />;
};

_LandingDaoboardScreen.args = {};

import type { Story, Meta } from "@storybook/react";

import { LandingMoshScreen } from "./LandingMoshScreen";

export default {
  component: LandingMoshScreen,
  title: "Screens/LandingMoshScreen",
} as Meta;

export const _LandingMoshScreen: Story = args => {
  return <LandingMoshScreen {...args} />;
};

_LandingMoshScreen.args = {};

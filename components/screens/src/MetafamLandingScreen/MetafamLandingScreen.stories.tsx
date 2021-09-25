import type { Story, Meta } from "@storybook/react";

import { MetafamLandingScreen } from "./MetafamLandingScreen";

export default {
  component: MetafamLandingScreen,
  title: "Screens/MetafamLandingScreen",
} as Meta;

export const _MetafamLandingScreen: Story = args => {
  return <MetafamLandingScreen {...args} />;
};

_MetafamLandingScreen.args = {};

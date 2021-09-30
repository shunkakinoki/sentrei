import type { Story, Meta } from "@storybook/react";

import { MetascoreLandingScreen } from "./MetascoreLandingScreen";

export default {
  component: MetascoreLandingScreen,
  title: "Screens/MetascoreLandingScreen",
} as Meta;

export const _MetascoreLandingScreen: Story = args => {
  return <MetascoreLandingScreen {...args} />;
};

_MetascoreLandingScreen.args = {};

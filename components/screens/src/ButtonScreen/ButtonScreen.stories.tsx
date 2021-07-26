import type { Story, Meta } from "@storybook/react";

import { ButtonScreen } from "./ButtonScreen";

export default {
  component: ButtonScreen,
  title: "Screens/ButtonScreen",
} as Meta;

export const _ButtonScreen: Story = args => {
  return <ButtonScreen {...args} />;
};

_ButtonScreen.args = {};

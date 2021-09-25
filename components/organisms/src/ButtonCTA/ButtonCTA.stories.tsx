import type { Story, Meta } from "@storybook/react";

import { ButtonCTA } from "./ButtonCTA";

export default {
  component: ButtonCTA,
  title: "Organisms/ButtonCTA",
} as Meta;

export const _ButtonCTA: Story = args => {
  return <ButtonCTA {...args} />;
};

_ButtonCTA.args = {};

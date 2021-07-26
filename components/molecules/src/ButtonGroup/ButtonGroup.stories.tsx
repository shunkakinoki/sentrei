import type { Story, Meta } from "@storybook/react";

import { ButtonGroup } from "./ButtonGroup";

export default {
  component: ButtonGroup,
  title: "ButtonGroup",
} as Meta;

export const _ButtonGroup: Story = args => {
  return <ButtonGroup {...args} />;
};

_ButtonGroup.args = {};

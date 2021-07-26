import type { Story, Meta } from "@storybook/react";

import { ButtonSection } from "./ButtonSection";

export default {
  component: ButtonSection,
  title: "ButtonSection",
} as Meta;

export const _ButtonSection: Story = args => {
  return <ButtonSection {...args} />;
};

_ButtonSection.args = {};

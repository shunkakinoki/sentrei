import type { Story, Meta } from "@storybook/react";

import { ModalWindow } from "./ModalWindow";

export default {
  component: ModalWindow,
  title: "Molecules/ModalWindow",
} as Meta;

export const _ModalWindow: Story = args => {
  return <ModalWindow {...args} />;
};

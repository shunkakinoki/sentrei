import type { Story, Meta } from "@storybook/react";

import { ModalScreen } from "./ModalScreen";

export default {
  component: ModalScreen,
  title: "Molecules/ModalScreen",
} as Meta;

export const _ModalScreen: Story = args => {
  return <ModalScreen {...args} />;
};

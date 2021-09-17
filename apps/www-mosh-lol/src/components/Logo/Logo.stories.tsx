import type { Story, Meta } from "@storybook/react";

import { Logo } from "./Logo";

export default {
  component: Logo,
  title: "Atoms/Logo",
} as Meta;

export const _Logo: Story = () => {
  return <Logo />;
};

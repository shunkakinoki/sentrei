import type { Story, Meta } from "@storybook/react";

import { GlowLogo } from "./GlowLogo";

export default {
  component: GlowLogo,
  title: "Molecules/GlowLogo",
} as Meta;

export const _GlowLogo: Story = () => {
  return <GlowLogo />;
};

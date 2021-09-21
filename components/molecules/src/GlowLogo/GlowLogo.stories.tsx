import type { Story, Meta } from "@storybook/react";

import { GlowLogo } from "./GlowLogo";

export default {
  component: GlowLogo,
  title: "Molecules/GlowLogo",
} as Meta;

export const _GlowLogo: Story = () => {
  return (
    <GlowLogo src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
  );
};

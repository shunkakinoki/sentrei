import type { Story, Meta } from "@storybook/react";

import { FooterLogo } from "./FooterLogo";

export default {
  component: FooterLogo,
  title: "Organisms/FooterLogo",
} as Meta;

export type Values = "png" | "jpeg";

export const _FooterLogo: Story = () => {
  return <FooterLogo />;
};

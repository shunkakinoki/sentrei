import type { Story, Meta } from "@storybook/react";

import { FooterLogo } from "./FooterLogo";

export default {
  component: FooterLogo,
  title: "Organisms/FooterLogo",
} as Meta;

export type Values = "png" | "jpeg";

export const _FooterLogo: Story = () => {
  return (
    <FooterLogo
      discord="https://discord.com"
      twitter="https://twitter.com"
      github="https://github.com"
    />
  );
};

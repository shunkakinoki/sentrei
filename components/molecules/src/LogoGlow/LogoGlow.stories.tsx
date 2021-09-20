import LogoImage from "@public/www-mosh-lol/Logo.png";
import type { Story, Meta } from "@storybook/react";

import { LogoGlow } from "./LogoGlow";

export default {
  component: LogoGlow,
  title: "Molecules/LogoGlow",
} as Meta;

export const _LogoGlow: Story = () => {
  return <LogoGlow src={LogoImage} />;
};

import type { Story, Meta } from "@storybook/react";

import type { ParallaxProps } from "./Parallax";
import { Parallax } from "./Parallax";

export default {
  component: Parallax,
  title: "Atoms/Parallax",
} as Meta;

export const _Parallax: Story<ParallaxProps> = args => {
  return <Parallax {...args} />;
};

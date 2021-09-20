import type { Story, Meta } from "@storybook/react";

import type { BadgeProps } from "./Badge";
import { Badge } from "./Badge";

export default {
  component: Badge,
  title: "Atoms/Badge",
} as Meta;

export const _Badge: Story<BadgeProps> = args => {
  return <Badge {...args} />;
};

_Badge.args = {
  children: "Badge",
};

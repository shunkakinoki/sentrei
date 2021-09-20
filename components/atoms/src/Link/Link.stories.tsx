import type { Story, Meta } from "@storybook/react";

import type { LinkProps } from "./Link";
import { Link, TargetAttribute } from "./Link";

export default {
  component: Link,
  title: "Atoms/Link",
} as Meta;

export const _Link: Story<LinkProps> = args => {
  return <Link {...args} />;
};

_Link.args = {
  to: "https://sentrei.com",
  children: "Sentrei",
  target: TargetAttribute.PARENT,
};

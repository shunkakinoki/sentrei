import type { Story, Meta } from "@storybook/react";

import type { ButtonLinkProps } from "./ButtonLink";
import { ButtonLink } from "./ButtonLink";

export default {
  component: ButtonLink,
  title: "Atoms/ButtonLink",
} as Meta;

export const _ButtonLink: Story<ButtonLinkProps> = args => {
  return <ButtonLink {...args} />;
};

_ButtonLink.args = {
  onClick: (): void => {
    console.log("clicked");
  },
  children: "ButtonLink",
  href: "about",
};

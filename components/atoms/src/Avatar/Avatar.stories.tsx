import type { Story, Meta } from "@storybook/react";

import type { AvatarProps } from "./Avatar";
import { Avatar } from "./Avatar";

export default {
  component: Avatar,
  title: "Atoms/Avatar",
} as Meta;

//TODO: Avatar personname line-height
//TODO: Avatar defult none
export const _Avatar: Story<AvatarProps> = () => {
  return (
    <>
      <Avatar personName="Shun Kakinoki" />
      <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      <Avatar />
    </>
  );
};

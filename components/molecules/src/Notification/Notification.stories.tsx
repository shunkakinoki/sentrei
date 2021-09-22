import type { Story, Meta } from "@storybook/react";
import { RecoilRoot } from "recoil";

import { Notification, ToastPosition } from "./Notification";

export default {
  component: Notification,
  title: "Molecules/Notification",
} as Meta;

export const _Notification: Story = args => {
  return (
    <RecoilRoot>
      <Notification {...args} />{" "}
    </RecoilRoot>
  );
};

_Notification.args = {
  position: ToastPosition.TOP_CENTER,
  isAutoDelete: false,
  toastBgColor: "red",
  toastTextColor: "black",
  description: "This is test",
};

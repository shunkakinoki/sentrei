import type { Story, Meta } from "@storybook/react";

import { Notification, ToastPosition } from "./Notification";

export default {
  component: Notification,
  title: "Molecules/Notification",
} as Meta;

export const _Notification: Story = args => {
  return <Notification {...args} />;
};

_Notification.args = {
  position: ToastPosition.TOP_CENTER,
  isAutoDelete: false,
  toastBgColor: "red",
  toastTextColor: "black",
  description: "This is test",
};

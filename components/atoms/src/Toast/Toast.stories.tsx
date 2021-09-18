import type { Story, Meta } from "@storybook/react";
import { useState } from "react";

import type { ToastProps } from "./Toast";
import { Toast } from "./Toast";

//TODO: test design and fix it
//TODO: add notification organisms with position and animation.

export default {
  component: Toast,
  title: "Atoms/Toast",
} as Meta;

export const _Toast: Story<ToastProps> = args => {
  const [isToastShowing, setIsToastShowing] = useState<boolean>(true);
  const removeToast = () => {
    setIsToastShowing(false);
  };
  return <>{isToastShowing && <Toast {...args} onClick={removeToast} />}</>;
};

_Toast.args = {
  title: "Test",
  description: "Description Description",
  iconImgSrc:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1200px-Infobox_info_icon.svg.png",
};

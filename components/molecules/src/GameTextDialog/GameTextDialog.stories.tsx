import type { Story, Meta } from "@storybook/react";

import { GametextDialog, GameTextDialogProps } from "./GameTextDialog";

export default {
  component: GametextDialog,
  title: "Molecules/GametextDialog",
} as Meta;

export const _GametextDialog: Story<GameTextDialogProps> = args => {
  return <GametextDialog {...args} />;
};

_GametextDialog.args = {
  text: "Test Test Test.",
  imageSrc:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

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
    "https://cdnb.artstation.com/p/assets/images/images/023/541/917/large/aparna-medatwal-5-1.jpg?1579550038",
};

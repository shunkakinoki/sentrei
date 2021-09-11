import type { Story, Meta } from "@storybook/react";

import type { CheckboxProps } from "./Checkbox";
import { Checkbox, CheckboxSize } from "./Checkbox";

export default {
  component: Checkbox,
  title: "Atoms/Checkbox",
} as Meta;

export const _Checkbox: Story<CheckboxProps> = args => {
  return <Checkbox {...args} />;
};

_Checkbox.args = {
  boxSize: CheckboxSize.SMALL,
  children: "Checkbox",
};

_Checkbox.parameters = {
  controls: { hideNoControlsWarning: true },
};

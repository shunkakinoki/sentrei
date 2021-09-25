import type { Story, Meta } from "@storybook/react";
import type { ChangeEvent } from "react";
import { useState } from "react";

import type { CheckboxProps } from "./Checkbox";
import { Checkbox, CheckboxSize } from "./Checkbox";

export default {
  component: Checkbox,
  title: "Atoms/Checkbox",
} as Meta;

export const _Checkbox: Story<CheckboxProps> = args => {
  const [checked, setChecked] = useState<boolean>(false);
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.target.checked);
  };
  console.log(checked);

  return <Checkbox {...args} checked={checked} onChange={onChange} />;
};

_Checkbox.args = {
  boxSize: CheckboxSize.SMALL,
  children: "Checkbox",
};

_Checkbox.parameters = {
  controls: { hideNoControlsWarning: true },
};

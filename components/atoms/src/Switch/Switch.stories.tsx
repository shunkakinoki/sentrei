import type { Story, Meta } from "@storybook/react";
import { useState } from "react";

import type { SwitchProps } from "./Switch";
import { Switch, SwitchSize } from "./Switch";

export default {
  component: Switch,
  title: "Atoms/Switch",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const _Switch: Story<SwitchProps> = args => {
  const [value, setValue] = useState<boolean>(false);
  const onChange = (inputValue: boolean): void => {
    setValue(inputValue);
  };
  console.log(value);

  return <Switch {...args} checked={value} onChange={onChange} />;
};

_Switch.args = {
  switchSize: SwitchSize.LARGE,
  children: "Switch",
};

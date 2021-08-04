import type { Story, Meta } from "@storybook/react";
import { useState } from "react";

import type { SelectProps } from "./Select";
import { Select } from "./Select";

export default {
  component: Select,
  title: "Atoms/Select",
} as Meta;

export type Values = "png" | "jpeg";

export const _Select: Story<SelectProps> = args => {
  const [value, setValue] = useState<string>("png");
  const onChange = (inputValue: string): void => {
    setValue(inputValue);
  };

  return <Select {...args} value={value} onChange={onChange} />;
};

_Select.args = {
  value: "png",
  options: [{ value: "png" }, { value: "jpeg" }],
};

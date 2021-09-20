import type { Story, Meta } from "@storybook/react";

import type { SpinnerProps } from "./Spinner";
import { Spinner, SpinnerSize } from "./Spinner";

export default {
  component: Spinner,
  title: "Atoms/Spinner",
} as Meta;

export const _Spinner: Story<SpinnerProps> = args => {
  return <Spinner {...args} />;
};

_Spinner.args = {
  size: SpinnerSize.XL,
};

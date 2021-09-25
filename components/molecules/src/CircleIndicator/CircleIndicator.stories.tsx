import type { Story, Meta } from "@storybook/react";

import type { CircleIndicatorProps } from "./CircleIndicator";
import { CircleIndicator } from "./CircleIndicator";

export default {
  component: CircleIndicator,
  title: "Atoms/CircleIndicator",
} as Meta;

export const _CircleIndicator: Story<CircleIndicatorProps> = args => {
  return <CircleIndicator {...args} />;
};

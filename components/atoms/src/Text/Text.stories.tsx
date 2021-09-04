import type { Story, Meta } from "@storybook/react";

import type { TextProps } from "./Text";
import { Text } from "./Text";

export default {
  component: Text,
  title: "Atom/Text",
} as Meta;

export const _Text: Story<TextProps> = args => {
  return <Text {...args} />;
};

_Text.args = {
  children: "Text",
};

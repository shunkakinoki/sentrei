import type { Story, Meta } from "@storybook/react";

import type { TextProps } from "./Text";
import {
  Text,
  FontSize,
  FontWeight,
  FontFamily,
  TextTransform,
  TextDecoration,
  TextAlign,
} from "./Text";

export default {
  component: Text,
  title: "Atom/Text",
} as Meta;

export const _Text: Story<TextProps> = args => {
  return <Text {...args} />;
};

_Text.args = {
  children: "Text",
  size: FontSize.XXXXLARGE,
  weight: FontWeight.THIN,
  family: FontFamily.SERIF,
  transform: TextTransform.NORMAL_CASE,
  decoration: TextDecoration.NO_UNDERLINE,
  align: TextAlign.CENTER,
};

import type { Story, Meta } from "@storybook/react";

import type { ImageProps } from "./Image";
import { Image } from "./Image";

export default {
  component: Image,
  title: "Atoms/Image",
} as Meta;

export const _Image: Story<ImageProps> = args => {
  return <Image {...args} alt="Image" />;
};

_Image.args = {
  alt: "Image",
  width: 100,
  height: 100,
  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  fallbackSrc: "https://m.media-amazon.com/images/I/416FP6pKJPL._AC_.jpg",
};

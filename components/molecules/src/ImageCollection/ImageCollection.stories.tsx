import type { Story, Meta } from "@storybook/react";

import { ImageCollection } from "./ImageCollection";
import type { ImageCollectionProps } from "./ImageCollection";

export default {
  component: ImageCollection,
  title: "Molecules/ImageCollection",
} as Meta;

export const _ImageCollection: Story<ImageCollectionProps> = args => {
  return <ImageCollection {...args} />;
};

const mockImage = {
  alt: "Image",
  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

_ImageCollection.args = {
  imageCollection: [
    mockImage,
    mockImage,
    mockImage,
    mockImage,
    mockImage,
    mockImage,
    mockImage,
    mockImage,
    mockImage,
    mockImage,
  ],
};

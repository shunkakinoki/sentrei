import type { Story, Meta } from "@storybook/react";

import { Footer } from "./Footer";

export default {
  component: Footer,
  title: "Atoms/Footer",
} as Meta;

export type Values = "png" | "jpeg";

export const _Footer: Story = () => {
  return <Footer />;
};

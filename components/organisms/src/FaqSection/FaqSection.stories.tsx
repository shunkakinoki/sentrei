import type { Story, Meta } from "@storybook/react";

import { FaqSection } from "./FaqSection";

export default {
  component: FaqSection,
  title: "Organisms/FaqSection",
} as Meta;

export const _FaqSection: Story = args => {
  return <FaqSection {...args} />;
};

_FaqSection.args = {};

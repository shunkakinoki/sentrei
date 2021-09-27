import type { Story, Meta } from "@storybook/react";

import type { BidHistoryItemProps } from "./BidHistoryItem";
import { BidHistoryItem } from "./BidHistoryItem";

export default {
  component: BidHistoryItem,
  title: "Molecules/BidHistoryItem",
} as Meta;

export const _BidHistoryItem: Story<BidHistoryItemProps> = args => {
  return <BidHistoryItem {...args} />;
};

_BidHistoryItem.args = {
  className: "w-1/4",
  link: "#",
  hash: "hash hash hash hash",
  date: "date",
  amount: "100",
};

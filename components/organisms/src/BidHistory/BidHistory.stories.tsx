import type { BidHistoryItemProps } from "@sentrei/molecules";
import type { Story, Meta } from "@storybook/react";

import { BidHistory } from "./BidHistory";
import type { BidHistoryProps } from "./BidHistory";

export default {
  component: BidHistory,
  title: "Organisms/BidHistory",
} as Meta;

export const _BidHistory: Story<BidHistoryProps> = args => {
  return <BidHistory {...args} />;
};

const mockData: BidHistoryItemProps = {
  link: "#",
  hash: "hash hash hash hash",
  date: "date",
  amount: "100",
};

_BidHistory.args = {
  className: "w-1/2",
  imageSrc:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  title: "Mosh DAO",
  bidHistoryItems: [
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
    mockData,
  ],
};

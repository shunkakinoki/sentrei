import { Text, FontSize, FontWeight } from "@sentrei/atoms";
import clsx from "clsx";
import type { FC } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export interface BidHistoryItemProps {
  className?: string;
  link?: string;
  hash?: string;
  date?: string;
  amount?: string | number;
}

export const BidHistoryItem: FC<BidHistoryItemProps> = props => {
  const { className, link, hash, date, amount } = props;

  return (
    <div
      className={clsx(
        "flex justify-between items-center p-2 border-b-2",
        className,
      )}
    >
      <div className="flex flex-col w-1/3">
        <Text
          weight={FontWeight.BOLD}
          size={FontSize.LARGE}
          className="truncate"
        >
          {hash}
        </Text>
        <Text weight={FontWeight.NORMAL} className="text-gray-500">
          {date}
        </Text>
      </div>
      <div className="flex items-center">
        <Text weight={FontWeight.NORMAL} size={FontSize.XXLARGE}>
          {amount}
        </Text>
        <a href={link} className="ml-2">
          <BsBoxArrowUpRight />
        </a>
      </div>
    </div>
  );
};

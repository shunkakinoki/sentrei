import { Text, FontSize, Image } from "@sentrei/atoms";
import { BidHistoryItem } from "@sentrei/molecules";
import type { BidHistoryItemProps } from "@sentrei/molecules";
import clsx from "clsx";
import type { FC } from "react";

export interface BidHistoryProps {
  className?: string;
  bidHistoryItems: BidHistoryItemProps[];
  imageSrc?: string;
  title?: string;
}

export const BidHistory: FC<BidHistoryProps> = props => {
  const { className, bidHistoryItems, imageSrc, title } = props;
  return (
    <div className={clsx("p-2", className)}>
      <div className="flex items-center">
        <Image
          src={imageSrc}
          alt={title}
          width="150"
          height="150"
          className="rounded"
        />
        <Text size={FontSize.XXXLARGE} className="ml-4">
          {title}
        </Text>
      </div>
      <div className="mt-8">
        {bidHistoryItems.map((item: BidHistoryItemProps) => {
          return <BidHistoryItem key={item.hash} {...item} />;
        })}
      </div>
    </div>
  );
};

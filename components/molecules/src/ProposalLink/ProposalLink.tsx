import { Text, Badge, FontFamily, FontWeight, FontSize } from "@sentrei/atoms";
import clsx from "clsx";
import type { FC } from "react";

export interface ProposalLinkProps {
  className?: string;
  link?: string;
  proposalStatus?: string;
  proposalText?: string;
  badgeBGColor?: string;
}

export const ProposalLink: FC<ProposalLinkProps> = props => {
  const {
    className,
    link = "#",
    proposalStatus,
    proposalText,
    badgeBGColor = "bg-black",
  } = props;

  return (
    <a
      href={link}
      className={clsx(
        "flex justify-between items-center p-4 bg-gray-700 rounded",
        className,
      )}
    >
      <Text className="text-white" family={FontFamily.MONO}>
        {proposalText}
      </Text>
      <Badge className={clsx(badgeBGColor)}>
        <Text
          className="text-white"
          weight={FontWeight.BOLD}
          size={FontSize.XSMALL}
        >
          {proposalStatus}
        </Text>
      </Badge>
    </a>
  );
};

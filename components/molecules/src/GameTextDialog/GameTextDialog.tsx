import { Text, Image } from "@sentrei/atoms";
import clsx from "clsx";
import { FontSize } from "components/atoms/src/Text/Text";

import type { FC } from "react";

export interface GameTextDialogProps {
  text: string;
  imageSrc?: string;
  className?: string;
}

export const GametextDialog: FC<GameTextDialogProps> = props => {
  const { text, imageSrc, className } = props;

  return (
    <div
      className={clsx(
        "flex items-center h-[200px] rounded-3xl border",
        className,
      )}
    >
      <Image src={imageSrc} className="h-full rounded-3xl" />
      <Text
        family="font-Atari" //TODO: set TailWind config and use Atari font.
        size={FontSize.XXXLARGE}
        className="p-10 w-full"
      >
        {text}
      </Text>
    </div>
  );
};

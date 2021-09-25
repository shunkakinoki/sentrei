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
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={clsx(
        "flex items-center h-[200px] rounded-3xl border bg-gray-900	bg-opacity-50",
        className,
      )}
    >
      <Image src={imageSrc} className="h-full rounded-3xl" />
      <Text
        size={FontSize.XLARGE}
        family="font-Atari"
        className={clsx("py-5 px-10 w-full leading-8 text-white")}
      >
        {text}
      </Text>
    </div>
  );
};

import clsx from "clsx";
import type { FC, ReactNode } from "react";

export const TextColor = {};

export interface TextProps {
  className?: string;
  children?: ReactNode;
}

export const Text: FC<TextProps> = props => {
  const { className, children } = props;

  return (
    <p className={clsx("text-base leading-6 text-black", className)}>
      {children}
    </p>
  );
};

Text.displayName = "Text";

export default Text;

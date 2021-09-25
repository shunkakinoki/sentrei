import clsx from "clsx";
import type { FC, ReactNode } from "react";

export const FontSize = {
  XSMALL: "text-xs",
  SMALL: "text-sm",
  MEDIUM: "text-base",
  LARGE: "text-lg",
  XLARGE: "text-xl",
  XXLARGE: "text-2xl",
  XXXLARGE: "text-3xl",
  XXXXLARGE: "text-4xl",
  XXXXXLARGE: "text-5xl",
};

export const FontWeight = {
  THIN: "font-thin",
  EXTRALIGHT: "font-extralight",
  LIGHT: "font-light",
  NORMAL: "font-normal",
  MEDIUM: "font-medium",
  SEMIBOLD: "font-semibold",
  BOLD: "font-bold",
  EXTRABOLD: "font-extrabold",
  BLACK: "font-black",
};

export const FontFamily = {
  SANS: "font-sans",
  SERIF: "font-serif",
  MONO: "font-mono",
  ATARI: "font-Atari",
};

export const TextTransform = {
  UPPERCASE: "uppercase",
  LOWERCASE: "lowercase",
  CAPITALIZE: "capitalize",
  NORMAL_CASE: "normal-case",
};

export const TextDecoration = {
  UNDERLINE: "underline",
  LINE_THROUGH: "line-through",
  NO_UNDERLINE: "no-underline",
};

export const TextAlign = {
  LEFT: "text-left",
  CENTER: "text-center",
  RIGHT: "text-right",
  JUSTIFY: "text-justify",
};

export interface TextProps {
  className?: string;
  size?: string;
  weight?: string;
  family?: string;
  transform?: string;
  decoration?: string;
  align?: string;
  children?: ReactNode;
}

export const Text: FC<TextProps> = props => {
  const {
    className,
    size = FontSize.MEDIUM,
    weight = FontWeight.NORMAL,
    family,
    transform = TextTransform.NORMAL_CASE,
    decoration = TextDecoration.NO_UNDERLINE,
    align,
    children,
  } = props;

  return (
    <p
      className={clsx(
        "leading-6",
        className,
        size,
        weight,
        family,
        transform,
        decoration,
        align,
      )}
    >
      {children}
    </p>
  );
};

Text.displayName = "Text";

export default Text;

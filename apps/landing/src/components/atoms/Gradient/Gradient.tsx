import type { TextProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import type { FC } from "react";

export type GradientProps = Omit<TextProps, "bgClip" | "children"> & {
  readonly bgGradient: Pick<TextProps, "bgGradient">;
  readonly children: string;
  readonly range: [number, number];
};

const split = (index: [number, number]) => (x: string) => [
  x.slice(0, index[0]),
  x.slice(index[0], index[1]),
  x.slice(index[1]),
];

export const Gradient: FC<GradientProps> = ({ children, range, ...rest }) => {
  const [first, second, third] = split(range)(children);
  const { bgGradient, color, ...other } = rest;

  return (
    <Text color={color} {...other}>
      {first}
      <Text as="span" bgClip="text" bgGradient={bgGradient} {...other}>
        {second}
      </Text>
      {third}
    </Text>
  );
};

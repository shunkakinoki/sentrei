import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Button as ChakraButton, LinkOverlay } from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";

export type ButtonProps = ChakraButtonProps & {
  readonly href?: string;
};

export const Button: FC<ButtonProps> = ({ href, ...rest }) => {
  const buttonProps: ChakraButtonProps = {
    colorScheme: "cyan",
    height: 12,
    width: "full",
  };

  if (href) {
    <NextLink passHref href={href}>
      <LinkOverlay>
        <ChakraButton {...buttonProps} {...rest} />;
      </LinkOverlay>
    </NextLink>;
  }

  return <ChakraButton {...buttonProps} {...rest} />;
};

import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import {
  Button as ChakraButton,
  LinkOverlay,
  VisuallyHidden,
} from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";

export type ButtonProps = ChakraButtonProps & {
  readonly href?: string;
  readonly label?: string;
};

export const Button: FC<ButtonProps> = ({ href, label, ...rest }) => {
  const buttonProps: ChakraButtonProps = {};

  if (href) {
    <NextLink passHref href={href}>
      <LinkOverlay>
        <ChakraButton {...buttonProps} {...rest} />;
        {label && <VisuallyHidden>{label}</VisuallyHidden>}
      </LinkOverlay>
    </NextLink>;
  }

  return <ChakraButton {...buttonProps} {...rest} />;
};

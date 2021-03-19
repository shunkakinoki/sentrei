import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";

import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";

import type { FC } from "react";

export type LinkProps = ChakraLinkProps & Pick<NextLinkProps, "href">;

export const Link: FC<LinkProps> = ({ href, children, ...rest }) => {
  return (
    <NextLink passHref href={href}>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
};

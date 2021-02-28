import type { IconButtonProps } from "@chakra-ui/react";
import { IconButton, LinkBox, VisuallyHidden } from "@chakra-ui/react";

import NextLink from "next/link";
import type { FC } from "react";
import { RiBlazeFill } from "react-icons/ri";

export type LogoProps = Omit<IconButtonProps, "aria-label">;

export const Logo: FC<LogoProps> = ({ ...rest }) => {
  return (
    <LinkBox as="button">
      <VisuallyHidden>Sentrei Logo</VisuallyHidden>
      <NextLink passHref href="/">
        <IconButton
          as="a"
          aria-label="Logo"
          colorScheme="purple"
          fontSize="48px"
          variant="ghost"
          size="lg"
          icon={<RiBlazeFill />}
          {...rest}
        />
      </NextLink>
    </LinkBox>
  );
};

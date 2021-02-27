import type { IconButtonProps } from "@chakra-ui/react";
import { IconButton, LinkOverlay } from "@chakra-ui/react";

import NextLink from "next/link";
import type { FC } from "react";
import { RiBlazeFill } from "react-icons/ri";

export type LogoProps = Omit<IconButtonProps, "aria-label">;

export const Logo: FC<LogoProps> = ({ ...rest }) => {
  return (
    <NextLink passHref href="/">
      <LinkOverlay>
        <IconButton
          aria-label="Logo"
          colorScheme="purple"
          icon={<RiBlazeFill />}
          {...rest}
        />
      </LinkOverlay>
    </NextLink>
  );
};

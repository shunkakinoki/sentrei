import {
  Badge,
  Box,
  HStack,
  useColorModeValue,
  LinkBox,
} from "@chakra-ui/react";

import type { FC } from "react";
import { HiArrowRight } from "react-icons/hi";

import { Link } from "@sentrei/components/atoms/Link";
import type { LinkProps } from "@sentrei/components/atoms/Link";

export type AnnounceProps = LinkProps & {
  prefix: string;
  title: string;
};

export const Announce: FC<AnnounceProps> = ({
  href,
  isExternal,
  prefix,
  title,
  ...rest
}) => (
  <LinkBox as="button">
    <Link href={href} isExternal={isExternal} {...rest}>
      <HStack
        as="a"
        className="group"
        px="2"
        py="1"
        bg={useColorModeValue("gray.200", "gray.700")}
        rounded="full"
        fontSize="sm"
        display="inline-flex"
      >
        <Badge
          px="2"
          variant="solid"
          colorScheme="teal"
          rounded="full"
          textTransform="capitalize"
        >
          {prefix}
        </Badge>
        <Box fontWeight="medium">{title}</Box>
        <Box
          aria-hidden
          transition="0.3s all"
          _groupHover={{ transform: "translateX(3px)" }}
          as={HiArrowRight}
          display="inline-block"
        />
      </HStack>
    </Link>
  </LinkBox>
);

import {
  Badge,
  Box,
  HStack,
  useColorModeValue as mode,
  LinkOverlay,
} from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";
import { HiArrowRight } from "react-icons/hi";

export type AnnounceProps = {
  href: string;
  prefix: string;
  title: string;
};

export const Announce: FC<AnnounceProps> = ({ href, prefix, title }) => (
  <NextLink passHref href={href}>
    <LinkOverlay>
      <HStack
        className="group"
        px="2"
        py="1"
        bg={mode("gray.200", "gray.700")}
        rounded="full"
        fontSize="sm"
        mb="8"
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
    </LinkOverlay>
  </NextLink>
);

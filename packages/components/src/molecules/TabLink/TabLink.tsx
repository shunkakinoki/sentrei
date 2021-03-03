import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import type { FC } from "react";

export type TabLinkProps = HTMLChakraProps<"a">;

export const TabLink: FC<TabLinkProps> = ({ ...props }) => (
  <chakra.a
    {...props}
    fontWeight="semibold"
    px={[2, 3, 4]}
    py={[2, 3]}
    color={useColorModeValue("gray.400", "gray.600")}
    borderBottom="2px solid transparent"
    transition="all 0.2s"
    _hover={{
      borderColor: useColorModeValue("gray.500", "gray.100"),
      color: useColorModeValue("gray.600", "gray.200"),
    }}
    _activeLink={{
      borderColor: "currentColor",
      color: useColorModeValue("purple.600", "purple.300"),
    }}
  />
);

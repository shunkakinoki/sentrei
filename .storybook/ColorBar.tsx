import {
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorBar = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Flex justify="flex-end" mb={4} mr={2}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label="Switch color mode"
        variant="ghost"
        color="current"
        marginLeft="3"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  );
};

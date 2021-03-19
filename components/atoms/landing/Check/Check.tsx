import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import type { FC } from "react";
import { HiCheckCircle } from "react-icons/hi";

export type CheckProps = {
  children: string;
};

export const Check: FC<CheckProps> = ({ children }) => {
  return (
    <HStack>
      <Box as={HiCheckCircle} color="green.400" fontSize="xl" />
      <Text
        color={useColorModeValue(
          { base: "gray.600", md: "gray.700" },
          { base: "gray.50", md: "gray.100" },
        )}
        fontSize="sm"
        fontWeight="semibold"
      >
        {children}
      </Text>
    </HStack>
  );
};

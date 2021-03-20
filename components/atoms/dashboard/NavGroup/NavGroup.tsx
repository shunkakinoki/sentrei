import { Box, Stack, Text } from "@chakra-ui/react";
import type { FC } from "react";
import * as React from "react";

export type NavGroupProps = {
  label: string;
  children: React.ReactNode;
};

export const NavGroup: FC<NavGroupProps> = ({ label, children }) => {
  return (
    <Box>
      <Text
        px="3"
        fontSize="xs"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="widest"
        color="gray.500"
        mb="3"
      >
        {label}
      </Text>
      <Stack spacing="1">{children}</Stack>
    </Box>
  );
};

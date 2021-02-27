import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import type { ReactElement } from "react";

export interface FeatureProps {
  title: string;
  children: string;
  icon: ReactElement;
}

export const Feature = (props: FeatureProps) => {
  const { title, children, icon } = props;
  return (
    <Stack spacing="6" direction={{ base: "column", md: "row" }}>
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={useColorModeValue("gray.600", "gray.400")}>{children}</Box>
      </Stack>
    </Stack>
  );
};

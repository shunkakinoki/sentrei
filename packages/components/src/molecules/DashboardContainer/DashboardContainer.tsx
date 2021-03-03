import type { BoxProps } from "@chakra-ui/react";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import type { FC } from "react";

export type DashboardContainerProps = BoxProps;

export const DashboardContainer: FC<DashboardContainerProps> = ({
  children,
  ...rest
}) => (
  <Box as="main" py="24" flex="1">
    <Container maxW="7xl">
      <Box
        bg={useColorModeValue("white", "gray.700")}
        p="6"
        rounded="lg"
        shadow="base"
        {...rest}
      >
        <Box
          border="3px dashed currentColor"
          color={useColorModeValue("gray.200", "gray.600")}
          h="96"
          rounded="lg"
        >
          {children}
        </Box>
      </Box>
    </Container>
  </Box>
);

import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import type { FC } from "react";

export type SectionContainerProps = BoxProps;

export const SectionContainer: FC<SectionContainerProps> = ({
  children,
  ...rest
}) => (
  <Box {...rest}>
    <Box as="section" py="20">
      {children}
    </Box>
  </Box>
);

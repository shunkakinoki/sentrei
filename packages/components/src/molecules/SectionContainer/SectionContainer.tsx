import { Box } from "@chakra-ui/react";
import type { FC } from "react";

export const SectionContainer: FC = ({ children }) => (
  <Box>
    <Box as="section" py="12">
      {children}
    </Box>
  </Box>
);

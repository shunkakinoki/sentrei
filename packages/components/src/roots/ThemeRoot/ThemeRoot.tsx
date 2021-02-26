import { ChakraProvider } from "@chakra-ui/react";

import type { FC } from "react";

import { theme } from "@sentrei/components/theme";

export const ThemeRoot: FC = ({ children }) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

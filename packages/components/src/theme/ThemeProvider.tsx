import { ChakraProvider } from "@chakra-ui/react";

import type { FC } from "react";

export const ThemeProvider: FC = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

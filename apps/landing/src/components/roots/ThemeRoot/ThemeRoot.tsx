import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "@sentrei/themes";
import type { FC } from "react";

export const ThemeRoot: FC = ({ children }) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

import type { ChakraProviderProps } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import type { FC } from "react";

import { theme } from "./theme";

export const ThemeProvider: FC<ChakraProviderProps> = ({
  children,
  ...rest
}) => (
  <ChakraProvider theme={theme} {...rest}>
    {children}
  </ChakraProvider>
);

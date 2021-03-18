import type { ChakraProviderProps } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "@sentrei/themes";
import type { FC } from "react";

export const ThemeProvider: FC<ChakraProviderProps> = ({
  children,
  ...rest
}) => (
  <ChakraProvider theme={theme} {...rest}>
    {children}
  </ChakraProvider>
);

import type { ChakraProviderProps } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@sentrei/themes";
import * as React from "react";
import type { FC } from "react";

export const ChakraRoot: FC<ChakraProviderProps> = ({ children, ...rest }) => (
  <ChakraProvider theme={theme} {...rest}>
    {children}
  </ChakraProvider>
);

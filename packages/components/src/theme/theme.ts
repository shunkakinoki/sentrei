import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

//@ts-expect-error Need `@chakra/cli` to work before removing comment
export const theme = extendTheme({ config });

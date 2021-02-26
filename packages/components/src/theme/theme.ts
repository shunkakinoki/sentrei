import { extendTheme } from "@chakra-ui/react";
import type { ColorModeOptions } from "@chakra-ui/system";

const config: ColorModeOptions = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const overrides = {
  config,
};

export const theme = extendTheme(overrides);

export type Theme = typeof theme;

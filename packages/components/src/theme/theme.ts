import components from "./components";
import foundations from "./foundations";
import styles from "./styles";
import type { ThemeConfig } from "./theme.types";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = {
  ...foundations,
  components,
  config,
  styles,
};

export type Theme = typeof theme;

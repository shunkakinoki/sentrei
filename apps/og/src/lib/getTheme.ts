import { defaultTheme } from "@sentrei/og/const/colour";
import type { ILayoutConfig } from "@sentrei/og/types";

export const getTheme = (config: ILayoutConfig) => {
  return (config.Theme ?? defaultTheme).toLowerCase();
};

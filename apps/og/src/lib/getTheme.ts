import { defaultTheme } from "@sentrei/og/const/colour";
import type { ILayoutConfig } from "@sentrei/og/types";

export const getTheme = (config: ILayoutConfig): string => {
  return (config.Theme ?? defaultTheme).toLowerCase();
};

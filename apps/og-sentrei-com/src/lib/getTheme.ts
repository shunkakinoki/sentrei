import { defaultTheme } from "@sentrei/og-sentrei-com/const/colour";
import type { ILayoutConfig } from "@sentrei/og-sentrei-com/types";

export const getTheme = (config: ILayoutConfig): string => {
  return (config.Theme ?? defaultTheme).toLowerCase();
};

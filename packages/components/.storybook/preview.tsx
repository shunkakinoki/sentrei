import * as React from "react";
import { ThemeProvider } from "@sentrei/components/theme";

export const parameters = {
  controls: { expanded: true },
};

export const decorators = [
  (Story: JSX.IntrinsicAttributes): JSX.Element => (
    <ThemeProvider>
      {/*@ts-expect-error */}
      <Story />
    </ThemeProvider>
  ),
];

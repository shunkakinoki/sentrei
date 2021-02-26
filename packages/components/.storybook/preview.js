import * as React from "react";
import { ThemeProvider } from "../src/theme";

export const parameters = {
  controls: { expanded: true },
};

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

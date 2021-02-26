import * as React from "react";
import { ThemeProvider } from "../src/theme";

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

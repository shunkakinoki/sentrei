import * as React from "react";
import { ThemeProvider } from "@sentrei/components/theme";

import { LangProvider } from "./LangProvider";

export const parameters = {
  controls: { expanded: true },
};

export const decorators = [
  (Story: JSX.IntrinsicAttributes): JSX.Element => (
    <LangProvider>
      <ThemeProvider>
        {/*@ts-expect-error */}
        <Story />
      </ThemeProvider>
    </LangProvider>
  ),
];

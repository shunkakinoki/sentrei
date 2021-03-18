import * as React from "react";
import { ThemeProvider } from "../apps/landing/src/components/theme";

import { ColorBar } from "./ColorBar";
import { LangProvider } from "./LangProvider";

export const parameters = {
  controls: { expanded: true },
};

export const decorators = [
  (Story: JSX.IntrinsicAttributes): JSX.Element => (
    <LangProvider>
      <ThemeProvider>
        <ColorBar></ColorBar>
        {/*@ts-expect-error */}
        <Story />
      </ThemeProvider>
    </LangProvider>
  ),
];

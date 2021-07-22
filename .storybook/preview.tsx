import { LangProvider } from "./LangProvider";
import * as React from "react";

export const parameters = {
  controls: { expanded: true },
};

export const decorators = [
  (Story: JSX.IntrinsicAttributes): JSX.Element => (
    <LangProvider>
      {/*@ts-expect-error */}
      <Story />
    </LangProvider>
  ),
];

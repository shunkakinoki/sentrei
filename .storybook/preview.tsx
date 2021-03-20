import { ChakraRoot } from "@sentrei/roots/base/ChakraRoot";
import { ColorBar } from "./ColorBar";
import { LangProvider } from "./LangProvider";
import * as React from "react";

export const parameters = {
  controls: { expanded: true },
};

export const decorators = [
  (Story: JSX.IntrinsicAttributes): JSX.Element => (
    <LangProvider>
      <ChakraRoot>
        <ColorBar></ColorBar>
        {/*@ts-expect-error */}
        <Story />
      </ChakraRoot>
    </LangProvider>
  ),
];

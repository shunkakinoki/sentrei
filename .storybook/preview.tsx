import * as React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "tailwindcss/tailwind.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  storySort: {
    method: "alphabetical",
  },
  darkMode: {
    classTarget: "html",
    darkClass: "dark",
    lightClass: "light",
    stylePreview: true,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  (Story: JSX.IntrinsicAttributes): JSX.Element => (
    <RecoilRoot>
      <ThemeProvider attribute="class" defaultTheme="system">
        {/*@ts-expect-error */}
        <Story />
      </ThemeProvider>
    </RecoilRoot>
  ),
];

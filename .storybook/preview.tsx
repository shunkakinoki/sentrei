import * as React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "tailwindcss/tailwind.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";
import { RouterContext } from "next/dist/shared/lib/router-context";
import * as NextImage from "next/image";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  storySort: {
    method: "alphabetical",
  },
  nextRouter: {
    Provider: RouterContext.Provider,
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

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: props => <img {...props} />,
});

// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: props => (
//     <OriginalNextImage
//       loader={({ src }) => src}
//       {...props}
//       unoptimized
//       placeholder="empty"
//     />
//   ),
// });

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

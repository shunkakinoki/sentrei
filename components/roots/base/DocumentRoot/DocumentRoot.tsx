import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "@sentrei/themes";
import Doc, { Head, Html, Main, NextScript } from "next/document";

import * as React from "react";

export class DocumentRoot extends Doc {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </Html>
    );
  }
}

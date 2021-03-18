import { ColorModeScript } from "@chakra-ui/react";
import Doc, { Head, Html, Main, NextScript } from "next/document";

import { theme } from "@/components/theme";

export default class Document extends Doc {
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

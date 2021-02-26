import { ColorModeScript } from "@chakra-ui/react";
import Doc, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends Doc {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <ColorModeScript />
        <Main />
        <NextScript />
      </Html>
    );
  }
}

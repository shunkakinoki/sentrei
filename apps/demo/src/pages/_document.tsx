import Doc, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends Doc {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <Main />
        <NextScript />
      </Html>
    );
  }
}

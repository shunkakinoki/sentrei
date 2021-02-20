import Doc, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends Doc {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className="text-white bg-white dark:bg-black dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import Document, { Html, Head, Main, NextScript } from "next/document";

export class DocumentRoot extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className="text-white dark:text-black bg-white dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

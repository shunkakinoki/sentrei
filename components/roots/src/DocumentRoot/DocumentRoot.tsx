// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

import { ReactElement } from "react";

export class DocumentRoot extends Document {
  render(): ReactElement {
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

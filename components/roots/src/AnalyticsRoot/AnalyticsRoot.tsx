import { renderSnippet } from "@sentrei/segment";
import Script from "next/script";
import type { VFC } from "react";

export const AnalyticsRoot: VFC = () => {
  return (
    <Script
      dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      strategy="lazyOnload"
    />
  );
};

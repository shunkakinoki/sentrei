import { renderSnippet } from "@sentrei/segment";
import Script from "next/script";

export const AnalyticsRoot = () => {
  return (
    <Script
      dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      strategy="lazyOnload"
    />
  );
};

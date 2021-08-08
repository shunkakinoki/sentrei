import { renderSnippet } from "@sentrei/segment";
import Script from "next/script";
import type { FC } from "react";

export const AnalyticsRoot: FC = () => {
  return (
    <Script
      dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      strategy="lazyOnload"
    />
  );
};

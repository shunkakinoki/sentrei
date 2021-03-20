import type { NextSeoProps } from "next-seo";
import { DefaultSeo } from "next-seo";
import type { VFC } from "react";

import * as React from "react";

export const DEFAULT_SEO: NextSeoProps = {
  title: "Sentrei",
  description: "The edge serverless backend.",
  canonical: "https://sentrei.com",
  twitter: {
    cardType: "summary_large_image",
    site: "@SentreiHQ",
    handle: "@SentreiHQ",
  },
  openGraph: {
    type: "website",
    description: "The edge serverless backend.",
  },
};

export const SeoRoot: VFC = () => <DefaultSeo {...DEFAULT_SEO} />;

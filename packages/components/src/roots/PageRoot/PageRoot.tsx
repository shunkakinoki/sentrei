import type { NextSeoProps } from "next-seo";
import { DefaultSeo } from "next-seo";
import type { FC } from "react";

import { AppBar } from "@sentrei/components/organisms/AppBar";
import { Footer } from "@sentrei/components/organisms/Footer";
import { Header } from "@sentrei/components/organisms/Header";

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

export type PageRootProps = {
  type: "dashboard" | "landing";
};

export const PageRoot: FC<PageRootProps> = ({ type, children }) => (
  <>
    <DefaultSeo {...DEFAULT_SEO} />
    {type === "dashboard" && <AppBar />}
    {type === "landing" && <Header />}
    {children}
    <Footer />
  </>
);

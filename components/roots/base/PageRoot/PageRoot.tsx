import { AppBar } from "@sentrei/organisms/landing/AppBar";
import { Footer } from "@sentrei/organisms/landing/Footer";
import { Header } from "@sentrei/organisms/landing/Header";
import type { NextSeoProps } from "next-seo";
import { DefaultSeo } from "next-seo";
import type { FC } from "react";

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

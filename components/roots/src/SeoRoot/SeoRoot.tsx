import type { NextSeoProps } from "next-seo";
import { DefaultSeo, NextSeo } from "next-seo";
import Head from "next/head";
import type { FC } from "react";

export type SeoRootProps = NextSeoProps & {
  title?: string;
  subTitle?: string;
  description?: string;
  url?: string;
  twitter?: string;
};

export const SeoRoot: FC<SeoRootProps> = ({
  title = "Sentrei",
  subTitle = "All+in+one+edge+serverless+backend",
  description = "Sentrei",
  url,
  twitter,
  ...props
}) => {
  const image = `https://og.sentrei.com/api/image?fileType=png&layoutName=Sentrei&Theme=Dark&Title=${title}&Sub+Title=${subTitle.replace(
    / /g,
    "+",
  )}`;

  return (
    <>
      <DefaultSeo
        title={title}
        description={description}
        titleTemplate={`%s | ${title}`}
        openGraph={{
          type: "website",
          url: url,
          site_name: title,
          images: [{ url: image }],
        }}
        twitter={{
          handle: twitter,
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <NextSeo
        openGraph={{
          images: [{ url: image }],
        }}
        {...props}
      />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </>
  );
};

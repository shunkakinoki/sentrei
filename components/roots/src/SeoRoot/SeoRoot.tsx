import type { NextSeoProps } from "next-seo";
import { DefaultSeo, NextSeo } from "next-seo";
import Head from "next/head";
import type { FC } from "react";

export type SeoRootProps = NextSeoProps & {
  title?: string;
  subTitle?: string;
  description?: string;
};

export const SeoRoot: FC<SeoRootProps> = ({
  title = "Sentrei",
  subTitle = "All+in+one+edge+serverless+backend",
  description = "Sentrei",
  ...props
}) => {
  const image = `https://og.sentrei.com/api/image?fileType=png&layoutName=Sentrei&Theme=Dark&Title=${title}&Sub+Title=${subTitle}`;

  return (
    <>
      <DefaultSeo
        title="Sentrei"
        description="Sentrei is a startup based in San Francisco."
        titleTemplate="%s | Sentrei"
        openGraph={{
          type: "website",
          url: "https://sentrei.com",
          site_name: "Sentrei",
          images: [{ url: image }],
        }}
        twitter={{
          handle: "@SentreiHQ",
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
      </Head>
    </>
  );
};

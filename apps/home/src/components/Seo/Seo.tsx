import { DefaultSeo as Default } from "next-seo";
import Head from "next/head";
import type { FC } from "react";

export const Seo: FC = () => {
  return (
    <>
      <Default
        noindex={false}
        nofollow={false}
        title="Sentrei"
        canonical="https://www.metabio.wtf"
        description="Sentrei - Connect. Discover Earn."
        openGraph={{
          locale: "en_US",
          site_name: "sentrei.com",
          type: "website",
          url: "https://www.sentrei.com",
          images: [{ url: "https://www.sentrei.com/ogp.png" }],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@metabio_",
          site: "@metabio_",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </>
  );
};

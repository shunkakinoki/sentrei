import type { DefaultSeoProps } from "next-seo";
import { DefaultSeo } from "next-seo";
import type { FC } from "react";

export const SeoRoot: FC<DefaultSeoProps> = ({ ...props }) => {
  return (
    <DefaultSeo
      title="Sentrei"
      description="Sentrei is a startup based in San Francisco."
      titleTemplate="%s | Sentrei"
      twitter={{
        handle: "@SentreiHQ",
        site: "@site",
        cardType: "summary_large_image",
      }}
      {...props}
    />
  );
};

import type { DefaultSeoProps } from "next-seo";
import { DefaultSeo } from "next-seo";

export const SeoRoot = ({ ...props }: DefaultSeoProps): JSX.Element => {
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

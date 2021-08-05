import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import type { FC } from "react";
import { RecoilRoot } from "recoil";

import { SeoRoot, AnalyticsRoot } from "@sentrei/roots";

export const AppRoot: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <AnalyticsRoot />
      <SeoRoot />
      <RecoilRoot>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

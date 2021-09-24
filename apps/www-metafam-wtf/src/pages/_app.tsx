import "tailwindcss/tailwind.css";
import { SeoRoot, AnalyticsRoot } from "@sentrei/roots";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import type { FC } from "react";
import { RecoilRoot } from "recoil";

const AppRoot: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <AnalyticsRoot />
      <SeoRoot
        title="Metafam"
        subTitle="Metafam"
        description="Metafam"
        url="https://metafam.wtf"
        twitter="@metafam"
      />
      <RecoilRoot>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default AppRoot;

import "tailwindcss/tailwind.css";
import "@sentrei/www-mosh-lol/styles/index.css";
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
        title="Mosh DAO"
        subTitle="Where creators get rewarded"
        description="Mosh DAO"
        url="https://mosh.lol"
        twitter="@MoshDAO"
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

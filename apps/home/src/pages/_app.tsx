import "tailwindcss/tailwind.css";
import "@sentrei/home/styles/index.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import type { FC } from "react";

import { Seo } from "@sentrei/home/components/Seo";

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Seo />
      <ThemeProvider attribute="class" defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default CustomApp;

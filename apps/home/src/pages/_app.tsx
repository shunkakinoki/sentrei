import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import "tailwindcss/tailwind.css";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default CustomApp;

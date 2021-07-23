import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export const AppRoot = ({ Component, pageProps }: AppProps): JSX.Element => {
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

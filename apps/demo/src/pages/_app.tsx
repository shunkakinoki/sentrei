import "@sentrei/demo/styles/index.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import type { FC } from "react";
import { RecoilRoot } from "recoil";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <ThemeProvider attribute="class" defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  </RecoilRoot>
);

export default App;

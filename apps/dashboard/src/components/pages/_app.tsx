import type { AppProps } from "next/app";
import type { FC } from "react";
import { RecoilRoot } from "recoil";

import { ThemeProvider } from "@/components/theme";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </RecoilRoot>
);

export default App;

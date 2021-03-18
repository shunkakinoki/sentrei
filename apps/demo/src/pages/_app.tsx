import type { AppProps } from "next/app";
import type { FC } from "react";
import { RecoilRoot } from "recoil";

import { ChakraRoot } from "@/components/roots/ChakraRoot";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <ChakraRoot>
      <Component {...pageProps} />
    </ChakraRoot>
  </RecoilRoot>
);

export default App;

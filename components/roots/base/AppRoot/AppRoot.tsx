import { ChakraRoot } from "@sentrei/roots/base/ChakraRoot";
import type { AppProps } from "next/app";
import type { FC } from "react";
import { RecoilRoot } from "recoil";

export const AppRoot: FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <ChakraRoot>
      <Component {...pageProps} />
    </ChakraRoot>
  </RecoilRoot>
);

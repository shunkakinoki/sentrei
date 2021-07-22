import "@sentrei/styles/index.css";
import type { AppProps } from "next/app";
import type { FC } from "react";
import * as React from "react";
import { RecoilRoot } from "recoil";

export const AppRoot: FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default AppRoot;

import { Footer } from "@sentrei/organisms/landing/Footer";
import { Header } from "@sentrei/organisms/landing/Header";
import { SeoRoot } from "@sentrei/roots/base/SeoRoot";
import type { FC } from "react";

import * as React from "react";

export const PageRoot: FC = ({ children }) => (
  <>
    <SeoRoot />
    <Header />
    {children}
    <Footer />
  </>
);

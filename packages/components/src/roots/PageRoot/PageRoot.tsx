import type { FC } from "react";

import { Footer } from "@sentrei/components/organisms/Footer";
import { Header } from "@sentrei/components/organisms/Header";

export const PageRoot: FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

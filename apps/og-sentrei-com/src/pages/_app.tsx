import { AppRoot, SeoRoot } from "@sentrei/roots";

import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import type { FC } from "react";

const App: FC<AppProps> = props => {
  return (
    <>
      <AppRoot {...props} />
      <SeoRoot title="OG" />
    </>
  );
};

export default App;

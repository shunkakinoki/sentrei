import { AppRoot, SeoRoot } from "@sentrei/roots";

import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";

const App = (props: AppProps) => {
  return (
    <>
      <AppRoot {...props} />
      <SeoRoot title="OG" />
    </>
  );
};

export default App;

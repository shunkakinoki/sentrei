import { ButtonSection } from "@sentrei/organisms";
import { AnalyticsRoot } from "@sentrei/roots";
import type { VFC } from "react";

export const ButtonScreen: VFC = () => {
  return (
    <>
      <AnalyticsRoot />
      <div className="p-3 text-sky-300 bg-sky-300 rounded-lg">
        <ButtonSection />
        <ButtonSection />
        <ButtonSection />
      </div>
    </>
  );
};

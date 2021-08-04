import { ButtonGroup } from "@sentrei/molecules";
import type { VFC } from "react";

export const ButtonSection: VFC = () => {
  return (
    <div className="p-3 text-violet-300 bg-violet-300 rounded-xl">
      <ButtonGroup />
      <ButtonGroup />
      <ButtonGroup />
    </div>
  );
};

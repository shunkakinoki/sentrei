import { ButtonGroup } from "@sentrei/molecules";
import type { FC } from "react";

export const ButtonSection: FC = () => {
  return (
    <div className="p-3 text-violet-300 bg-violet-300 rounded-xl">
      <ButtonGroup />
      <ButtonGroup />
      <ButtonGroup />
    </div>
  );
};

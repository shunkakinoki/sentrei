import type { FC, ReactNode } from "react";

export type ButtonCTAProps = {
  children: ReactNode;
};

export const ButtonCTA: FC<ButtonCTAProps> = ({ children }) => {
  return (
    <div className="flex justify-center pt-6">
      <div className="inline-flex space-x-6">{children}</div>
    </div>
  );
};

import type { VFC } from "react";

export interface Props {
  children: string;
}

export const Title: VFC<Props> = ({ children }) => {
  return <h1 className="mt-1 mr-4 w-32 dark:text-white">{children}</h1>;
};
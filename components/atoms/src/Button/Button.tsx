import clsx from "clsx";
import type { MouseEventHandler } from "react";

import styles from "./Button.module.css";

export type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  label: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={clsx(
        "p-3 text-green-800 bg-green-300 rounded-lg",
        styles.root,
      )}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

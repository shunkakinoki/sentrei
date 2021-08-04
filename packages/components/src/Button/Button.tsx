import type { FC } from "react";

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  label: string;
};

export const Button: FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      className="p-3 text-green-800 bg-green-300 rounded-lg"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

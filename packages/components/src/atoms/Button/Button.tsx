import classnames from "classnames";

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: "small" | "medium" | "large";
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  block = false,
  disabled = false,
  loading = false,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={classnames(
        "bg-indigo-900 text-white rounded",
        {
          "bg-opacity-25 hover:cursor-not-allowed": disabled || loading,
          "hover:bg-indigo-600 transition": !disabled && !loading,
          "px-3 py-1": size === "small",
          "px-3 py-2": size === "medium",
          "px-8 py-3": size === "large",
          "w-full": block,
        },
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

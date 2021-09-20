import clsx from "clsx";
import type { FC, ReactNode } from "react";

export interface BadgeProps {
  className?: string;
  children?: ReactNode;
}

export const Badge: FC<BadgeProps> = props => {
  const { className, children } = props;
  return (
    <span
      className={clsx(
        "py-0.5 px-2 text-xs font-bold text-white bg-red-500 rounded",
        className,
      )}
    >
      {children}
    </span>
  );
};

Badge.displayName = "Badge";

export default Badge;

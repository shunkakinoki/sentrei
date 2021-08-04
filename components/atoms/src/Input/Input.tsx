import clsx from "clsx";
import type { FC, InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<Props> = props => {
  const { className, onChange, ...rest } = props;

  return (
    <label>
      <input
        className={clsx(
          "py-1 px-3 w-full h-9 dark:text-white bg-black rounded border focus:border-transparent focus:ring-2 appearance-none focus:outline-none",
          className,
        )}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        onChange={onChange}
        {...rest}
      />
    </label>
  );
};

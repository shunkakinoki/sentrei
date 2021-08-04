import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { forwardRef } from "react";

export interface Option {
  value: string;
  text?: string;
  disabled?: boolean;
}

export interface Props {
  options: Option[];
  className?: string;
  value?: string;
  width?: string;
  name?: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void | undefined;
}

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ className, value, options, name, error, disabled, onChange, ...rest }) => {
    return (
      <Listbox
        refName={name}
        value={value ?? ""}
        disabled={disabled}
        onChange={onChange}
        {...rest}
      >
        <div className="relative w-full">
          <Listbox.Button
            className={clsx(
              error
                ? "border-red-300 hover:border-red-700"
                : "focus:border-blue-300",
              !disabled && "relative hover:border-gray-400 cursor-pointer",
              "py-1 pr-8 pl-3 w-full h-9 dark:text-white bg-transparent rounded border focus:border-transparent focus-visible:ring-2 focus:ring-blue-300 appearance-none focus:outline-none",
              className,
            )}
          >
            {value}
          </Listbox.Button>
          <Listbox.Options className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-56 text-base sm:text-sm bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg focus:outline-none">
            {options.map(option => {
              return (
                <Listbox.Option
                  key={option.value}
                  className={({ active }) => {
                    return clsx(
                      active ? "text-white bg-indigo-600" : "text-gray-900",
                      "relative py-2 pr-9 pl-3 cursor-default select-none",
                    );
                  }}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.text ?? option.value}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </div>
      </Listbox>
    );
  },
);

Select.displayName = "Select";

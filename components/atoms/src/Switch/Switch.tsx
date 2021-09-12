import { Switch as HeadlessSwitch } from "@headlessui/react";
import clsx from "clsx";
import type { FC, ReactNode } from "react";

export const SwitchSize = {
  //Size: [HeadlessSwitch, Span, CheckedTranslate]
  SMALL: ["w-8 h-4", "w-2.5 h-2.5", "translate-x-5"],
  MEDIUM: ["w-11 h-6", "w-4 h-4", "translate-x-6"],
  LARGE: ["w-16 h-10", "w-8 h-8", "translate-x-7"],
};

export interface SwitchProps {
  className?: string;
  disabled?: HTMLInputElement["disabled"];
  checked: boolean;
  id?: string;
  name?: string;
  value?: string | number;
  switchSize?: string[];
  children?: ReactNode;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: boolean) => void;
}

export const Switch: FC<SwitchProps> = props => {
  const {
    className,
    disabled = false,
    checked,
    id,
    name,
    value,
    switchSize = SwitchSize.MEDIUM,
    children,
    onChange,
  } = props;

  return (
    <HeadlessSwitch.Group>
      <div className="flex items-center">
        <HeadlessSwitch.Label className="mr-4">{children}</HeadlessSwitch.Label>
        <HeadlessSwitch
          className={clsx(
            checked ? "bg-blue-600" : "bg-gray-200",
            "inline-flex relative items-center rounded-full focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors focus:outline-none",
            switchSize[0],
            className,
          )}
          checked={checked}
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
        >
          <span
            className={clsx(
              checked ? switchSize[2] : "translate-x-1",
              "inline-block w-4 h-4 bg-white rounded-full transition-transform transform",
              switchSize[1],
            )}
          />
        </HeadlessSwitch>
      </div>
    </HeadlessSwitch.Group>
  );
};

Switch.displayName = "Switch";

export default Switch;

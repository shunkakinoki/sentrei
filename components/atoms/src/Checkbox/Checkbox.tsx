import clsx from "clsx";
import type {
  FC,
  ReactNode,
  InputHTMLAttributes,
  ChangeEventHandler,
} from "react";

export const CheckboxSize = {
  SMALL: "form-checkbox h-4 w-4",
  MEDIUM: "form-checkbox h-6 w-6",
  LARGE: "form-checkbox h-8 w-8",
};

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: HTMLInputElement["disabled"];
  invalid?: boolean;
  required?: HTMLInputElement["required"];
  readOnly?: HTMLInputElement["readOnly"];
  defaultChecked?: boolean;
  checked?: boolean;
  id?: string;
  name?: string;
  value?: string | number;
  boxSize?: string;
  children?: ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox: FC<CheckboxProps> = props => {
  const {
    className,
    disabled = false,
    required = false,
    readOnly = false,
    defaultChecked = false,
    checked,
    id,
    name,
    value,
    boxSize = CheckboxSize.MEDIUM,
    children,
    onChange,
  } = props;

  return (
    <label
      className={clsx(
        "inline-flex items-center align-top",
        disabled && "cursor-not-allowed",
      )}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        defaultChecked={readOnly ? undefined : defaultChecked}
        checked={
          readOnly ? Boolean(checked) : defaultChecked ? undefined : checked
        }
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        className={clsx(
          readOnly || disabled ? "opacity-80" : "opacity-100",
          "mr-2",
          boxSize,
          className,
        )}
        onChange={readOnly ? undefined : onChange}
      />
      {children}
    </label>
  );
};

import clsx from "clsx";
import type { FC } from "react";
import {
  forwardRef,
  useRef,
  MutableRefObject,
  LegacyRef,
  RefCallback,
} from "react";

export const SpinnerSize = {
  XS: "w-3 h-3",
  SM: "w-4 h-4",
  MD: "w-6 h-6",
  LG: "w-8 h-8",
  XL: "w-12 h-12",
};

export interface SpinnerProps {
  className?: string;
  size?: string;
}

export const mergeRefs = <T extends unknown>(
  refs: Array<MutableRefObject<T> | LegacyRef<T>>,
): RefCallback<T> => {
  return (value): void => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as MutableRefObject<T | null>).current = value;
      }
    });
  };
};

export const Spinner: FC<SpinnerProps> = forwardRef((props, spinnerRef) => {
  const { className, size = SpinnerSize.SM } = props;
  const ref = useRef<typeof Spinner>(null);

  return (
    <svg
      ref={mergeRefs([ref, spinnerRef])}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={clsx("animate-spin", size, className)}
      fill="none"
      viewBox="0 0 66 66"
    >
      <circle
        cx="33"
        cy="33"
        fill="none"
        r="28"
        stroke="currentColor"
        strokeWidth="10"
        className="opacity-30"
      />
      <circle
        cx="33"
        cy="33"
        fill="none"
        r="28"
        stroke="currentColor"
        strokeDasharray="40, 134"
        strokeDashoffset="325"
        strokeLinecap="round"
        strokeWidth="10"
        className="opacity-70"
      />
    </svg>
  );
});

Spinner.displayName = "Spinner";

export default Spinner;

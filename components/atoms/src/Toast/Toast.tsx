import clsx from "clsx";
import type { FC } from "react";

import closeIcon from "./close.svg";

export const TextColor = {
  WHITE: "text-white",
  BLACK: "text-black",
};

export interface ToastProps {
  className?: string;
  iconImgSrc?: string;
  title: string;
  description?: string;
  bgColor?: string; //Should be tailwind css, not color code(#fff)
  textColor?: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (value: any) => void;
}

export const Toast: FC<ToastProps> = props => {
  const {
    className,
    iconImgSrc,
    title,
    description,
    bgColor = "bg-black",
    textColor = TextColor.WHITE,
    onClick,
  } = props;

  return (
    <>
      <div
        className={clsx(
          "flex items-center w-1/4 min-w-full h-16 min-h-full rounded shadow",
          className,
          bgColor,
        )}
      >
        {iconImgSrc && (
          <div className="m-2 w-8 h-8">
            <img
              src={iconImgSrc}
              alt="Toast icon"
              className={clsx(textColor)}
            />
          </div>
        )}
        <div className={clsx("flex flex-col items-start ml-2", textColor)}>
          <p className="text-lg font-bold">{title}</p>
          <p className="text-base">{description}</p>
        </div>
        <button
          className={clsx("mr-2 mb-5 ml-auto w-3 h-3", textColor)}
          onClick={onClick}
        >
          <img src={closeIcon} alt="Close icon" />
        </button>
      </div>
    </>
  );
};

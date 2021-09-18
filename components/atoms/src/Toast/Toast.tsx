import clsx from "clsx";
import type { FC } from "react";

import { IoClose } from "react-icons/io5";

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

  let iconColor;
  if (textColor === TextColor.WHITE) {
    iconColor = "white";
  } else {
    iconColor = "black";
  }

  return (
    <>
      <div
        className={clsx(
          "flex items-center w-1/4 min-h-[4rem] rounded shadow",
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
        <button className={clsx("mr-2 mb-5 ml-auto w-3 h-3")} onClick={onClick}>
          <IoClose fill={iconColor} />
        </button>
      </div>
    </>
  );
};

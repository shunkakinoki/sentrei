import clsx from "clsx";
import type { FC } from "react";

import { CgDanger } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";

import { ImInfo, ImWarning } from "react-icons/im";
import { IoClose } from "react-icons/io5";

export const TextColor = {
  WHITE: "text-white",
  BLACK: "text-black",
};

export const ReactIconsType = {
  INFO: "info",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning",
};
export interface ToastProps {
  className?: string;
  iconImgSrc?: string; //For external source of icons.
  reactIcon?: string; //For React-Icons.
  title: string;
  description?: string;
  bgColor?: string; //Should be tailwind css, not color code(#fff)
  textColor?: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (value: any) => void;
}

//TODO: set color for icons.

export const Toast: FC<ToastProps> = props => {
  const {
    className,
    iconImgSrc,
    reactIcon,
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

  //TODO: render icons.
  const renderIcon = () => {
    if (iconImgSrc) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={iconImgSrc} alt="Toast icon" className={clsx(textColor)} />
      );
    } else {
      if (reactIcon) {
        switch (reactIcon) {
          case ReactIconsType.INFO:
            return <ImInfo />;
          case ReactIconsType.DANGER:
            return <CgDanger />;
          case ReactIconsType.SUCCESS:
            return <FaRegCheckCircle />;
          case ReactIconsType.WARNING:
            return <ImWarning />;
        }
      }
    }
  };

  return (
    <>
      <div
        className={clsx(
          "flex items-center w-1/4 min-h-[4rem] rounded shadow",
          className,
          bgColor,
        )}
      >
        {iconImgSrc && <div className="m-2 w-8 h-8">{renderIcon}</div>}
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

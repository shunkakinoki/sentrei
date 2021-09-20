import clsx from "clsx";
import type { FC } from "react";

import { BsExclamationTriangle } from "react-icons/bs";
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

  let iconColor: string;
  if (textColor === TextColor.WHITE) {
    iconColor = "white";
  } else {
    iconColor = "black";
  }

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
            return <ImInfo fill={iconColor} size={26} className="m-auto" />;
          case ReactIconsType.DANGER:
            return (
              <BsExclamationTriangle
                fill={iconColor}
                size={26}
                className="m-auto"
              />
            );
          case ReactIconsType.SUCCESS:
            return (
              <FaRegCheckCircle fill={iconColor} size={26} className="m-auto" />
            );
          case ReactIconsType.WARNING:
            return <ImWarning fill={iconColor} size={26} className="m-auto" />;
          default:
            return;
        }
      } else {
        return;
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
        <div className="m-2 w-8 h-8">{renderIcon()}</div>
        <div className={clsx("flex flex-col items-start ml-2", textColor)}>
          <p className="text-lg font-bold">{title}</p>
          <p className="text-base">{description}</p>
        </div>
        <button
          className={clsx("mt-1 mr-3 mb-auto ml-auto w-3 h-3")}
          onClick={onClick}
        >
          <IoClose fill={iconColor} size={20} />
        </button>
      </div>
    </>
  );
};

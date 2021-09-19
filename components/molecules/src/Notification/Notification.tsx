import { Toast, Button } from "@sentrei/atoms";
import clsx from "clsx";

import type { FC } from "react";
import { useState, useEffect } from "react";

import styles from "./Notification.module.css";

//TODO: animation

export const ToastPosition = {
  TOP_RIGHT: "top-right",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_LEFT: "bottom-left",
  TOP_CENTER: "top-center",
};

export interface NotificationProps {
  position?: string;
  autoDeleteTime?: number; //seconds
  isAutoDelete?: boolean;
  toastBgColor?: string;
  toastTextColor?: string;
}

export const Notification: FC<NotificationProps> = props => {
  const {
    position = ToastPosition.TOP_CENTER,
    autoDeleteTime = 5,
    isAutoDelete = true,
    toastBgColor,
    toastTextColor,
  } = props;
  const [isToastShowing, setIsToastShowing] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoDelete) {
        setIsToastShowing(false);
      }
    }, autoDeleteTime * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(styles); //not loaded.

  return (
    <>
      <div className={clsx("relative w-screen h-screen", styles.bottomRight)}>
        <Button
          onClick={(): void => {
            setIsToastShowing(true);
          }}
        >
          Info
        </Button>
        {isToastShowing && (
          //TODO: Position not working
          <div className={clsx(styles[position], "absolute w-full")}>
            <Toast
              title="Notification"
              description="Info Info Info"
              reactIcon="info"
              bgColor={toastBgColor}
              textColor={toastTextColor}
              onClick={(): void => {
                setIsToastShowing(false);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

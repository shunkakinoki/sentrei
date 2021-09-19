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
}

export const Notification: FC<NotificationProps> = props => {
  const {
    position = ToastPosition.TOP_CENTER,
    autoDeleteTime = 5,
    isAutoDelete = true,
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

  return (
    <>
      <div className="relative w-screen h-screen">
        <Button
          onClick={(): void => {
            setIsToastShowing(true);
          }}
        >
          Info
        </Button>
        {isToastShowing && (
          // Position not working
          <div className={clsx("absolute w-full", styles[position])}>
            <Toast
              title="Notification"
              description="Info Info Info"
              reactIcon="info"
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

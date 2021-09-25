import { Toast, Button } from "@sentrei/atoms";
import { useToastNotification } from "@sentrei/hooks";
import clsx from "clsx";

import type { FC } from "react";
import { useEffect } from "react";

import styles from "./Notification.module.scss";

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
  title?: string;
  description?: string;
}

export const Notification: FC<NotificationProps> = props => {
  const {
    position = ToastPosition.TOP_CENTER,
    autoDeleteTime = 5,
    isAutoDelete = true,
    toastBgColor,
    toastTextColor,
    title = "Notification",
    description = "Notify your status...",
  } = props;

  const [isToastOpen, setToastOpen] = useToastNotification();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoDelete) {
        setToastOpen(false);
      }
    }, autoDeleteTime * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [autoDeleteTime, isAutoDelete]);

  return (
    <>
      <div className={clsx("relative w-screen h-screen")}>
        <Button
          onClick={(): void => {
            setToastOpen(true);
          }}
        >
          Info
        </Button>
        {isToastOpen && (
          <div className={clsx("w-full h-full")}>
            <Toast
              title={title}
              description={description}
              reactIcon="info"
              bgColor={toastBgColor}
              textColor={toastTextColor}
              className={clsx("absolute", styles[position])}
              onClick={(): void => {
                setToastOpen(false);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

import { Toast, Button } from "@sentrei/atoms";
import clsx from "clsx";

import type { FC } from "react";
import { useState } from "react";

import styles from "./Notification.module.css";

//TODO: info icon [now! in toast.tsx]
//TODO: animation
//TODO: auto deletion
//TODO: props -> position, deletion time

export const ToastPosition = {
  TOP_RIGHT: "top-right",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_LEFT: "bottom-left",
  TOP_CENTER: "top-center",
};

export interface NotificationProps {
  position?: string;
}

export const Notification: FC<NotificationProps> = props => {
  const { position = ToastPosition.TOP_CENTER } = props;
  const [isToastShowing, setIsToastShowing] = useState<boolean>(false);

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
              className=""
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

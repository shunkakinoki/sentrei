import clsx from "clsx";
import moment from "moment";
import type { FC } from "react";
import Countdown from "react-countdown";

import styles from "./CountdownClock.module.css";

interface CountdownBlockProps {
  count: string;
  label: string;
  isLast?: boolean;
}

export const CountdownBlock: FC<CountdownBlockProps> = ({
  count,
  label,
  isLast,
}) => {
  return (
    <>
      <div
        className={clsx(
          "flex overflow-hidden flex-col items-center w-16 md:w-24 font-mono rounded-l-2xl",
          styles.glitch,
        )}
      >
        <div
          className={
            (clsx("text-xl md:text-2xl font-bold text-center text-fuchsia-600"),
            styles.glow)
          }
          data-text={count}
        >
          {count}
        </div>
        <div
          className={
            (clsx("py-2 mt-2 sm:mt-4 w-full text-center text-fuchsia-600"),
            styles.glow)
          }
          data-text={label}
        >
          {label}
        </div>
        <div className={styles.scanlines} />
      </div>
      {!isLast && (
        <div className="px-3 sm:px-4 mb-6 sm:mb-12 text-lg font-semibold" />
      )}
    </>
  );
};

interface CountdownClockProps {
  date: moment.Moment;
  className?: string;
  onComplete: () => void;
}

export const CountdownClock: FC<CountdownClockProps> = ({
  date,
  className,
  onComplete,
}) => {
  const renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div />;
    } else {
      return (
        <div className={clsx(className, "flex justify-center items-center")}>
          <CountdownBlock count={days} label="DAYS" />
          <CountdownBlock count={hours} label="HOURS" />
          <CountdownBlock count={minutes} label="MINS" />
          <CountdownBlock isLast count={seconds} label="SECS" />
        </div>
      );
    }
  };

  if (date) {
    return (
      <Countdown
        date={date.format()}
        renderer={renderCountdown}
        onComplete={onComplete}
      />
    );
  }
};

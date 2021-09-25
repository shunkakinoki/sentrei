import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { FC } from "react";
import { useEffect, useState } from "react";

export interface CircleIndicatorProps {}

export const CircleIndicator: FC<CircleIndicatorProps> = () => {
  const [isComplete, setIsComplete] = useState(true);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => {
    return yRange.onChange(v => {
      return setIsComplete(v >= 1);
    });
  }, [yRange]);

  return (
    <svg className="top-20 left-20 p-48 w-96 text-white" viewBox="0 0 60 60">
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="white"
        strokeDasharray="0 1"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          pathLength,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1,
        }}
      />
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="white"
        d="M14,26 L 22,33 L 35,16"
        initial={false}
        strokeDasharray="0 1"
        animate={{ pathLength: isComplete ? 1 : 0 }}
      />
    </svg>
  );
};

// Code from https://github.com/samuelkraft/samuelkraft-next/blob/43a7a3c8d466584fbde37af3b599233c79d3d283/components/parallax.tsx

import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { FC, ReactNode } from "react";
import { useRef, useLayoutEffect, useState } from "react";

export type ParallaxProps = {
  children: ReactNode;
  offset?: number;
  clampInitial?: boolean;
  clampFinal?: boolean;
};

export const Parallax: FC<ParallaxProps> = ({
  children,
  offset = 50,
  clampInitial,
  clampFinal,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useViewportScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(
    scrollY,
    [initial, final],
    [clampInitial ? 0 : offset, clampFinal ? 0 : -offset],
  );

  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        //@ts-ignore
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset,
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      return window.removeEventListener("resize", onResize);
    };
  }, [ref]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

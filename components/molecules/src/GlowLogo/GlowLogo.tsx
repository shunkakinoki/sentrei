import type { ImageProps } from "next/image";
import Image from "next/image";
import type { FC } from "react";

import styles from "./GlowLogo.module.css";

type LogoGlowProps = Pick<ImageProps, "src">;

export const GlowLogo: FC<LogoGlowProps> = ({ src }) => {
  return (
    <div className="relative w-full animate-fade-in-down">
      <Image
        priority
        alt="logo"
        layout="responsive"
        placeholder="blur"
        objectFit="fill"
        src={src}
        className={styles.glow}
      />
    </div>
  );
};

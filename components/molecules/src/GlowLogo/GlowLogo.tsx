import Image, { ImageProps } from "next/image";
import { FC } from "react";

import styles from "./GlowLogo.module.css";

type LogoGlowProps = Pick<ImageProps, "src">;

export const GlowLogo: FC<LogoGlowProps> = ({ src }) => {
  return (
    <div className="relative w-full">
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

import LogoImage from "@public/www-mosh-lol/Logo.png";
import Image from "next/image";

import styles from "./GlowLogo.module.css";

export const GlowLogo = () => {
  return (
    <div className="w-full">
      <Image
        priority
        alt="logo"
        layout="responsive"
        placeholder="blur"
        objectFit="fill"
        src={LogoImage}
        className={styles.glow}
      />
    </div>
  );
};

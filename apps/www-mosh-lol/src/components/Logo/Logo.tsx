import Image from "next/image";

import styles from "./Logo.module.css";

import LogoImage from "@sentrei/www-mosh-lol/public/Logo.png";

export const Logo = () => {
  return (
    <div className="relative w-full">
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

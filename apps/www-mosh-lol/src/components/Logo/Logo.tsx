import Image from "next/image";

import styles from "./Logo.module.scss";

import LogoImage from "@public/www-mosh-lol/Logo.png";

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
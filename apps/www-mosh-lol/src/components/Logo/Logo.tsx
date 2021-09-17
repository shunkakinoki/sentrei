import Image from "next/image";

// eslint-disable-next-line no-restricted-imports
import LogoImage from "../../../public/Logo.png";

import styles from "./Logo.module.css";

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

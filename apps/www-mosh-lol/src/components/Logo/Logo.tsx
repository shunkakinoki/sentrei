import Image from "next/image";

// eslint-disable-next-line no-restricted-imports
import LogoImage from "../../../public/Logo.png";

import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className="overflow-visible aspect-w-16 aspect-h-9">
      <Image
        priority
        alt="logo"
        layout="fill"
        objectFit="cover"
        src={LogoImage}
        className={styles.glow}
      />
    </div>
  );
};

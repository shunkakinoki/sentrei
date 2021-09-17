import Image from "next/image";

import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className="overflow-visible aspect-w-16 aspect-h-9">
      <Image
        alt="logo"
        layout="fill"
        objectFit="cover"
        src="/Logo.png"
        className={styles.glow}
      />
    </div>
  );
};

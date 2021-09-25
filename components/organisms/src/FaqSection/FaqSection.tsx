import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import type { FC, ReactNode } from "react";

import styles from "./FaqSection.module.css";

export interface FaqSectionProps {
  children: ReactNode;
  title: string;
}

export const FaqSection: FC<FaqSectionProps> = ({ children, title }) => {
  return (
    <Disclosure as="div" className="mt-8">
      {() => {
        return (
          <>
            <Disclosure.Button className="flex justify-between py-2 px-4 w-full font-mono text-2xl md:text-4xl font-semibold text-left text-purple-300 hover:bg-purple-500 rounded-lg">
              <span>{title}</span>
            </Disclosure.Button>
            <Disclosure.Panel
              className={clsx(
                "px-4 pt-4 pb-2 text-lg md:text-xl text-blueGray-300",
                styles.faq,
              )}
            >
              {children}
            </Disclosure.Panel>
          </>
        );
      }}
    </Disclosure>
  );
};

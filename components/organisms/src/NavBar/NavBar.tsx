import { Link, Image } from "@sentrei/atoms";
import { useModalScreen } from "@sentrei/hooks";
import { ModalScreen } from "@sentrei/molecules";

import clsx from "clsx";
import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface navItem {
  url?: string;
  title?: string;
  showModal?: boolean;
  modalContent?: ReactNode;
}

export interface NavBarProps {
  className?: string;
  logoSrc: string;
  items: navItem[];
  bgColor?: string;
}

export const NavBar: FC<NavBarProps> = props => {
  const { className, logoSrc, items, bgColor = "bg-black" } = props;
  const [, setModalOpen] = useModalScreen();

  const openModal = () => {
    setModalOpen(true);
  };

  const Modal: FC<{ children: ReactNode }> = ({ children }) => {
    return createPortal(
      <ModalScreen>
        <div
          className={clsx(
            "inline-block overflow-y-scroll p-6 my-8 w-full md:w-[80%] h-[90vh] md:h-[80vh] text-left align-middle bg-radial rounded-2xl shadow-2xl opacity-95 drop-shadow-2xl transition-all transform",
            bgColor,
          )}
        >
          {children}
        </div>
      </ModalScreen>,
      document.getElementById("root"),
    );
  };

  const renderItems = () => {
    return items.map(item => {
      if (item.showModal) {
        return (
          <>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
              className="text-white visited:text-white hover:text-white no-underline hover:underline cursor-pointer"
              onKeyDown={openModal}
              onClick={openModal}
            >
              {item.title}
            </div>
            <Modal>{item.modalContent}</Modal>
          </>
        );
      } else {
        return (
          <Link
            key={item.title}
            to={item.url}
            className="text-white visited:text-white hover:text-white no-underline hover:underline"
          >
            {item.title}
          </Link>
        );
      }
    });
  };

  return (
    <>
      <header className={clsx(bgColor, className)}>
        <nav
          className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl"
          aria-label="Top"
        >
          <div className="flex justify-between items-center py-6 w-full border-b border-indigo-500 lg:border-none">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <Image src={logoSrc} className="w-auto h-10" alt="logo" />
            </a>
            <div className="hidden sm:flex ml-10 space-x-8">
              {renderItems()}
            </div>
          </div>
          <div className="flex sm:hidden flex-wrap justify-center py-4 space-x-6">
            {renderItems()}
          </div>
        </nav>
      </header>
    </>
  );
};

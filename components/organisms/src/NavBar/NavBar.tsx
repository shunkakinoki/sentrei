import { Link, Image } from "@sentrei/atoms";
import { useModalScreen } from "@sentrei/hooks";

import clsx from "clsx";

import type { FC, ReactNode } from "react";

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
}

export const NavBar: FC<NavBarProps> = props => {
  const { className, logoSrc, items } = props;
  const [, setModalOpen] = useModalScreen();

  const openModal = () => {
    setModalOpen(true);
  };
  const renderItems = () => {
    return items.map(item => {
      if (item.showModal) {
        return (
          <>
            {/* <div
              className="text-white visited:text-white hover:text-white no-underline hover:underline cursor-pointer"
              onClick={openModal}
            >
              {item.title}
            </div> */}
            {/* <ModalScreen>{item.modalContent}</ModalScreen> //TODO: show
            modal */}
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
      <header className={clsx("bg-indigo-600", className)}>
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

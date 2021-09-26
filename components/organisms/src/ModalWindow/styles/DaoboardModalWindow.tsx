import LogoImage from "@public/Daoboard.png";
import { useModalWindow } from "@sentrei/hooks";
import { GlowLogo } from "@sentrei/molecules";
import type { FC } from "react";

import { FaqSection, ModalWindow } from "@sentrei/organisms";

export const DaoboardModalWindow: FC = () => {
  const [, setModalOpen] = useModalWindow();

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalWindow>
      <div className="inline-block overflow-y-scroll p-6 my-8 w-full md:w-[80%] h-[90vh] md:h-[80vh] text-left align-middle bg-radial from-purple-900 to-indigo-500 rounded-2xl shadow-2xl opacity-95 drop-shadow-2xl transition-all transform">
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <button
            type="button"
            className="text-gray-200 hover:text-gray-100 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
            onClick={closeModal}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-8 sm:w-10 h-8 sm:h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col">
          <GlowLogo src={LogoImage} />
          <div className="flex h-12 sm:h-20 md:h-0" />
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-200 to-indigo-300 animate-fade-in-up ">
            Like degenscore for DAOs.
          </h1>
          <div className="flex h-12 sm:h-24 md:h-36" />
          <FaqSection title="Summary">
            <h3>
              Get your score for your reputation based on your contirbution on
              snapshot.org
            </h3>
          </FaqSection>
        </div>
      </div>
    </ModalWindow>
  );
};

import { Dialog, Transition } from "@headlessui/react";
import { useModalWindow } from "@sentrei/hooks";
import type { FC, ReactNode } from "react";
import { Fragment } from "react";

export interface ModalWindowProps {
  className?: string;
  children?: ReactNode;
}

export const ModalWindow: FC<ModalWindowProps> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useModalWindow();

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="overflow-y-auto fixed inset-0 z-10"
        onClose={closeModal}
      >
        <div className="px-3 md:px-4 min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-700"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {children}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

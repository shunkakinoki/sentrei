import { Button, ButtonLink } from "@sentrei/atoms";
import { useModalScreen } from "@sentrei/hooks";
import type { FC } from "react";

export const ButtonCTA: FC = () => {
  const [, setModalOpen] = useModalScreen();

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex justify-center pt-6">
      <div className="inline-flex">
        <ButtonLink
          href="https://app.mosh.lol"
          className="text-trueGray-50 bg-gradient-to-r from-pink-400 hover:from-pink-300 via-purple-400 hover:via-purple-300 to-indigo-500 hover:to-indigo-400 hover:border-2 border-gray-600 shadow-xl hover:scale-105"
        >
          Enter App
        </ButtonLink>
        <Button
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="ml-3 text-pink-400 bg-pink-100 hover:bg-pink-200 border hover:border-red-400 focus:ring-pink-500"
          onClick={openModal}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

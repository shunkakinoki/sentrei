import { Button, ButtonLink } from "@sentrei/atoms";
import type { FC } from "react";

export const ButtonCTA: FC = () => {
  return (
    <div className="flex justify-center pt-6">
      <div className="inline-flex">
        <ButtonLink
          href="https://app.mosh.lol"
          className="text-trueGray-50 bg-gradient-to-r from-pink-400 hover:from-pink-300 via-purple-400 hover:via-purple-300 to-indigo-500 hover:to-indigo-400 border-gray-600 shadow-xl hover:scale-105"
        >
          Enter App
        </ButtonLink>
        <Button className="ml-3 text-pink-400 bg-pink-100 hover:bg-pink-200">
          Learn More
        </Button>
      </div>
    </div>
  );
};

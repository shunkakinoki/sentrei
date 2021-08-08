import { Button } from "@sentrei/atoms";
import type { FC } from "react";

export const ButtonGroup: FC = () => {
  return (
    <div className="p-3 text-blue-800 bg-blue-300 rounded-lg">
      <Button
        onClick={(): void => {
          console.log("Button 1");
        }}
      >
        Button 1
      </Button>
      <Button
        onClick={(): void => {
          console.log("Button 2");
        }}
      >
        Button 2
      </Button>
      <Button
        onClick={(): void => {
          console.log("Button 3");
        }}
      >
        Button 3
      </Button>
    </div>
  );
};

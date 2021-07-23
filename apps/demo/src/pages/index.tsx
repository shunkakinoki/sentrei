import { Button } from "@sentrei/atoms";
import { ButtonGroup } from "@sentrei/molecules";
import { ButtonSection } from "@sentrei/organisms";

export const Index = () => {
  return (
    <>
      <div className="bg-blue-900">
        <h3 className="text-3xl text-white animate-pulse">Index</h3>
        <Button
          label="Button"
          onClick={() => {
            console.warn("Button");
          }}
        />
        <ButtonGroup />
        <ButtonSection />
      </div>
    </>
  );
};

export default Index;

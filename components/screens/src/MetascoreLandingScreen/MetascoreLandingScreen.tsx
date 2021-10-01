import LogoImage from "@public/Metascore.png";
import { GlowLogo } from "@sentrei/molecules";
import { MetascoreButtonCTA } from "@sentrei/organisms";
import dynamic from "next/dynamic";

const Canvas = dynamic(async () => {
  const m = await import("@react-three/fiber");
  return m.Canvas;
});

const Grid = dynamic(async () => {
  const m = await import("@sentrei/organisms");
  return m.VaporGrid;
});

export const MetascoreLandingScreen = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-blue-600 via-purple-600 to-orange-500">
      <body>
        <div className="flex overflow-visible absolute inset-x-0 top-0 justify-center items-center h-2/3 sm:h-3/5">
          <div className="flex-col mt-12 sm:mt-16 md:mt-24 xl:mt-36">
            <div className="w-96" />
            <GlowLogo src={LogoImage} />
            <MetascoreButtonCTA />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 sm:h-2/5">
          <Canvas className="w-full h-full ">
            <Grid />
          </Canvas>
        </div>
      </body>
    </div>
  );
};

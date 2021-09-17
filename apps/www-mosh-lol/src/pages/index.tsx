import moment from "moment";

import dynamic from "next/dynamic";

import { CountdownClock } from "@sentrei/www-mosh-lol/components/CountdownClock";
import { Footer } from "@sentrei/www-mosh-lol/components/Footer";
import { Logo } from "@sentrei/www-mosh-lol/components/Logo";

const Canvas = dynamic(async () => {
  const m = await import("react-three-fiber");
  return m.Canvas;
});

const Grid = dynamic(async () => {
  const m = await import("@sentrei/www-mosh-lol/components/Grid");
  return m.Grid;
});

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 via-blue-200 to-sky-400">
      <body className="w-full">
        <div className="flex overflow-visible absolute inset-x-0 top-0 justify-center items-center h-3/4 sm:h-3/5">
          <div className="flex-col mt-12 sm:mt-24 md:mt-36 lg:mt-48">
            <Logo />
            <CountdownClock
              date={moment(process.env.NEXT_PUBLIC_MOSH_START)}
              onComplete={() => {}}
            />
            <Footer />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/4 sm:h-2/5">
          <Canvas className="w-full h-full ">
            <Grid />
          </Canvas>
        </div>
      </body>
    </div>
  );
};

export default Page;

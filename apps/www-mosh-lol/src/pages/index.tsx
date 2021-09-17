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
        <div className="flex flex-col justify-center items-center">
          <div className="mt-48 md:mt-64">
            <Logo />
            <CountdownClock
              date={moment(process.env.NEXT_PUBLIC_MOSH_START)}
              onComplete={() => {}}
            />
            <Footer />
          </div>
        </div>
        <div className="flex absolute inset-x-0 bottom-0 h-1/2">
          <Canvas className="w-full">
            <Grid />
          </Canvas>
        </div>
      </body>
    </div>
  );
};

export default Page;

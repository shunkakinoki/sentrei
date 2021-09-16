import moment from "moment";

import dynamic from "next/dynamic";

import { CountdownClock } from "@sentrei/www-mosh-lol/components/CountdownClock";
import { Footer } from "@sentrei/www-mosh-lol/components/Footer";

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
    <body className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-tl from-cyan-600 via-rose-700 to-indigo-800">
      <div className="mt-36">
        <CountdownClock
          date={moment(process.env.NEXT_PUBLIC_MOSH_START)}
          onComplete={() => {}}
        />
        <Footer />
      </div>
      <Canvas camera={{ position: [0, 0, 30] }} className="w-full">
        <Grid />
      </Canvas>
    </body>
  );
};

export default Page;

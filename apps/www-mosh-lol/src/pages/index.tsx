import moment from "moment";
import dynamic from "next/dynamic";
import Image from "next/image";

import { CountdownClock } from "@sentrei/www-mosh-lol/components/CountdownClock";
import { Footer } from "@sentrei/www-mosh-lol/components/Footer";
import { Logo } from "@sentrei/www-mosh-lol/components/Logo";

import BlueHandImage from "@sentrei/www-mosh-lol/public/BlueHand.png";
import LogoImage from "@sentrei/www-mosh-lol/public/Logo.png";
import PurpleHandImage from "@sentrei/www-mosh-lol/public/PurpleHand.png";
import RedWaveImage from "@sentrei/www-mosh-lol/public/RedWave.png";
import SunshineImage from "@sentrei/www-mosh-lol/public/Sunshine.png";

const Canvas = dynamic(async () => {
  const m = await import("react-three-fiber");
  return m.Canvas;
});

const Grid = dynamic(async () => {
  const m = await import("@sentrei/www-mosh-lol/components/Grid");
  return m.Grid;
});

export const Page = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-400 via-blue-200 to-sky-400">
      <div className="absolute inset-x-0 top-0 w-32 md:w-64 h-32 md:h-64">
        <Image
          className="opacity-10 transition-opacity animate-pulse aspect-w-12 aspect-h-6"
          height={30}
          width={30}
          placeholder="blur"
          src={SunshineImage}
          alt="Sunshine"
          layout="responsive"
        />
      </div>
      <div className="absolute inset-y-1/2 w-32 md:w-64 h-32 md:h-64">
        <Image
          className="opacity-10 transition-opacity animate-pulse aspect-w-12 aspect-h-6"
          height={30}
          width={30}
          placeholder="blur"
          alt="PurpleHand"
          src={PurpleHandImage}
          layout="responsive"
        />
      </div>
      <div className="overflow-hidden absolute inset-x-1/2 sm:inset-x-2/3 lg:inset-x-3/5 xl:inset-x-3/4 top-0 right-0 w-32 md:w-64 h-16 md:h-32">
        <Image
          className="opacity-10 transition-opacity animate-pulse rotate-180 aspect-w-2 aspect-h-1"
          layout="fill"
          placeholder="blur"
          objectFit="cover"
          objectPosition="right"
          alt="BlueHand"
          src={BlueHandImage}
        />
      </div>
      <div className="absolute right-0 bottom-0 w-32 md:w-64 h-32 md:h-64">
        <Image
          className="opacity-10 transition-opacity animate-pulse aspect-w-12 aspect-h-6"
          height={30}
          width={30}
          placeholder="blur"
          alt="RedWave"
          src={RedWaveImage}
          layout="responsive"
        />
      </div>
      <Image
        className="opacity-10 transition-opacity animate-pulse aspect-w-12 aspect-h-6"
        alt="Logo"
        src={LogoImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <body>
        <div className="flex overflow-visible absolute inset-x-0 top-0 justify-center items-center h-2/3 sm:h-3/5">
          <div className="flex-col mt-12 sm:mt-16 md:mt-24 xl:mt-36">
            <Logo />
            <CountdownClock
              date={moment(process.env.NEXT_PUBLIC_MOSH_START)}
              onComplete={() => {}}
            />
            <Footer />
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

export default Page;

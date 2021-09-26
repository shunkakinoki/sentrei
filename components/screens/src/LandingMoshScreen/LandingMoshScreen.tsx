import BlueHandImage from "@public/www-mosh-lol/BlueHand.png";
import LogoImage from "@public/www-mosh-lol/Logo.png";
import PurpleHandImage from "@public/www-mosh-lol/PurpleHand.png";
import RedWaveImage from "@public/www-mosh-lol/RedWave.png";
import SunshineImage from "@public/www-mosh-lol/Sunshine.png";
import { useModalScreen } from "@sentrei/hooks";
import { GlowLogo, ModalScreen } from "@sentrei/molecules";
import {
  ButtonCTA,
  FooterLogo,
  CountdownClock,
  FaqSection,
} from "@sentrei/organisms";
import clsx from "clsx";
import moment from "moment";
import dynamic from "next/dynamic";
import Image from "next/image";

const Canvas = dynamic(async () => {
  const m = await import("@react-three/fiber");
  return m.Canvas;
});

const Grid = dynamic(async () => {
  const m = await import("@sentrei/organisms");
  return m.VaporGrid;
});

export const LandingMoshScreen = () => {
  const [isModalOpen, setModalOpen] = useModalScreen();

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className={clsx(
        "w-full min-h-screen bg-gradient-to-b from-pink-400 via-blue-200 to-sky-400 transition-colors duration-1000",
        isModalOpen &&
          "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
      )}
    >
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
      <ModalScreen>
        <div className="inline-block overflow-y-scroll p-6 my-8 w-full md:w-[80%] h-[90vh] md:h-[80vh] text-left align-middle bg-radial from-purple-900 to-indigo-500 rounded-2xl shadow-2xl opacity-95 drop-shadow-2xl transition-all transform">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="text-gray-200 hover:text-gray-100 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
              onClick={closeModal}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-8 sm:w-10 h-8 sm:h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col">
            <GlowLogo src={LogoImage} />
            <div className="flex h-12 sm:h-20 md:h-0" />
            <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-200 to-indigo-300 animate-fade-in-up ">
              A cross-chain NFT experiment.
            </h1>
            <div className="flex h-12 sm:h-24 md:h-36" />
            <FaqSection title="Summary">
              <h3>1. 1 Mosh per day, 6 Different networks</h3>
              <h4>A. Daily auctions</h4>
              <p>
                This will be trustly auctioned on the official{" "}
                <a href="https://app.mosh.lol">app.mosh.lol</a> website. All
                proceedes go the Mosh DAO treasury.
              </p>
              <h4>B. Each day, different network</h4>
              <ul>
                <li>Monday: $ETH</li>
                <li>Tuesday $MATIC</li>
                <li>Wednesday: $FTM</li>
                <li>Thursday: $ARB</li>
                <li>Friday: $AVA</li>
                <li>Saturday: $ONE</li>
              </ul>
              <h4>C. DAO Mosh on Sunday</h4>
              <p>
                Every Sunday a Mosh will be randomly distributed to one of the
                holders of existing Mosh owners, or $MOSH holders. See code
                below.
              </p>
              <h3>2. $MOSH Token Launch (2022/01/01)</h3>
              <p>
                We will issue an official $MOSH token on the 90th day of the
                product launch. This will be used to provide liquidity to the
                Mosh DAO, but also used as a participating right to the Mosh
                ecosystem. In order to favor existing Mosh owners, we will
                airdrop $MOSH token at the time of ICO.
              </p>
              <h3>3. Incentivized community creation.</h3>
              <p>
                Every Mosh is copyright-free to be utilized under public domain.
              </p>
            </FaqSection>
            <FaqSection title="Main points">
              <ul>
                <li>The mosh artwork is public domain</li>
                <li>
                  1 mosh trustlessly auctioned every 24 hours forever, spanning
                  6 different networks.
                </li>
                <li>
                  100% of noun auction proceeds are trustlessly sent to Mosh DAO
                  treasury
                </li>
                <li>
                  Mosh treasury will be controlled by governance in the Mosh DAO
                </li>
                <li>
                  &#39;Moshists&#39; receive rewards in the form of nouns (33%
                  of supply for first 30 days)
                </li>
              </ul>
            </FaqSection>
            <FaqSection title="Daily Mosh Auctions">
              <p>
                We will generate one mosh, every day, forever on multi-chain All
                proceedes will directly go the Mosh DAO Treasury. Every 7th Mosh
                will go directly to the Moshist founder&#39;s wallet. (for the
                first 3 years)
              </p>
            </FaqSection>
            <FaqSection title="Mosh DAO">
              <p>
                Mosh DAO will utilize a fork of the Compound Governance. The
                Mosh DAO treasury receives 100% of ETH proceeds from daily Mosh
                auctions. Until the $MOSH token launch, all moshes are equal in
                terms of voting rights.
              </p>
            </FaqSection>
            <FaqSection title="Mosh Traits">
              <p>
                The rarity of the Moshes are stated{" "}
                <a
                  href="https://play.mosh.lol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>
              <h4>Moshists Rewards</h4>
              <p>
                &#39;Moshists&#39; are the group of 3 builders that initiated
                Moshists. Here are the Moshists:
              </p>
              <ul>
                <li>
                  <a
                    href="https://twitter.com/shunkakinoki"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @shunkakinoki
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/littlemonastar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @littlemonastar
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/0xshugo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @0xshugo
                  </a>
                </li>
              </ul>
              <p>
                Since 100% of the proceedes will go to the Mosh DAO Treasury,
                every 3rd Mosh will be randomly airdropped to one of the Mosh
                DAO members (only the Moshists exists at the time of the launch)
              </p>
            </FaqSection>
            <FaqSection title="Source">
              <h6>
                <a
                  href="https://github.com/sentrei/sentrei/apps/www-mosh-lol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </h6>
            </FaqSection>
          </div>
        </div>
      </ModalScreen>
      <body>
        <div className="flex overflow-visible absolute inset-x-0 top-0 justify-center items-center h-2/3 sm:h-3/5">
          <div className="flex-col mt-12 sm:mt-16 md:mt-24 xl:mt-36">
            <GlowLogo src={LogoImage} />
            <CountdownClock
              date={moment(process.env.NEXT_PUBLIC_LAUNCH)}
              onComplete={() => {}}
            />
            <ButtonCTA />
            <FooterLogo
              discord="https://discord.gg/SsF2QejwvZ"
              github="https://github.com/sentrei/sentrei"
              twitter="https://twitter.com/MoshDAO"
            />
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

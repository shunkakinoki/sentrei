import LogoImage from "@public/www-mosh-lol/Logo.png";
import { useModalWindow } from "@sentrei/hooks";
import { GlowLogo } from "@sentrei/molecules";
import type { FC } from "react";

import { FaqSection, ModalWindow } from "@sentrei/organisms";

export const MoshModalWindow: FC = () => {
  const [, setModalOpen] = useModalWindow();

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalWindow>
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
              holders of existing Mosh owners, or $MOSH holders. See code below.
            </p>
            <h3>2. $MOSH Token Launch (2022/01/01)</h3>
            <p>
              We will issue an official $MOSH token on the 90th day of the
              product launch. This will be used to provide liquidity to the Mosh
              DAO, but also used as a participating right to the Mosh ecosystem.
              In order to favor existing Mosh owners, we will airdrop $MOSH
              token at the time of ICO.
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
                1 mosh trustlessly auctioned every 24 hours forever, spanning 6
                different networks.
              </li>
              <li>
                100% of noun auction proceeds are trustlessly sent to Mosh DAO
                treasury
              </li>
              <li>
                Mosh treasury will be controlled by governance in the Mosh DAO
              </li>
              <li>
                &#39;Moshists&#39; receive rewards in the form of nouns (33% of
                supply for first 30 days)
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
              Mosh DAO will utilize a fork of the Compound Governance. The Mosh
              DAO treasury receives 100% of ETH proceeds from daily Mosh
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
              every 3rd Mosh will be randomly airdropped to one of the Mosh DAO
              members (only the Moshists exists at the time of the launch)
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
    </ModalWindow>
  );
};

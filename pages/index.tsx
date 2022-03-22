import {
  ChevronRightIcon,
  GlobeAltIcon,
  ReceiptTaxIcon,
  ScaleIcon,
} from "@heroicons/react/solid";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-black p-1 py-2 w-full">
        <div className="text-xs font-mono flex items-center text-gray-100 ">
          <img
            src="/sun.svg"
            className="h-4 w-4 mr-1 dark:bg-gray-500 bg-white"
          />
          <div className="px-1">strangemood</div>
          <div className="h-px bg-white w-full flex-1" />
          <div className="px-1">
            <a
              href="/welcome"
              target={"_blank"}
              className="underline flex "
              onClick={() => {
                // @ts-ignore window.fathom.trackGoal('WIRAJS3K', 0);
                window.fathom.trackGoal("WIRAJS3K", 0);
              }}
            >
              Join Strangemood
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black text-gray-100 w-full px-4 py-24 ">
        <div className="max-w-4xl mx-auto w-full">
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold">
              Strangemood is a decentralized protocol for buying and selling
              video games.
            </h1>
            <p className="text-gray-300 mt-2 pb-8">
              It's an open source competitor to Steam.
            </p>

            <Link href="/welcome">
              <a
                className="flex items-center underline"
                onClick={() => {
                  // @ts-ignore window.fathom.trackGoal('WIRAJS3K', 0);
                  window.fathom.trackGoal("WIRAJS3K", 0);
                }}
              >
                Join the Strangemood Foundation{" "}
                <ChevronRightIcon className="h-4 w-4 mt-0.5" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-4 pt-6 pattern flex flex-col">
        <div className="max-w-4xl mx-auto flex  flex-col ">
          <div className="mb-2 px-0 pb-6 flex gap-4 items-center flex flex-wrap  ">
            <Link href={"https://github.com/strangemoodfoundation/strangemood"}>
              <a className="flex hover:bg-gray-100 text-mono bg-white px-2 py-1 border text-sm border-black items-center rounded-sm">
                Github
                <img src="/github.svg" height={14} width={24} className="h-3" />
              </a>
            </Link>

            <Link href={"https://twitter.com/strangemoodorg"}>
              <a className="flex hover:bg-gray-100 text-mono bg-white px-2 py-1 border text-sm border-black items-center rounded-sm">
                Twitter
                <img
                  src="/twitter.svg"
                  height={14}
                  width={24}
                  className="h-3"
                />
              </a>
            </Link>

            <Link href={"https://discord.com/invite/Y2R3VBcRmA"}>
              <a className="flex hover:bg-gray-100 text-mono bg-white px-2 py-1 border text-sm border-black items-center rounded-sm">
                Discord
                <img
                  src="/discord.svg"
                  height={14}
                  width={24}
                  className="h-3"
                />
              </a>
            </Link>

            <Link href={"https://docs.strangemood.org"}>
              <a className="flex hover:bg-gray-100 bg-white px-2 py-1 border text-sm border-black items-center rounded-sm">
                Docs
              </a>
            </Link>

            <Link href={"https://www.strangemood.org/about"}>
              <a className="flex hover:bg-gray-100 bg-white px-2 py-1 border text-sm border-black items-center rounded-sm">
                F.A.Q.
              </a>
            </Link>

            <Link href={"https://realms.today/dao/MOOD"}>
              <a className="flex hover:bg-gray-100 bg-white px-2 py-1 border text-sm border-black items-center rounded-sm">
                Governance
              </a>
            </Link>
            <Link href={"/welcome"}>
              <a
                className="flex hover:bg-blue-400 bg-blue-500 text-blue-50 border-blue-700 px-2 py-1 border text-sm border-black items-center rounded-sm"
                onClick={() => {
                  // @ts-ignore window.fathom.trackGoal('WIRAJS3K', 0);
                  window.fathom.trackGoal("WIRAJS3K", 0);
                }}
              >
                Join the Beta
              </a>
            </Link>
          </div>

          <div className="rounded-t-sm sm:border-l mb-12 border-b-0 sm:border-b  sm:border-r border-t border-black bg-white h-full flex-1 flex flex-col">
            <div className="bg-black text-white px-4 py-8 flex  flex-col ">
              <h2 className="text-lg font-bold mb-1">
                Strangemood (maybe) has lower fees, and larger market size than
                Steam.
              </h2>
              <p>That's a big claim, here's how we could pull it off.</p>
            </div>

            <div className="border-b py-8">
              <div className="px-4">
                <div className="flex items-start p-0 m-0">
                  <GlobeAltIcon className="h-4 w-4 mr-2 top-1 relative" />{" "}
                  <div className="flex-1">
                    <b>Strangemood isn't a single store.</b> It's a network of
                    stores that interoperate with each other. List on{" "}
                    <i>the network</i>, and your game is available for sale on
                    all the stores.
                  </div>
                </div>
              </div>

              <div className="px-4 pt-4">
                <div className="flex items-start p-0 m-0">
                  <ReceiptTaxIcon className="h-4 w-4 mr-2 top-1 relative" />{" "}
                  <div className="flex-1">
                    <b>Game devs set their own fees.</b> Sellers set a % of the
                    sale that goes to the store that completes the transaction.
                    Sellers compete to offer higher cuts, stores compete to
                    accept lower cuts.
                  </div>
                </div>
              </div>

              <div className="px-4 pt-4">
                <div className="flex items-start p-0 m-0">
                  <ScaleIcon className="h-4 w-4 mr-2 top-1 relative" />{" "}
                  <div className="flex-1">
                    <span className="font-bold inline">
                      The market finds the perfect fee.
                    </span>{" "}
                    <div className="inline">
                      We think it's probably lower than Steam's. Strangemood
                      helps YouTubers, Twitch streamers, journalists, and
                      software applications who already have a large audience,
                      offer you their distribution at lower fees than the
                      current stores.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-12 flex items-center font-mono">
            <div className="h-px flex-1 bg-black" />
            <div>oh, also</div>
            <div className="h-px flex-1 bg-black" />
          </div>

          <div className="pb-12 flex gap-4 flex-wrap flex-col sm:flex-row">
            <div className="flex-1 flex  flex-col ">
              <h2 className=" font-bold mb-1">Governed by sellers.</h2>
              <p className="text-sm">
                Strangemood is collectively owned by a global internet
                co-operative. If you sell a game on Strangemood, you'll
                automatically be given voting power over the co-op.
              </p>
            </div>

            <div className=" flex-1  flex  flex-col ">
              <h2 className=" font-bold mb-1">Carbon Neutral.</h2>
              <p className="text-sm">
                Strangemood is built on Solana, a fast, carbon neutral
                blockchain. Each transaction on Strangemood{" "}
                <a
                  className="underline"
                  href="https://solana.com/news/solana-energy-usage-report-november-2021"
                >
                  uses about as much energy as loading this website did.
                </a>
              </p>
            </div>

            <div className="min-w-lg flex-1  flex  flex-col ">
              <h2 className=" font-bold mb-1">Sustainably open source</h2>
              <p className="text-sm">
                A small % of every sale goes to a community treasury that's
                controlled by the sellers. That treasury funds the open source
                development of the platform and other public goods within the
                game industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200">
        <div className="py-2 px-4 max-w-4xl  m-auto w-full justify-between text-center text-gray-500 text-sm">
          <div className="flex w-full justify-between">
            <a
              href="https://github.com/strangemoodfoundation/www"
              className="underline"
            >
              Edit this website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

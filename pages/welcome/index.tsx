import Layout from "../../components/Layout";
import {
  CalculatorIcon,
  LibraryIcon,
  LightningBoltIcon,
  ReceiptTaxIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { Tag, TagGroup } from "../../components/gui";

export default function Welcome() {
  return (
    <div className="h-full flex w-full flex-col ">
      <div className="bg-black p-1 ">
        <div className="text-xs font-mono flex items-center text-gray-100 ">
          <img
            src="/sun.svg"
            className="h-4 w-4 mr-1 dark:bg-gray-500 bg-white"
          />
          <div className="px-1">strangemood</div>
          <div className="h-px bg-white w-full" />
          <div className="px-1">
            <a
              href="https://realms.today/dao/MOOD"
              target={"_blank"}
              className="underline"
            >
              governance
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-1 h-full">
        <div className="px-4 py-8 mx-auto w-full h-full  text-gray-100 flex-1 transition-all  bg-black ">
          <h1 className="font-bold text-xl w-64 pb-2">Join Strangemood.</h1>
          <p className="pb-6">
            Strangemood is collectively controlled by the folks that use it,
            like a co-op.
          </p>

          <div className="flex items-start text-sm mb-1">
            <ReceiptTaxIcon className="h-4 w-4 text-gray-400 mt-0.5" />
            <div className="pl-2 flex-1">
              1% of every sale goes to a community treasury as a contribution
              fee.
            </div>
          </div>

          <div className="flex items-start text-sm mb-1">
            <CalculatorIcon className="h-4 w-4 text-gray-400 mt-0.5" />
            <div className="pl-2 flex-1 ">
              The treasury pays for expenses, like developers, servers, storage,
              and so on.
            </div>
          </div>

          <div className="flex items-start text-sm mb-1">
            <LibraryIcon className="h-4 w-4 text-gray-400 mt-0.5" />
            <div className="pl-2 flex-1">
              The treasury and the contribution fee are controlled by voting
              tokens.
            </div>
          </div>

          <div className="flex items-start text-sm mb-1">
            <LightningBoltIcon className="h-4 w-4 text-gray-400 mt-0.5" />
            <div className="pl-2 flex-1">
              Sellers are given voting tokens automatically on every sale; so
              the sellers primarily control Strangemood.
            </div>
          </div>

          <Link href={"/about"}>
            <a className="py-2 pl-6 text-sm underline flex justify-between text-gray-400">
              Learn more about how Strangemood works
            </a>
          </Link>
        </div>
        <div className="md:border-l border-black w-full flex flex-col max-w-6xl mx-auto">
          <h2 className="font-bold text-xl pb-2 px-4 pt-8 ">
            Which best describes you?
          </h2>
          <p className="px-4 pb-2 text-base text-gray-600 mb-8">
            There's lots of ways to participate in Strangemood, make money, and
            build a new game industry with us.
          </p>
          <div className="flex flex-col">
            <Link href={"/welcome/game-devs"}>
              <a className="border-t mx-4 border-l border-r rounded-sm mb-8 border-b-2 border-black px-4  py-2 text-left flex flex-row hover:border-blue-700 hover:text-blue-700">
                <div className="flex-col flex py-2">
                  <div className="font-bold pb-2 text-lg">I make games</div>
                  <div className="text-sm text-gray-600">
                    Game developers automatically earn votes over the foundation
                    every time they make a sale.
                  </div>
                  <TagGroup>
                    <Tag>Sell more games</Tag>
                    <Tag>Pay less in fees</Tag>
                    <Tag>Own the game store</Tag>
                  </TagGroup>
                </div>
              </a>
            </Link>

            <Link href={"/onboarding/marketplaces"}>
              <button className="border-t mx-4 border-l border-r rounded-sm border-b-2 border-black px-4 mb-8 py-2 text-left flex flex-row transition-all hover:border-blue-700 hover:text-blue-700">
                <div className="flex-col flex py-2">
                  <div className="font-bold pb-2 text-lg ">
                    I want to sell other folks' games to my audience
                  </div>
                  <div className="text-sm text-gray-600">
                    Strangemood lets anyone make a store and collect commissions
                    set by game developers.
                  </div>

                  <TagGroup>
                    <Tag>Make a % of game sales</Tag>
                    <Tag>Make more than ads or sponsorships</Tag>
                  </TagGroup>
                </div>
              </button>
            </Link>

            <Link href={"/onboarding/ecosystem"}>
              <a className="border-t mx-4 border-l border-r rounded-sm border-b-2 border-black px-4 mb-8 py-2 text-left flex flex-row hover:border-blue-700 hover:text-blue-700">
                <div className="flex-col flex py-2">
                  <div className="font-bold pb-2 text-lg ">
                    I hack on open source
                  </div>
                  <div className="text-sm text-gray-600">
                    Open source developers that contribute to the ecosystem can
                    earn voting stake in the protocol and get paid for their
                    work.
                  </div>

                  <TagGroup>
                    <Tag>Get paid</Tag>
                    <Tag>Earn voting stake</Tag>
                    <Tag>Rust & TypeScript</Tag>
                  </TagGroup>
                </div>
              </a>
            </Link>
          </div>
          <div className="px-8 pb-12  h-full flex-1 text-sm inline">
            <div className="font-bold pb-1">Are none of these you? </div>{" "}
            <div>
              There's many other ways to partner with the Strangemood
              foundation. Consider reaching out on one of the following:
            </div>
            <div className="flex py-2 mt-2 gap-2">
              <a
                href="https://discord.com/invite/Y2R3VBcRmA"
                className="flex px-2 py-1 border items-center text-sm border-black rounded-sm"
              >
                Discord
                <img
                  src="/discord.svg"
                  height={14}
                  width={24}
                  className="h-3"
                />
              </a>
              <a
                href="https://twitter.com/strangemoodorg"
                className="flex px-2 py-1 border text-sm border-black items-center rounded-sm"
              >
                Twitter{" "}
                <img
                  src="/twitter.svg"
                  height={14}
                  width={24}
                  className="h-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-black border-gray-200">
        <div className="py-1 px-2 m-auto w-full justify-between text-center text-gray-500 text-sm">
          <div className="flex w-full justify-between">
            <a
              href="https://github.com/strangemoodfoundation/www"
              className="underline"
            >
              Edit this website
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

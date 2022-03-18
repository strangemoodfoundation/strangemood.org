import Layout from "../../components/Layout";
import {
  ArrowLeftIcon,
  CalculatorIcon,
  CheckCircleIcon,
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
      <div className="bg-gray-50 h-full sm:px-4 sm:pt-6 pattern">
        <div className="max-w-4xl  mx-auto flex h-full flex-col ">
          <div className="mb-2 px-2 pb-2 flex gap-4 items-center hidden sm:flex">
            <Link href={"/welcome"}>
              <a className="flex bg-white px-2 py-1 border text-sm border-black items-center rounded-sm">
                <ArrowLeftIcon className="h-3 w-3 mr-2" />
                Back
              </a>
            </Link>

            <div className="text-gray-600 text-sm">
              Sell more games with lower fees.
            </div>
          </div>

          <div className="rounded-t-sm sm:border-l sm:border-r border-t border-black bg-white h-full ">
            <div className="bg-black text-white px-4 py-8 flex flex-col ">
              <h2 className="text-lg font-bold mb-1">
                Apply to join Strangemood's beta
              </h2>
              <p className="">
                Become a founding member of the Strangemood Foundation.
              </p>
            </div>

            <div className="border-b py-8">
              <div className="px-4">
                What happens in the Strangemood Foundation beta?
              </div>
              <div className="px-4 pt-4">
                <div className="flex items-start p-0 m-0">
                  <CheckCircleIcon className="h-4 w-4 mr-2 top-1 relative" />{" "}
                  <div className="flex-1">
                    <span className="font-bold inline">
                      Strangemood negotiates marketing deals on your behalf,
                    </span>{" "}
                    <div className="inline">
                      using the revenue you would have given to Steam. Instead
                      of giving 30% of your revenue to Steam, let's pick a
                      smaller number, give it to a youtuber or streamer instead,
                      and split the difference.
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 pt-4">
                <div className="flex items-start p-0 m-0">
                  <CheckCircleIcon className="h-4 w-4 mr-2 top-1 relative" />{" "}
                  <div className="flex-1">
                    <span className="font-bold inline">
                      Real people go to bat for you.
                    </span>{" "}
                    <div className="inline">
                      We'll open up a private discord channel or telegram group
                      that supports you until you release.
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 pt-4">
                <div className="flex items-start p-0 m-0">
                  <CheckCircleIcon className="h-4 w-4 mr-2 top-1 relative" />{" "}
                  <div className="flex-1">
                    <span className="font-bold inline">You pay nothing.</span>{" "}
                    <div className="inline">
                      Strangemood is an open-source, community-driven
                      organization, built by an economic research group.
                      Strangemood funds development through the 1% contribution
                      fees.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-4">hi</div>
          </div>
        </div>
      </div>
    </div>
  );
}

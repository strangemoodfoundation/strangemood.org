import Layout from "../../components/Layout";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalculatorIcon,
  CheckCircleIcon,
  LibraryIcon,
  LightningBoltIcon,
  ReceiptTaxIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { Tag, TagGroup } from "../../components/gui";
import { FormElement } from "../forms/waitlist";

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

      <div className="bg-gray-50 h-full sm:px-4 sm:pt-6 pattern flex flex-col">
        <div className="max-w-4xl mx-auto flex  flex-col ">
          <div className="rounded-t-sm sm:border-l mb-12 border-b-0 sm:border-b  sm:border-r border-t border-black bg-white h-full flex-1 flex flex-col">
            <div className="bg-black text-white px-4 py-8 flex  flex-col ">
              <h2 className="text-lg font-bold">
                Your application has been received.
              </h2>
            </div>

            <div className="border-b py-8">
              <div className="px-4">What happens now?</div>
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
                      You become an owner of Strangemood.
                    </span>{" "}
                    <div className="inline">
                      When you sell your game, you're automatically given voting
                      tokens on every sale by the Strangemood protocol.
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
          </div>
        </div>
      </div>
    </div>
  );
}

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

          <div className="rounded-t-sm sm:border-l mb-12 border-b-0 sm:border-b  sm:border-r border-t border-black bg-white h-full flex-1 flex flex-col">
            <div className="bg-black text-white px-4 py-8 flex  flex-col ">
              <h2 className="text-lg font-bold mb-1">
                Apply to join Strangemood's beta
              </h2>
              <p className="">
                Become a founding member of the Strangemood Foundation.
              </p>
            </div>

            <div className="border-b py-8">
              <div className="px-4">
                What happens when you crosslist your game on the Strangemood
                beta?
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

            <div className="flex flex-col flex-1">
              <div className="bg-gray-100 w-full font-bold px-4 py-4 border-b">
                Your information
              </div>
              <FormElement label="Your name" hint="" required>
                <input
                  type="text"
                  className="w-full border-b px-4 text-sm py-2"
                  placeholder="Heralt of Miva"
                  required
                />
              </FormElement>

              <FormElement
                label="The name of your game"
                hint="(Or a current working title)"
                required
              >
                <input
                  type="text"
                  className="w-full border-b px-4 text-sm py-2"
                  placeholder="The Pitcher 3"
                  required
                />
              </FormElement>

              <FormElement label="Team or studio size" hint="" required>
                <div className="px-4 py-2">
                  <select
                    name="team-size"
                    required
                    className="border border-black border-b-2 w-full px-1 py-2 rounded-sm"
                  >
                    <option value="small">1-10 people</option>
                    <option value="medium">10-50 people</option>
                    <option value="large">50+ people</option>
                  </select>
                </div>
              </FormElement>

              <FormElement
                label="Release Timeline"
                hint="By 'release', we mean a first purchasable version. So early access counts as a 'release'. This can just be a rough estimate, or even a wildly incorrect estimate."
              >
                <div className="px-4 py-2">
                  <select
                    name="release-schedule"
                    required
                    className="border border-black border-b-2 w-full px-1 py-2 rounded-sm"
                  >
                    <option value="existing-game">
                      I can publish an existing{" "}
                    </option>
                    <option value="short-timeline">Within three months</option>
                    <option value="medium-timeline">Within a year</option>
                    <option value="long-timeline">
                      Beyond a year from now
                    </option>
                  </select>
                </div>
              </FormElement>

              <FormElement
                label="Details"
                hint="Please provide any information you can about your game, your studio, or your background. Links to current marketing materials, screenshots, and videos are helpful."
                required
              >
                <textarea
                  name="details"
                  className="w-full border-b px-4 text-sm py-2 h-64"
                  placeholder="Here's a link to our website and twitter page..."
                  required
                />
              </FormElement>

              <div className=" flex py-4 items-center">
                <div className="h-px flex-1 w-full bg-black " />
                <button className="border hover:opacity-80 mr-4 rounded bg-blue-500 px-4 py-2 text-white border-b-2 border-black flex items-center">
                  Submit your application
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

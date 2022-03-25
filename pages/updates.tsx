import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { FormElement } from "../components/gui";

function TopBar() {
  return (
    <div className="bg-black p-1 ">
      <div className="text-xs font-mono flex items-center text-gray-100 ">
        <img
          src="/sun.svg"
          className="h-4 w-4 mr-1  flexdark:bg-gray-500 bg-white"
        />
        <Link href={"/"}>
          <a className="inline-flex underline">
            <div className="px-1 flex">strangemood</div>
          </a>
        </Link>

        <div className="h-px bg-white w-full" />
        <div className="px-1">
          <a href="/welcome" target={"_blank"} className="underline">
            join
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Updates() {
  return (
    <div className="h-full flex w-full flex-col ">
      <TopBar />
      <div className="bg-gray-50 h-full sm:px-4 sm:pt-6 pattern flex flex-col">
        <div className="max-w-6xl mx-auto flex  flex-col ">
          <div className="rounded-t-sm sm:border-l mb-12 border-b-0 sm:border-b  sm:border-r border-t border-black bg-white h-full flex-1 flex flex-col">
            <div className="bg-black text-white px-4 py-8 flex  flex-col ">
              <h2 className="text-lg font-bold mb-1">
                Get updates from Strangemood in your inbox.
              </h2>
              <p className="text-muted">
                We send infrequent announcements via the magical, decentralized
                technology of email.
              </p>
            </div>

            <form
              className="flex flex-col flex-1"
              action="https://getform.io/f/7576d3ce-a8c5-40aa-8deb-81bcac758ffc"
              method="POST"
            >
              <FormElement label="Your name" hint="" required>
                <input
                  type="email"
                  name="email"
                  className="w-full border-b px-4 text-sm py-2 border-t shadow-inner"
                  placeholder="you@yourname.com"
                  required
                  autoFocus
                />
              </FormElement>

              <FormElement
                label="Info about you (optional)"
                hint="If there's anything you'd like to tell us, feel free to drop it here."
              >
                <textarea
                  name="details"
                  className="w-full border-b px-4 text-sm py-2 h-64 shadow-inner border-t"
                  placeholder="Oh hi, I'm so and so and I make xyz. Please send me emails xyz-related things."
                  required
                />
              </FormElement>

              <div className=" flex py-4 items-center">
                <div className="h-px flex-1 w-full bg-black " />
                <button className="border hover:opacity-80 mr-4 rounded bg-blue-500 px-4 py-1 text-white border-b-2 border-black flex items-center">
                  Submit
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

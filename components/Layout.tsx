import Link from "next/link";
import { useEffect, useState } from "react";

export default function Layout(props: { children: any }) {
  // This is a trick to make contact info available only
  // if javascript has loaded, which prevents scrapers
  // from bombarding the email.
  const [showContact, setShowContact] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowContact(true);
    }, 100);
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      <div className=" w-full  border-b">
        <nav className="px-4 bg-white max-w-4xl w-full py-1 gap-1 mx-auto flex flex-flex items-center justify-between">
          <Link href="/">
            <a className="text-gray-600 font-mono hover:opacity-50 text-center sm:text-sm text-xs m-0 p-0">
              <img src="/sun.svg" className="h-4" />
            </a>
          </Link>

          <div className="flex gap-2 items-center ">
            {/* <a
              href="https://docs.strangemood.org"
              className="underline hover:opacity-50 text-sm "
            >
              docs
            </a> */}
            <a href="/about" className="underline hover:opacity-50  text-sm">
              about
            </a>

            <a
              target={"_blank"}
              href="https://twitter.com/strangemoodorg"
              className=" font-bold text-sm px-2 flex justify-between items-center p-1 rounded-sm  hover:opacity-50 cursor-pointer"
            >
              <img src="/twitter.svg" height={14} width={24} className="h-4" />
            </a>
            <a
              target={"_blank"}
              href="https://github.com/strangemoodfoundation/strangemood"
              className=" font-bold text-sm px-2 flex justify-between items-center p-1 rounded-sm hover:opacity-50 cursor-pointer"
            >
              <img src="/github.svg" height={14} width={24} className="h-4" />
            </a>

            <a
              href="/welcome"
              className="text-sm clear cursor-pointer border-b-2 hover:bg-blue-300 border border-blue-900 bg-blue-500 text-white text-shadow px-4 py-1 font-bold rounded"
            >
              Join
            </a>
          </div>
        </nav>
      </div>

      {props.children}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="py-2 px-4 max-w-4xl  m-auto w-full justify-between text-center text-gray-500 text-sm">
          <div className="flex w-full justify-between">
            <a
              href="https://github.com/strangemoodfoundation/www"
              className="underline"
            >
              Edit this website
            </a>

            <a
              href={
                showContact
                  ? "mailto:hello@strangemood.org"
                  : "mailto:scrapers@strangemood.org"
              }
              className="underline"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

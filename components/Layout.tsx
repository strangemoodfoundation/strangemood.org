import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import Banner from "./Banner";

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
      <Navigation />
      {props.children}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="py-4 px-4  m-auto w-full justify-between text-center text-gray-500">
          <div className="pb-4 w-full justify-between flex">
            Strangemood is an unaudited protocol. Use at your own risk.
          </div>
          <hr className="pb-4 flex" />
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

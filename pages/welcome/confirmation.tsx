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
              <div className="px-4">
                <div className="flex items-start p-0 m-0">
                  <div className="flex-1">
                    <span className="font-bold inline">
                      You get a response within a few days.
                    </span>{" "}
                    <div className="inline">
                      Members of the current Strangemood Foundation will review
                      your application and onboard you when they get a chance.
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  In the meantime, you should checkout Strangemood on Discord or
                  Twitter to get updates.
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
        </div>
      </div>
    </div>
  );
}

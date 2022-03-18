import Layout from "../../components/Layout";

export function FormElement(props: {
  children: any;
  label: string;
  required?: boolean;
  className?: string;
  hint?: string;
}) {
  return (
    <label className={"flex flex-col  " + props.className}>
      <div className="text-sm flex bg-gray-50 dark:bg-gray-800 justify-between font-mono ">
        <div className="pl-4 py-1">{props.label}</div>

        {props.required && (
          <div className="bg-gray-100 dark:bg-gray-700 border-b items-center border-l px-4 py-0.5 text-xs inline-flex">
            required
          </div>
        )}
      </div>

      {props.hint && (
        <div className="bg-gray-50 dark:bg-gray-800 text-muted text-sm px-4 pb-2">
          {props.hint}
        </div>
      )}
      <div className="">{props.children}</div>
    </label>
  );
}

function Tag(props: { children: any }) {
  return (
    <div className="text-xs text-green-600 rounded bg-green-50 py-0.5 px-1">
      {props.children}
    </div>
  );
}

function TagGroup(props: { children: any }) {
  return (
    <div className="flex sm:flex-row flex-col pt-2 gap-2 w-full md:items-center text-gray-300">
      {props.children}
    </div>
  );
}

export default function Welcome() {
  return (
    <div className="h-full flex w-full flex-col ">
      <div className="bg-black p-1 ">
        <div className="text-xs font-mono flex items-center text-white ">
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
        <div className="px-4 py-8 mx-auto w-full h-full bg-gray-50 flex-1 transition-all hover:opacity-100 opacity-60">
          <h1 className="font-bold text-xl w-64 pb-2">Join Strangemood.</h1>
          <p className=" md:pb-12">
            Strangemood is collectively owned by the folks that use it, like a
            co-op.
          </p>
        </div>
        <div className=" md:border-l border-black w-full flex flex-col">
          <h2 className="font-bold text-xl pb-2 px-4 pt-8 ">
            Which best describes you?
          </h2>
          <p className="px-4 pb-2 text-base text-gray-600 mb-8">
            There's lots of ways to participate in Strangemood, make money, and
            build a new game industry with us.
          </p>
          <div className="flex flex-col">
            <button className="border-t mb-8 border-b-2 border-black px-4  py-2 text-left flex flex-row">
              <div className="flex-col flex py-2">
                <div className="font-bold pb-2 text-lg ">I make games</div>
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
            </button>

            <button className="border-t border-b-2 border-black px-4 mb-8 py-2 text-left flex flex-row">
              <div className="flex-col flex py-2">
                <div className="font-bold pb-2 text-lg ">
                  I hack on open source
                </div>
                <div className="text-sm text-gray-600">
                  Open source developers that contribute to the ecosystem can
                  earn voting stake in the protocol and get paid for their work.
                </div>

                <TagGroup>
                  <Tag>Get paid</Tag>
                  <Tag>Earn voting stake</Tag>
                  <Tag>Rust & TypeScript</Tag>
                </TagGroup>
              </div>
            </button>

            <button className="border-t border-b-2 border-black px-4 mb-8 py-2 text-left flex flex-row">
              <div className="flex-col flex py-2">
                <div className="font-bold pb-2 text-lg ">
                  I want to sell games to my audience
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
          </div>
          <div className="px-4  h-full flex-1 text-sm inline">
            <div className="font-bold pb-1">Are none of these you? </div>{" "}
            <div>
              There's many other ways to partner with the Strangemood
              foundation. Consider reaching out on one of the following:
            </div>
            <div className="flex py-2 mt-2 gap-2">
              <a
                href="https://discord.com/invite/Y2R3VBcRmA"
                className="flex px-2 py-1 border  text-sm border-black rounded"
              >
                Discord
              </a>
              <a
                href="https://twitter.com/strangemoodorg"
                className="flex px-2 py-1 border text-sm border-black rounded"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 border-t border-gray-200">
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
      </div>
    </div>
  );
}

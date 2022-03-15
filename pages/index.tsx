import type { NextPage } from "next";
import Layout from "../components/Layout";

function PrimaryLink(props: {
  className?: string;
  children: any;
  href?: string;
}) {
  return (
    <a
      href={props.href}
      className={
        "clear cursor-pointer hover:bg-blue-200 border border-blue-900 bg-blue-100 px-4 py-2 font-bold rounded " +
          props.className || ""
      }
    >
      {props.children}
    </a>
  );
}

function MinorLink(props: {
  className?: string;
  children: any;
  href?: string;
}) {
  return (
    <a
      href={props.href}
      className={
        "clear  cursor-pointer border-b-2 hover:bg-blue-200 border border-gray-900 px-4 py-2 font-bold rounded " +
          props.className || ""
      }
    >
      {props.children}
    </a>
  );
}

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex ">
        <article className="px-4 bg-white max-w-4xl m-auto pt-16 pb-24">
          <section className="pb-16">
            <h1 className="text-left">
              A decentralized marketplace for video games
            </h1>
            <p>
              Strangemood is a new protocol for buying and selling games on the
              internet. 1% of every transaction goes to a community treasury.
              Votes that control that treasury are distributed to game
              developers as they sell. Game developers can even vote to change
              that contribution rate, even to 0% if they want. In other words,
              it's like Steam, if Steam was a co-op.
            </p>
            <div className="mt-8 flex">
              {/* <PrimaryLink href="https://demo.strangemood.org">
              Play with the demo
            </PrimaryLink> */}
              <MinorLink className="ml-0" href="/about">
                Read the FAQ
              </MinorLink>
            </div>
          </section>

          <section className="pb-16">
            <h1 className="text-left mt-6">Wait, it's a protocol?</h1>
            <p>
              Yeah, like Email. No one <i>owns</i> Email and no-one owns
              Strangemood. That means anyone can have their <i>own</i> games
              store, just like anyone can make an email app. It doesn't matter
              if you bought the game from your favorite Twitch streamer's store,
              the money still goes to the game developer, and the game still
              shows up in your library.
            </p>

            <p>
              You can make a store with a bit of javascript (or your favorite
              language).
            </p>
            <pre className="overflow-x-scroll">{`import {
  purchaseListing,
  fetchStrangemoodProgram
} from "@strangemood/strangemood;

const program = await fetchStrangemoodProgram(/* ... */);
await purchaseListing(program, /* ... */);
`}</pre>

            <div className="mt-8">
              {/* <PrimaryLink href="https://docs.strangemood.org" className="mr-2">
              Read the docs [in-dev]
            </PrimaryLink> */}
              <MinorLink href="https://github.com/strangemoodfoundation/strangemood">
                Contribute on Github
              </MinorLink>
            </div>
          </section>
          <section>
            <h1 className="text-left mt-6">How does it work?</h1>
            <p>
              Strangemood is built on <a href="https://solana.com/">Solana</a>;
              an environmentally friendly blockchain with fees less than a
              penny. A transaction uses 3.8 million times less energy than
              Bitcoin; or{" "}
              <a href="https://solana.com/news/solana-energy-usage-report-november-2021">
                about the energy cost of making a google search.
              </a>
            </p>
            <p>
              I know, I know, crypto, <i>oof</i>. It's just the best way to
              ensure that the treasury is owned by members of the co-op, and not
              a company who could use its position to fleece game developers. In
              other words, the Strangemood Foundation is a Decentralized
              Autonomous Organization, or DAO. To join the DAO, sell a game on
              the protocol or build a client application, like a marketplace.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
};

export default Home;

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <nav className="p-2 w-full mx-auto text-center pt-24">
        <span className="font-mono text-center text-xl">
          <span>☼</span> Strangemood <span>☼</span>
        </span>
      </nav>
      <article className="max-w-xl m-auto pt-24 pb-24">
        <h1 className="text-left text-xl font-bold mb-2">
          It's like Steam, but as a co-op
        </h1>
        <p>
          Strangemood is protocol for buying and selling games on the internet.
          5% of every transaction goes to a community treasury. Votes that
          control that treasury are distributed to game developers as they sell.
        </p>

        <p>In other words, it's like Steam, if Steam was a co-op.</p>

        <h1 className="text-left text-xl font-bold mt-8 mb-2">
          Wait, it's a protocol?
        </h1>
        <p>
          Yeah, like Email or RSS. No one <i>owns</i> Email and no-one owns
          Strangemood. That means anyone can have their <i>own</i> games store,
          just like anyone can make an email app. It doesn't matter if you
          bought the game from your favorite Twitch streamer's store, the money
          still goes to the game developer, and the game still shows up in your
          library.
        </p>

        <p>
          Strangemood is just a few functions that anyone can use to create a
          store, a back-office tool, engine plugin, or game library.{" "}
        </p>

        <h1 className="text-left text-xl font-bold mt-8 mb-2">
          How does it work?
        </h1>
        <p>
          Strangemood is a program on Solana; an environmentally friendly
          blockchain. A transaction uses 3.8 million times less energy than
          Bitcoin; or{" "}
          <a href="https://solana.com/news/solana-energy-usage-report-november-2021">
            about the energy cost of making a google search.
          </a>
        </p>
        <p>
          I know, I know, crypto, <i>oof</i>. It's just the best way to ensure
          that the treasury is owned by members of the co-op, and not a company
          who could use its position to fleece game developers.
        </p>
        <p>
          In other words, the Strangemood Foundation is a Decentralized
          Autonomous Organization, or DAO.
        </p>
      </article>
    </div>
  );
};

export default Home;

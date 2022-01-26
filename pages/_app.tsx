import "../styles/styles.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Strangemood | a decentralized game store</title>
      </Head>
      <Component {...pageProps} />
      <Script
        src="https://adapt.strangemood.org/script.js"
        data-site="PKBWBTZD"
        defer
      />
    </>
  );
}

export default MyApp;

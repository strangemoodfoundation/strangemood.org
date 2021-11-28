import "../styles/styles.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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

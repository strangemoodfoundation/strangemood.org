import type { NextPage } from "next";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Logos from "../components/Logos";
import Protocol from "../components/Protocol";

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
        "clear  cursor-pointer hover:bg-blue-200 border border-gray-900 px-4 py-2 font-bold rounded " +
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
      <Banner/>
      <Hero/>
      <Logos/>
      <Protocol/>
      <Features/>
      <FAQ/>
    </Layout>
  );
};

export default Home;

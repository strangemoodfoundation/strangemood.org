import type { NextPage } from "next";
import { useState } from "react";
import Banner from "../components/Banner";
import Character from "../components/Character";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Logos from "../components/Logos";
import Protocol from "../components/Protocol";


const Home: NextPage = () => {
  const [persona, setPersona] = useState('maker');

  return (
    <Layout >
      <Banner persona={persona}/>
      <Character setPersona={setPersona} persona={persona}/>
      <Hero persona={persona}/>
      {/* <Logos/> */}
      <Features persona={persona}/>
      <Protocol persona={persona}/>
      <FAQ/>
    </Layout>
  );
};

export default Home;

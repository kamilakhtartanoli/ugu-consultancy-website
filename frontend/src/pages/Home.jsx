import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Aboutus from "./Aboutus";
import IsoStandardsCards from "./IsoStandardsCards";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <IsoStandardsCards />
      <Aboutus />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import ServicesCards from "./ServicesCard";
import IsoCertification from "./IsoCertification";
import IsoSteps from "./IsoSteps";
import IsoBenefits from "./IsoBenefits";
import IsoTabs from "./IsoTabs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesCards />
      <IsoTabs />
      <IsoCertification />
      <IsoBenefits />
      <IsoSteps />
      <Footer />
    </>
  );
};

export default Home;

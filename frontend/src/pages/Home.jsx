import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Aboutus from "./Aboutus";
import ServicesCards from "./ServicesCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesCards />
      <Aboutus />
      <Footer />
    </>
  );
};

export default Home;

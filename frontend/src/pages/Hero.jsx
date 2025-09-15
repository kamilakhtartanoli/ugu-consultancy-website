import React, { useEffect } from "react";
import { Link } from "react-router";
import Aos from "aos";

const Hero = () => {
  useEffect(()=>{
  Aos.init()
  },[])
  return (
    <section className="relative w-full h-screen flex items-center">
      {/* Background Image */}
      <img
        src="/building.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        
        {/* Left Content */}
        <div className="text-white max-w-xl space-y-4" data-aos='fade-right'>
          <h1 className="text-9xl font-extrabold text-[#fef687]">
            UGU
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">ISO Services</h2>
          <p className="text-base md:text-lg text-slate-300">
            Credible Solutions For Incredible Business
          </p>
          <Link to="/contact">
            <button className="mt-4 bg-[#fef687] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#fef687de] transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-router"; 

const Hero = () => {
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="text-white max-w-xl space-y-4 text-center md:text-left mb-8 md:mb-0">
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

        {/* Right Logo */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src="/logo.png" // replace with your logo path
            alt="UGU Logo"
            className="w-40 sm:w-52 md:w-72 lg:w-80 opacity-50" // 👈 reduced opacity
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

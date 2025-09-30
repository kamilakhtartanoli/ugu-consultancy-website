import React, { useEffect } from "react";
import { Link } from "react-router";
import Aos from "aos";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="relative w-full flex flex-col overflow-hidden">
      {/* Background Hero Section with Diagonal Cut */}
      <div className="relative w-full h-screen flex flex-col clip-diagonal">
        {/* Background Image */}
        <img
          src="/building.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center md:items-start justify-center flex-grow">
          <div
            className="text-white flex flex-col items-center md:items-start text-center md:text-left gap-4"
            data-aos="fade-right"
          >
            <h1 className="text-8xl xl:text-[150px] font-extrabold text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              UGU
            </h1>

            <h2 className="text-2xl ml-2 md:text-3xl font-semibold text-white drop-shadow-md">
              ISO Services
            </h2>

            <p className="text-base ml-2 md:text-lg text-slate-300 drop-shadow-sm max-w-md">
              Credible Solutions For Incredible Business
            </p>

            <Link to="/standards">
              <button className="ml-1 bg-[#ffd111] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#ffcf11d2] transition">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Heading = ({ heading }) => {
  useEffect(() => {
    AOS.init({
      duration: 200, // smooth speed
      easing: "ease-in-out", // animation curve
      once: true, // animate only once
    });
  }, []);

  return (
    <div
      className="w-full relative mt-5 text-center py-10"
      style={{
        backgroundImage: "url('./building.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <h1
        className="relative text-2xl md:text-3xl lg:text-5xl py-6 md:py-10 text-[#dfd111] font-extrabold"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        {heading}
      </h1>
    </div>
  );
};

export default Heading;

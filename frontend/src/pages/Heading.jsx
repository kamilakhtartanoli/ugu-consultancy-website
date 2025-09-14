import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Heading = ({ heading }) => {
  useEffect(() => {
    AOS.init({
      duration: 400, // smooth speed
      easing: "ease-in-out", // animation curve
      once: true, // animate only once
    });
  }, []);

  return (
    <div className="w-full bg-[#484b4d] mt-5 text-center">
      <h1
        className="text-2xl md:text-3xl lg:text-4xl py-6 md:py-10 text-[#fef687] font-extrabold"
        data-aos="fade-right"   // 👈 animate from left
        data-aos-delay="500"   // 👈 delay 500ms
      >
        {heading}
      </h1>
    </div>
  );
};

export default Heading;

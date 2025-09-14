import React, { useEffect } from "react";
import { Target, Eye } from "lucide-react"; // lucide icons
import "aos/dist/aos.css";
import Aos from "aos";

const Vision = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50">
      {/* Cards Container */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div
          data-aos="fade-up"
          className="bg-[#484b4d] rounded-xl shadow-lg p-8 flex flex-col items-start"
        >
          <Target className="w-10 h-10 mb-4 text-white" />
          <h2 className="text-2xl font-semibold mb-4 text-[#fef687]">
            OUR MISSION
          </h2>
          <p className="text-lg leading-relaxed text-white">
            To Deliver Exceptional Services And Adopt Best Practices In The
            International Market, Becoming The Most Trusted Partner For ISO
            Certification.
          </p>
        </div>

        {/* Vision Card */}
        <div
          data-aos="fade-up"
          className="bg-[#fef687] text-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-start"
        >
          <Eye className="w-10 h-10 mb-4 text-[#484b4d]" />
          <h2 className="text-2xl font-semibold mb-4 text-[#484b4d]">
            OUR VISION
          </h2>
          <p className="text-lg leading-relaxed">
            Our Vision Is To Deliver Trustworthy, Transparent, And Globally
            Valued ISO Certification Services That Help Organizations Boost
            Performance, Achieve Compliance, And Build Long-Term Customer
            Loyalty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;

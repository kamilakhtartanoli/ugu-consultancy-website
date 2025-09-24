import React, { useEffect } from "react";
import { Target, Eye } from "lucide-react"; // lucide icons
import "aos/dist/aos.css";
import Aos from "aos";

const Vision = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="py-16 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8"

        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-yellow-100 rounded-xl">
              <Target className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              OUR MISSION
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            To deliver exceptional services and adopt best practices in the
            international market, becoming the most trusted partner for ISO
            certification.
          </p>
        </div>

        {/* Vision Card */}
        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gray-100 rounded-xl">
              <Eye className="w-8 h-8 text-gray-700" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              OUR VISION
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our vision is to deliver trustworthy, transparent, and globally
            valued ISO certification services that help organizations boost
            performance, achieve compliance, and build long-term customer
            loyalty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;

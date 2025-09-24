import React, { useEffect } from "react";
import { FileText, GraduationCap, BadgeCheck } from "lucide-react";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router";

const services = [
  {
    title: "Documentation",
    icon: FileText,
    description:
      "Organizations use the standard to demonstrate the ability to consistently provide products and services that meet customer and regulatory requirements",
  },
  {
    title: "Training",
    icon: GraduationCap,
    description:
      "(EMS), it provices a framework that an organization can follow, rathor than establishing environmenta performance requirements",
  },
  {
    title: "Certification",
    icon: BadgeCheck,
    description:
      "guidance for its use, to onatto organizations to provide safe and heathy workplaces by preventing work related injury and I health, as well as by proactively Improving : OH&S performance.",
  },
];

function ServicesCards() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 mt-10 mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2c2e2f] mb-10">
        <span className="text-[#b3a70d]">OUR</span> Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="border-2 cursor-pointer border-[#D08700] bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full mb-4">
                <Icon size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-800 text-sm mt-2">
                {service.description}
              </p>
              <Link to={"/contact"}>
                <button className="mt-3 border-gray-200 border-2 hover:bg-[#dfb50d] transition ease-in hover:text-white hover:border-[#dfb50d] px-4 py-2 ">
                  Contact
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesCards;

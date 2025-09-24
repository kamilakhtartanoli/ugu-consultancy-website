import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Search,
  GraduationCap,
  FileText,
  ClipboardCheck,
  Building2,
  CheckCircle,
  FileSpreadsheet,
  Award,
  BadgeCheck,
} from "lucide-react";
import Heading from "./Heading";
import { Link } from "react-router";

const otherServices = [
  { title: "Consultation", icon: Briefcase },
  { title: "Gap Analysis", icon: Search },
  { title: "Internal Audit", icon: ClipboardCheck },
  { title: "ADNOC Pre-Qualification Assistance", icon: Building2 },
  { title: "Pre-Audit Assessment", icon: CheckCircle },
  { title: "ICV Documentation", icon: FileSpreadsheet },
];

const mainServices = [
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

const Services = () => {
  return (
    <>
      <Heading heading={"Services We Offer"} />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Services */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-8 text-[#484b4d]"
          >
            Main Services
          </motion.h3>
          <p className="text-center text-gray-800">
            We specialize in all aspect of documentation and are dedicated to
            providing you with exceptional service.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-15 mt-6">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border-2 border-[#D08700] shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
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
                </motion.div>
              );
            })}
          </div>

          {/* Other Services */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-8 text-[#484b4d]"
          >
            Other Services
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border-2 border-[#d087005d]  shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {service.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

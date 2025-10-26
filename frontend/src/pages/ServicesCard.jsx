import React, { useEffect } from "react";
import { FileText, GraduationCap, BadgeCheck } from "lucide-react";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router";

const services = [
  {
    title: "Consultation",
    icon: FileText,
    description:
      "ISO Consultation service provides expert guidance to help your organization implement, maintain, or improve ISO management systems such as ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health & Safety), and more. We work closely with your team to ensure compliance with international standards, streamline processes, and prepare for successful certification",
  },
  {
    title: "Training",
    icon: GraduationCap,
    description:
      "Our ISO Internal Auditor Training equips participants with the knowledge and practical skills needed to effectively plan, conduct, report, and follow up on internal audits based on ISO standards such as ISO 9001, ISO 14001, ISO 45001, and others. This interactive course is designed for individuals responsible for auditing management systems or those seeking to become certified internal auditors. It provides a solid understanding of audit principles in line with ISO 19011 (Guidelines for Auditing Management Systems) and focuses on real-world application within your organization.",
  },
  {
    title: "Certification",
    icon: BadgeCheck,
    description:
      "ISO Certification is a formal recognition that an organization’s management system, processes, or services meet international standards for quality, safety, efficiency, or environmental responsibility. Achieving ISO certification demonstrates your commitment to excellence, compliance, and continual improvement.",
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

import React from "react";
import { Link } from "react-router";
import { CheckCircle, ShieldCheck, Globe2 } from "lucide-react"; // Professional icons

// ✅ Import images
import iso1 from "../assets/iso1.webp";
import iso2 from "../assets/iso2.webp";
import iso3 from "../assets/iso3.webp";
import iso4 from "../assets/iso4.webp";
import iso5 from "../assets/iso5.webp";
import iso6 from "../assets/iso6.webp";
import iso7 from "../assets/iso7.webp";
import iso8 from "../assets/iso8.webp";

const isoData = [
  {
    title: "ISO 9001 – Quality Management System",
    description: `
      ISO 9001:2015 is the most widely recognized quality management system certification. 
      It helps organizations enhance product and service quality, increase efficiency, 
      and improve customer satisfaction.
    `,
    benefits: ["Better process control", "Improved efficiency", "Global recognition"],
    industries: ["Manufacturing", "Trading", "Education", "Healthcare", "Services"],
    image: iso1,
  },
  {
    title: "ISO 14001 – Environmental Management",
    description: `
      ISO 14001:2015 helps organizations minimize their environmental impact 
      by adopting sustainable practices and the PDCA (Plan-Do-Check-Act) approach.
    `,
    benefits: ["Reduced waste", "Cost savings", "Regulatory compliance"],
    industries: ["Construction", "Oil & Gas", "Manufacturing", "Hospitality"],
    image: iso2,
  },
  {
    title: "ISO 45001 – Occupational Health & Safety",
    description: `
      ISO 45001:2018 reduces occupational risks and ensures safe workplace environments.
    `,
    benefits: ["Fewer accidents", "Lower insurance costs", "Workforce trust"],
    industries: ["Construction", "Mining", "Manufacturing", "Logistics"],
    image: iso3,
  },
  {
    title: "ISO 27701 – Privacy Information Management",
    description: `
      ISO 27701 strengthens data privacy systems and ensures GDPR/CCPA compliance.
    `,
    benefits: ["Data security", "Regulatory compliance", "Customer trust"],
    industries: ["IT", "Finance", "Healthcare", "E-commerce"],
    image: iso4,
  },
  {
    title: "ISO 20000 – IT Service Management",
    description: `
      ISO 20000-1:2018 standardizes IT service delivery and aligns it with business needs.
    `,
    benefits: ["Improved IT governance", "Cost-effective service management"],
    industries: ["IT Companies", "Software Houses", "Telecom"],
    image: iso5,
  },
  {
    title: "ISO 27001 – Information Security Management",
    description: `
      ISO 27001 establishes secure processes to protect data, reduce cyber risks, 
      and strengthen resilience.
    `,
    benefits: ["Cyber resilience", "Reduced breaches", "Client confidence"],
    industries: ["IT", "Banks", "Government", "Healthcare"],
    image: iso6,
  },
  {
    title: "ISO 17025 – Laboratory Competence",
    description: `
      ISO 17025:2017 certifies labs for technical competence and reliable results.
    `,
    benefits: ["International credibility", "Better client trust", "Accuracy"],
    industries: ["Testing Labs", "Calibration Centers", "Research Facilities"],
    image: iso7,
  },
  {
    title: "ISO 41001 – Facility Management",
    description: `
      ISO 41001:2018 ensures efficient facility management practices 
      for better building performance and compliance.
    `,
    benefits: ["Better maintenance", "Cost savings", "Compliance"],
    industries: ["Real Estate", "MNCs", "Government", "Hospitality"],
    image: iso8,
  },
];

const Standards = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            ISO Certifications We Provide
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Our ISO Certification services in UAE cover a wide range of standards 
            to enhance business performance, compliance, and global credibility.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-12">
          {isoData.map((iso, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 items-center hover:shadow-xl hover:border-yellow-400 transition`}
            >
              {/* Image - alternate order for even rows */}
              <div
                className={`flex justify-center ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={iso.image}
                  alt={iso.title}
                  className="max-h-64 object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-600 mb-3">
                  {iso.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {iso.description}
                </p>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <CheckCircle size={18} className="text-yellow-500" /> Benefits
                  </h4>
                  <ul className="list-none mt-2 space-y-1 text-gray-600 text-sm">
                    {iso.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-green-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <Globe2 size={18} className="text-yellow-500" /> Industries
                  </h4>
                  <ul className="flex flex-wrap gap-2 mt-2 text-sm text-gray-600">
                    {iso.industries.map((ind, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 bg-gray-100 rounded-md text-gray-700"
                      >
                        {ind}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link to={"/contact"}>
                  <button className="mt-4 inline-block border-2 border-yellow-600 text-yellow-700 px-5 py-2 rounded-lg font-medium hover:bg-yellow-600 hover:text-white transition">
                    Get Certified
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Standards;

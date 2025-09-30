import React, { useState } from "react";
import { Link } from "react-router";

// ✅ Import images from assets
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
    title: "ISO 9001",
    description:
      "Quality Management System Certification (QMS) is one of the most sought after ISO Standard certification in the UAE. QMS Standard (ISO 9001:2015) helps organizations to enhance product quality and improve customer satisfaction.",
    image: iso1,
  },
  {
    title: "ISO 14001",
    description:
      "The ISO 14001 Certificate in UAE requires organizations to adopt a ‘Plan-Do-Check-Act’ business concept. EMS Standard provides guidelines to ensure an environmentally friendly business process is followed.",
    image: iso2,
  },
  {
    title: "ISO 45001",
    description:
      "Occupational Health and Safety Management System (EMS) Certification in UAE is a must-have for organizations to reduce workplace incidents and ensure employee safety. ISO 45001:2018 is structured to integrate with other ISO Standards easily.",
    image: iso3,
  },
  {
    title: "ISO 22301",
    description:
      "ISO 22301 helps organizations prepare for, respond to, and recover from unexpected disruptions.It ensures continuity of critical operations during crises.The standard builds resilience and protects stakeholders’ trust.",
    image: iso4,
  },
  {
    title: "ISO 22000",
    description:
      "ISO 22000 is an international standard for food safety management systems that ensures safe food supply chains from farm to fork. It integrates principles of HACCP and risk-based thinking with management system requirements. The standard helps organizations identify, control, and prevent food safety hazards to protect consumers.",
    image: iso5,
  },
  {
    title: "ISO 27001",
    description:
      "The Information Security Management System Certification in UAE provides guidelines for strengthening IT Security. ISO 27001 Certification reduces cyber-attacks, data leaks, and protects organizational data.",
    image: iso6,
  },
  {
    title: "ISO 50001",
    description:
    "ISO 50001 provides a framework to improve energy efficiency and reduce costs.It helps organizations manage energy performance systematically.The standard supports sustainability and lowers environmental impact.",
    image: iso7,
  },
  {
    title: "ISO 41001",
    description:
      "ISO 41001:2018 Facilities Management Certification helps organizations show efficient Facility Management Systems. It is key for applying to MNC and Government tenders in the UAE.",
    image: iso8,
  },
];

const IsoTabs = () => {
  const [active, setActive] = useState(isoData[0]);

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center">
          {isoData.map((iso, index) => (
            <button
              key={index}
              onClick={() => setActive(iso)}
              className={`px-6 py-3 text-sm md:text-base font-semibold border rounded-sm transition-all duration-300
                ${
                  active.title === iso.title
                    ? "bg-[#dfb50d] text-black border-[#ffd111]"
                    : "bg-gradient-to-b from-[#fdfdfd] to-[#f5f0f0] text-gray-800 border-[#dfb50d] hover:bg-pink-50"
                }
              `}
            >
              {iso.title}
            </button>
          ))}
        </div>

        {/* Active Content */}
        <div className="mt-8 bg-white border border-gray-200 shadow-md rounded-lg p-6 text-gray-700 text-base leading-relaxed grid md:grid-cols-2 gap-6 items-center">
          {/* Text Section */}
          <div>
            <h3 className="text-xl font-bold text-[#b4920a] mb-3">
              {active.title}
            </h3>
            <p>{active.description}</p>
            <Link to={"/contact"}>
              <button className="mt-3 border-gray-200 border-2 hover:bg-[#dfb50d] transition ease-in hover:text-white hover:border-[#dfb50d] px-4 py-2 ">
                Contact
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={active.image}
              alt={active.title}
              className="max-h-60 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsoTabs;

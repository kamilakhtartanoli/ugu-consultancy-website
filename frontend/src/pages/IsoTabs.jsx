import React, { useState } from "react";
import { Link } from "react-router";

const isoData = [
  {
    title: "ISO 9001",
    description:
      "Quality Management System Certification (QMS) is one of the most sought after ISO Standard certification in the UAE. QMS Standard (ISO 9001:2015) helps organizations to enhance product quality and improve customer satisfaction.",
    image: "https://res.cloudinary.com/diocbqpbj/image/upload/v1759468189/iso1_2_hbk27l.webp",
  },
  {
    title: "ISO 14001",
    description:
      "The ISO 14001 Certificate in UAE requires organizations to adopt a ‘Plan-Do-Check-Act’ business concept. EMS Standard provides guidelines to ensure an environmentally friendly business process is followed.",
    image: "https://res.cloudinary.com/diocbqpbj/image/upload/q_auto,f_auto/v1759468189/iso2_2_ntknwf.webp",
  },
  {
    title: "ISO 45001",
    description:
      "Occupational Health and Safety Management System (EMS) Certification in UAE is a must-have for organizations to reduce workplace incidents and ensure employee safety. ISO 45001:2018 is structured to integrate with other ISO Standards easily.",
    image: "https://res.cloudinary.com/diocbqpbj/image/upload/q_auto,f_auto/v1759468189/iso3_2_lafz6p.webp",
  },
  {
    title: "ISO 22301",
    description:
      "ISO 22301 helps organizations prepare for, respond to, and recover from unexpected disruptions.It ensures continuity of critical operations during crises.The standard builds resilience and protects stakeholders’ trust.",
    image: "https://res.cloudinary.com/diocbqpbj/image/upload/q_auto,f_auto/v1759468854/iso4_wkex04.webp",
  },
  {
    title: "ISO 22000",
    description:
      "ISO 22000 is an international standard for food safety management systems that ensures safe food supply chains from farm to fork. It integrates principles of HACCP and risk-based thinking with management system requirements. The standard helps organizations identify, control, and prevent food safety hazards to protect consumers.",
    image: "https://res.cloudinary.com/diocbqpbj/image/upload/q_auto,f_auto/v1759468189/iso5_ofxwne.webp",
  },
  {
    title: "ISO 27001",
    description:
      "The Information Security Management System Certification in UAE provides guidelines for strengthening IT Security. ISO 27001 Certification reduces cyber-attacks, data leaks, and protects organizational data.",
    image: "https://res.cloudinary.com/diocbqpbj/image/upload/q_auto,f_auto/v1759468189/ios6_g35j2v.webp",
  },
  {
    title: "ISO 50001",
    description:
    "ISO 50001 provides a framework to improve energy efficiency and reduce costs.It helps organizations manage energy performance systematically.The standard supports sustainability and lowers environmental impact.",
    image: "https://res.cloudinary.com/diocbqpbj/image/upload/q_auto,f_auto/v1759468420/iso7_dqhwex.webp",
  },
  {
    title: "ISO 41001",
    description:
      "ISO 41001:2018 Facilities Management Certification helps organizations show efficient Facility Management Systems. It is key for applying to MNC and Government tenders in the UAE.",
    image: "https://res.cloudinary.com/diocbqpbj/image/upload/q_auto,f_auto/v1759468189/ios8_p7wbvp.webp",
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

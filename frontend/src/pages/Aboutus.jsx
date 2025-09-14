import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Shield, Globe, Activity, Lock, Utensils } from "lucide-react";
import Vision from "./Vision.jsx";
import Heading from "./Heading.jsx";

const standards = [
  { title: "ISO 9001", desc: "Quality Management", icon: Shield },
  { title: "ISO 14001", desc: "Environmental Management", icon: Globe },
  { title: "ISO 45001", desc: "Occupational Health & Safety", icon: Activity },
  { title: "ISO 27001", desc: "Information Security", icon: Lock },
  { title: "ISO 22000", desc: "Food Safety Management", icon: Utensils },
  { title: "...and many more", desc: "Other ISO Standards", icon: Shield },
];

const Aboutus = () => {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  return (
    <>
      <Heading heading={"About Us"} />
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Images */}
          <div data-aos="zoom-in-down" className="grid grid-cols-2 gap-4">
            <img
              src="/about1.webp"
              alt="About UGU"
              className="rounded-xl shadow-lg object-cover w-full h-[250px] md:h-[350px] col-span-2 md:col-span-1"
            />
            <img
              src="/about2.webp"
              alt="Consultancy"
              className="rounded-xl shadow-lg object-cover w-full h-[250px] md:h-[350px] col-span-2 md:col-span-1"
            />
          </div>

          {/* Right: Text */}
          <div data-aos="zoom-in-down">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              UGU Global Quality Services is a trusted provider of
              internationally recognized ISO certification and compliance
              solutions. We are committed to helping organizations of all sizes
              improve operational efficiency, ensure regulatory compliance, and
              achieve global quality standards.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With a team of experienced consultants, auditors, and industry
              professionals, we specialize in certifications across a wide range
              of ISO standards, including:
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our approach combines technical expertise with a clear
              understanding of each client’s unique business needs. This ensures
              a seamless, effective, and value-driven certification
              process—allowing our clients to focus on what they do best:
              growing their business with confidence.
            </p>
          </div>
        </div>

        {/* ISO Standards Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {standards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl shadow-md p-5 flex items-start space-x-4 hover:shadow-xl transition transform-gpu hover:scale-101"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#484b4d] text-[#fef687] rounded-full">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#c2b507] text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Vision />
      </section>
    </>
  );
};

export default Aboutus;

import React, { useEffect } from "react";
import { CheckCircle, Globe, ShieldCheck } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const standards = [
  {
    id: "iso9001",
    title: "ISO 9001 — Quality Management System",
    desc: `As the international standard that specifies requirements for a quality management system (QMS). Organizations use the standard to demonstrate the ability to consistently provide products and services that meet customer and regulatory requirements.`,
    icon: CheckCircle,
    label: "9001",
  },
  {
    id: "iso14001",
    title: "ISO 14001 — Environmental Management System",
    desc: `International standard that specifies requirements for an effective environmental management system (EMS). It provides a framework that an organization can follow, rather than establishing environmental performance requirements.`,
    icon: Globe,
    label: "14001",
  },
  {
    id: "iso45001",
    title: "ISO 45001 — Occupational Health & Safety",
    desc: `Specifies requirements for an occupational health and safety (OH&S) management system, and gives guidance for its use, to enable organizations to provide safe and healthy workplaces by preventing work-related injury and ill health, as well as by proactively improving its OH&S performance.`,
    icon: ShieldCheck,
    label: "45001",
  },
];

function IsoStandardsCards() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="py-12 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header
          className="mb-8 text-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h2 className="text-3xl md:text-4xl text-[#484b4d] font-extrabold">
            <span className="text-[#c9bd19]">ISO</span> Management System
            Standards
          </h2>
        </header>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {standards.map((s, index) => {
            const Icon = s.icon;
            return (
              <article
                key={s.id}
                className="bg-gray-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* ISO Number Big */}
                <h2 className="text-5xl font-extrabold text-[#c9bd19] mb-2">
                  {s.label}
                </h2>

                {/* ISO Title */}
                <h3 className="text-lg font-semibold text-[#484b4d] flex items-center gap-2">
                  <span className="p-2 rounded-full bg-[#484b4d] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#fef687]" />
                  </span>
                  {s.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IsoStandardsCards;

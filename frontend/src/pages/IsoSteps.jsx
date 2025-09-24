import React from "react";
import {
  FileText,
  Presentation,
  Search,
  Settings,
  ClipboardCheck,
  Award,
} from "lucide-react";

const steps = [
  {
    title: "Document Collection",
    description:
      "Collection of relevant information via Questionnaire & sending the Proposal / Quotation. The project is initiated upon confirmation and payment.",
    icon: FileText,
  },
  {
    title: "Awareness Training",
    description:
      "Our ISO Consultants will perform in-depth training on a wide range of ISO Certification Standards. Empower the team to follow ISO guidelines and ensure compliance requirements are met.",
    icon: Presentation,
  },
  {
    title: "Gap Analysis",
    description:
      "The team will conduct a Gap Analysis, identify potential risks, and devise corrective actions. Business operations will be checked to ensure compliance with ISO guidelines.",
    icon: Search,
  },
  {
    title: "Implementation",
    description:
      "Implement the ISO Certification by following the guidelines the right way. Make corrective actions and ensure product and service quality is maintained at every stage.",
    icon: Settings,
  },
  {
    title: "Internal Audit",
    description:
      "The ISO Certification Audit will be conducted by the Certification Body to ensure the organization meets ISO Standard compliance requirements.",
    icon: ClipboardCheck,
  },
  {
    title: "Certification",
    description:
      "Finally, after all the checks and compliance requirements are met, the organization is certified with the specific ISO Certification Standard.",
    icon: Award,
  },
];

const IsoSteps = () => {
  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Steps in Obtaining ISO Certification in UAE
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            ISO Certification in UAE follows certain steps to ensure your
            business system complies with ISO Certification Standard policies.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-16 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col">
              {/* Connector line – mobile (vertical) */}
              {index < steps.length - 1 && (
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-yellow-400 md:hidden" />
              )}

              {/* Connector line – desktop (zigzag) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
                  {index % 2 === 0 ? (
                    <div className="absolute right-[-3rem] top-1/2 h-1 w-12 bg-yellow-400" />
                  ) : (
                    <>
                      <div className="absolute -bottom-16 left-1/2 w-1 h-16 bg-yellow-400" />
                      <div className="absolute -bottom-16 left-1/2 h-1 w-12 bg-yellow-400" />
                    </>
                  )}
                </div>
              )}

              {/* Step Card */}
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full shadow-md">
                    <step.icon size={26} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed pl-[3.5rem]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsoSteps;

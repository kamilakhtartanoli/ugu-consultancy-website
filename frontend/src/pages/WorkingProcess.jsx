import React from "react";
import { Phone, Handshake, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Phone size={40} className="text-orange-400 mx-auto" />,
    title: "STEP 1",
    desc: "ENQUIRE UGU",
  },
  {
    id: 2,
    icon: <Handshake size={40} className="text-orange-400 mx-auto" />,
    title: "STEP 2",
    desc: "EXPERT MEETS YOU",
  },
  {
    id: 3,
    icon: <Settings size={40} className="text-orange-400 mx-auto" />,
    title: "STEP 3",
    desc: "ANALYZING FOR SOLUTION",
  },
  {
    id: 4,
    icon: <CheckCircle size={40} className="text-orange-400 mx-auto" />,
    title: "STEP 4",
    desc: "100% SOLUTION WITH CERTIFICATION",
  },
];

const WorkingProcess = () => {
  return (
    <section className="py-12 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Our Working Process
      </h2>
      <p className="text-gray-500 mt-2">
        Documentation, Training, Implementation, Audit & Certification
      </p>
      <div className="w-16 h-0.5 bg-orange-400 mx-auto my-4"></div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        {steps.map((step) => (
          <div key={step.id} className="text-center">
            {step.icon}
            <h3 className="font-bold text-gray-800 mt-4">{step.title}</h3>
            <p className="text-gray-600 mt-1 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;

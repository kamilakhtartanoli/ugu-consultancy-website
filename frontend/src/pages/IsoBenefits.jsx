import React from "react";
import {
  Wrench,
  Recycle,
  Settings,
  PackageCheck,
  AlertTriangle,
  LineChart,
  Scale,
  ThumbsUp,
} from "lucide-react";

const benefits = [
  { title: "Improving the operational performance", icon: Wrench },
  { title: "Reduces waste and increase business productivity", icon: Recycle },
  { title: "Increases the effectiveness of core processes", icon: Settings },
  { title: "Improved Quality of products and services", icon: PackageCheck },
  { title: "Risks Assessment & Corrective Actions", icon: AlertTriangle },
  { title: "Increased business opportunities", icon: LineChart },
  { title: "Minimize the Risks and errors", icon: Scale },
  { title: "Customer satisfaction", icon: ThumbsUp },
];

const IsoBenefits = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            HOW ISO CERTIFICATION STANDARDS HELP YOUR BUSINESS?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center group"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 shadow-md group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 mb-4">
                <benefit.icon size={28} />
              </div>

              {/* Title */}
              <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-yellow-700 transition-colors duration-300">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsoBenefits;

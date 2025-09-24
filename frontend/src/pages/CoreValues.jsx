import React from "react";
import { ShieldCheck, Star, Clock } from "lucide-react";

const values = [
  {
    title: "Trust",
    description:
      "We created trust with our clients by providing value-added solutions in a professional and holistic approach.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description:
      "We strive to excel in ISO Standards Consultancy by constantly updating ourselves with the latest information so that our clients get the best guidance.",
    icon: Star,
  },
  {
    title: "Delivery",
    description:
      "Prompt delivery of services is the hallmark of Aurion and we abide by the promise we make.",
    icon: Clock,
  },
];

const CoreValues = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Motto
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            At UGU, we are driven by principles that build long-term client
            relationships and deliver consistent results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full shadow mb-4">
                <item.icon size={26} />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

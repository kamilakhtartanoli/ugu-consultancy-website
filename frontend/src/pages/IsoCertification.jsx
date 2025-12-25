import React from "react";
import content from '../assets/content.webp'

const IsoCertification = () => {
  return (
    <section className="relative w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug">
            How to get ISO Certification in UAE?
          </h2>
          <p className="text-gray-800 leading-relaxed">
            <span className="font-bold">ISO Certification in UAE</span> is an
            essential requirement to maintain quality and uniformity in the
            functioning of companies. The implementation of ISO Certification
            Standards can reduce errors, avoid wastage of time, and make
            operations more effective. Also, ISO Certification Standards are
            globally accepted as a benchmark of quality that can promote the
            credibility of any business.
          </p>
          <p className="text-gray-800 leading-relaxed">
            <span className="font-bold">
              To get an ISO Certification in UAE, it is advisable to get in
              touch with the best ISO Consultants at
            </span>{" "}
            <a
              href="mailto:info@aurioninternational.com"
              className="text-yellow-600 font-semibold hover:underline"
            >
              Info@uguquality.ae
            </a>
            <span className="font-bold">
              . The highly professional ISO Consultants will guide you from the
              first step to the final stage of the ISO Certification process.
            </span>{" "}
            The process starts with a gap analysis, then implementing the
            Quality Management System, conducting an internal audit to check
            compliance, and finally the certification audit and issuance of
            certification.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-6">
            ISO Standards & Its Relevance
          </h3>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-bold">ISO Certificate in UAE</span> empowers a
            brand to adopt quality practices to enhance operational quality. It
            helps businesses stand out from competition and gain customer trust
            easily. ISO Certification Standards provide quality manuals for
            effectively standardizing products and services, enhancing product
            quality, and delivering exceptional customer experience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Furthermore, <span className="font-bold">ISO Certificates in UAE</span> will enable companies to gain
            new work contracts easily. Also, build supplier relations with
            global Multi-National Companies easily and grow business. Connect
            with our <span className="font-bold">ISO Consultants in UAE</span> remotely to know more about the
            latest ISO Certification Packages available at the lowest cost.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={content}
            alt="ISO Certification in UAE"
            className="rounded-2xl shadow-lg w-full md:w-[90%] lg:w-[80%] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default IsoCertification;

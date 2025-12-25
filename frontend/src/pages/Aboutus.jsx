import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Vision from "./Vision.jsx";
import Heading from "./Heading.jsx";
import CoreValues from "./CoreValues.jsx";
import WorkingProcess from "./WorkingProcess.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";

const Aboutus = () => {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  return (
    <>
      <Heading heading={"About Us"} />
      <section className="py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div>
            <img
              src="https://res.cloudinary.com/diocbqpbj/image/upload/q_auto,f_auto/v1759467381/aaa_g8j9xw.webp"
              alt="About UGU"
              className="rounded-xl shadow-lg object-cover w-full h-[250px] md:h-[350px]"
            />
          </div>

          {/* Right: Text */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-bold">UGU Global Quality Services</span> is a trusted provider of
              internationally recognized ISO certification and compliance
              solutions. We are committed to helping organizations of all sizes
              improve operational efficiency, ensure regulatory compliance, and
              achieve global quality standards.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With a team of experienced consultants, auditors, and industry
              professionals, we specialize in certifications across a wide range
              of<span className="font-bold"> ISO standards</span>, including:
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
        <WorkingProcess />
        <CoreValues />
         <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
                <a
                  href="tel:+971545615811"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-black/80 backdrop-blur-md hover:bg-yellow-100  transition shadow-lg"
                >
                  <Phone className="w-6 h-6 text-red-400" />
                </a>
        
                <a
                  href="https://wa.me/971545615811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-black/80 backdrop-blur-md hover:bg-green-500/30 transition shadow-lg"
                >
                  <FaWhatsapp className="w-6 h-6 text-green-400" />
                </a>
              </div>
      </section>
    </>
  );
};

export default Aboutus;

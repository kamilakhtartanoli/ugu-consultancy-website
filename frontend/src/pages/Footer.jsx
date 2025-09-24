import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";
import logo from '../assets/logo.webp'

const Footer = () => {
  return (
    <footer className="bg-[#272729] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <Link to={"/"}>
          <div>
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="UGU Logo"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <h2 className="text-2xl font-bold text-[#ffd111]">UGU</h2>
            </div>
            <p className="mt-2 text-lg font-semibold">
              Global Quality Services
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Credible Solutions For Incredible Business
            </p>
          </div>
        </Link>
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#ffd111]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link to="/" className="hover:text-[#ffcf11d0] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#ffd111] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#ffd111] transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#ffd111] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#ffd111]">
            Contact Us
          </h3>
          <div className="space-y-3 text-gray-200">
            <div className="flex items-center space-x-3">
              <Phone size={18} />
              <span>+971-54-5615811</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} />
              <span>+971-55-6635832</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} />
              <span>Uguservices786@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={18} />
              <span>Abu Dhabi, Hamdan St</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-500 pt-6 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} UGU Global Quality Services. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;

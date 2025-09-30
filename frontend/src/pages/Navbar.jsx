import { Phone } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // 👈 use NavLink instead of Link
import logo from '../assets/logo.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu after clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Function to set active/inactive styles
  const navLinkClasses = ({ isActive }) =>
    `cursor-pointer px-3 py-2 rounded-3xl font-semibold transition ${
      isActive
        ? "bg-[#ffd111] text-black"
        : "hover:bg-[#ffd111] hover:text-black"
    }`;

  return (
    <>
      <nav className="bg-[#252729] text-white sticky top-0 z-50 shadow-md">
        {/* Topbar */}
        <div className="w-full bg-[#251019] text-white px-4 py-1 flex md:flex-row gap-2 md:gap-6 text-sm md:text-base">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            +971-54-5615811
          </span>
        </div>

        {/* Navbar main */}
        <div className="flex justify-between items-center px-7 py-4">
          {/* Logo */}
         <NavLink to="/" className="flex items-center gap-3">
  {/* ✅ Responsive Logo */}
  <img
    src={logo}
    alt="UGU Logo"
    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
  />

  {/* ✅ Responsive Title */}
  <div className="leading-tight">
    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-yellow-300 font-bold">
      UGU GLOBAL QUALITY SERVICES
    </h1>
  </div>
</NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
            <NavLink to="/services" className={navLinkClasses}>
              Services
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
          </ul>

          {/* Mobile Menu Button */}
       <button
  className="md:hidden focus:outline-none"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? (
    <svg
      className="w-10 h-10" // ⬅️ bigger size
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      className="w-10 h-10" // ⬅️ bigger size
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )}
</button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="flex flex-col md:hidden px-5 py-2 pb-4 gap-2 border-t-2 border-[#dfd111] bg-[#252729]/90 backdrop-blur-md transition ease-in">
            <NavLink to="/" onClick={handleLinkClick} className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleLinkClick}
              className={navLinkClasses}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              onClick={handleLinkClick}
              className={navLinkClasses}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className={navLinkClasses}
            >
              Contact Us
            </NavLink>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;

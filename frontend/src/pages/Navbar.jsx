import { Phone } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Closes menu after clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-[#484b4d] text-white sticky top-0 z-50 shadow-md">
        {/* Topbar */}
        <div className="w-full bg-[#251019] text-white px-4 py-2 flex md:flex-row gap-2 md:gap-6 text-sm md:text-base">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            +971-54-565811
          </span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            +971-55-6635832
          </span>
        </div>

        {/* Navbar main */}
        <div className="flex justify-between items-center px-7 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="./logo.png"
              alt="UGU Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-lg font-bold">UGU</h1>
              <p className="text-sm font-medium">ISO Services</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <Link to="/">
              <li className="cursor-pointer px-3 py-2 transition ease-in rounded-3xl hover:text-black hover:bg-[#FEF687] font-semibold">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer px-3 py-2 transition ease-in rounded-3xl hover:text-black hover:bg-[#FEF687] font-semibold">
                About Us
              </li>
            </Link>
            <Link to="/services">
              <li className="cursor-pointer px-3 py-2 transition ease-in rounded-3xl hover:text-black hover:bg-[#FEF687] font-semibold">
                Services
              </li>
            </Link>
            <Link to="/contact">
              <li className="cursor-pointer px-3 py-2 transition ease-in rounded-3xl hover:text-black hover:bg-[#FEF687] font-semibold">
                Contact Us
              </li>
            </Link>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
          <ul className="flex flex-col md:hidden px-5 py-2 pb-4 gap-2 border-t-2 border-[#fef687] bg-[#484b4d]">
            <Link to="/" onClick={handleLinkClick}>
              <li className="cursor-pointer px-3 py-2 hover:bg-[#06369e] font-semibold">
                Home
              </li>
            </Link>
            <Link to="/about" onClick={handleLinkClick}>
              <li className="cursor-pointer px-3 py-2 hover:bg-[#06369e] font-semibold">
                About Us
              </li>
            </Link>
            <Link to="/services" onClick={handleLinkClick}>
              <li className="cursor-pointer px-3 py-2 hover:bg-[#06369e] font-semibold">
                Services
              </li>
            </Link>
            <Link to="/contact" onClick={handleLinkClick}>
              <li className="cursor-pointer px-3 py-2 hover:bg-[#06369e] font-semibold">
                Contact Us
              </li>
            </Link>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;

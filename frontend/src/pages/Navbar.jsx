import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `px-4 py-2 text-sm font-semibold rounded-xl transition ${
      isActive
        ? "bg-[#ffd111] text-black"
        : "text-white hover:bg-[#ffd111] hover:text-black"
    }`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/100 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/diocbqpbj/image/upload/q_auto,f_auto/v1759467528/logo_jwpsjx.webp"
            alt="UGU Logo"
            className="w-12 h-12 md:w-18 md:h-18"
          />
          <span className="text-yellow-500 font-extrabold tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl">
            UGU GLOBAL QUALITY SERVICES
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-4">
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
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-500 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mx-6 mt-2 px-6 py-4 bg-black/60 backdrop-blur-sm rounded-xl flex flex-col gap-3">
          <NavLink onClick={() => setMenuOpen(false)} to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/services" className={navLinkClasses}>
            Services
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;

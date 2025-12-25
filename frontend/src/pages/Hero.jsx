import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-out-cubic",
      once: true,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }) =>
    `px-4 py-2 text-sm font-semibold rounded-xl transition ${
      isActive
        ? "bg-[#ffd111] text-black"
        : "text-white hover:bg-[#ffd111] hover:text-black"
    }`;

  return (
    <section className="relative w-full h-screen landscape:h-[112vh] overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet="/isohero.avif" type="image/avif" />
          <img
            src="/isohero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-black/100 backdrop-blur-md shadow-lg"
            : ""
        }`}
      >
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

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-4">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About</NavLink>
            <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-yellow-500 text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mx-6 mb-4 px-6 py-4 bg-black/80 backdrop-blur-md rounded-xl flex flex-col gap-3">
            <NavLink onClick={() => setMenuOpen(false)} to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/about" className={navLinkClasses}>About</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/services" className={navLinkClasses}>Services</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/contact" className={navLinkClasses}>Contact</NavLink>
          </div>
        )}
      </header>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center md:items-start pt-40">
        <div
          data-aos="fade-right"
          className="text-white flex flex-col gap-4 items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-7xl sm:text-8xl xl:text-[150px] font-extrabold drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            UGU
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold">
            ISO Services
          </h2>

          <p className="text-base md:text-lg text-slate-300 max-w-md">
            Credible Solutions For Incredible Business
          </p>

          <Link to="/standards">
            <button className="mt-2 bg-[#ffd111] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#ffcf11d2] transition">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      {/* ================= FLOATING ICONS ================= */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <a
          href="tel:+971545615811"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-black/80 hover:bg-yellow-200 transition shadow-lg"
        >
          <Phone className="w-6 h-6 text-red-400" />
        </a>

        <a
          href="https://wa.me/971545615811"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-black/80 hover:bg-green-500/30 transition shadow-lg"
        >
          <FaWhatsapp className="w-6 h-6 text-green-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

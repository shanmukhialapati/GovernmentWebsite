import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaUniversity, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (paths) => paths.includes(currentPath);

  const baseLinkClass =
    "flex items-center gap-1 font-semibold text-[15px] px-4 py-2 rounded-md transition-all duration-200";

  const activeClass = "bg-[#E8F0FE] text-[#0B3D91]";
  const inactiveClass = "text-slate-700 hover:text-[#0B3D91]";

  const getStyle = (paths) =>
    `${baseLinkClass} ${isActive(paths) ? activeClass : inactiveClass}`;

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="bg-[#0B3D91] text-white text-sm py-2 px-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>Government Education Resource Portal</p>
          <p>Official Teacher Welfare & Resource Platform</p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={closeMobileMenu}
        >
          <div className="bg-[#0B3D91] p-3 rounded-lg">
            <FaUniversity className="text-white text-2xl" />
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#0B3D91] leading-tight">
              Teacher Portal
            </h1>
            <p className="text-[12px] tracking-wide text-gray-600">
              Government Education Department
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link to="/" className={getStyle(["/"])}>
            Home
          </Link>

          <Link to="/about" className={getStyle(["/about"])}>
            About
          </Link>

          <div className="relative group">
            <button
              className={getStyle([
                "/activities",
                "/newsletters",
                "/downloads",
              ])}
            >
              Activities
              <FaChevronDown size={10} />
            </button>

            <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                to="/activities"
                className="block px-4 py-3 text-sm hover:bg-[#E8F0FE] hover:text-[#0B3D91]"
              >
                Activities Overview
              </Link>

              <Link
                to="/newsletters"
                className="block px-4 py-3 text-sm hover:bg-[#E8F0FE] hover:text-[#0B3D91]"
              >
                Newsletters
              </Link>
              <Link
                to="/downloads"
                className="block px-4 py-3 text-sm hover:bg-[#E8F0FE] hover:text-[#0B3D91]"
              >
                Downloads
              </Link>
            </div>
          </div>
          <Link
            to="/government-updates"
            className={getStyle(["/government-updates"])}
          >
            Government Updates
          </Link>

          <Link to="/membership" className={getStyle(["/membership"])}>
            Membership Plans
          </Link>

          <Link to="/contact" className={getStyle(["/contact"])}>
            Contact
          </Link>

          <Link
            to="/login"
            className="ml-3 bg-[#0B3D91] hover:bg-[#072c6b] text-white px-5 py-2 rounded-md font-medium transition-all duration-200"
          >
            Login / Register
          </Link>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-[#0B3D91]"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-2 shadow-lg">
          <Link to="/" className={getStyle(["/"])} onClick={closeMobileMenu}>
            Home
          </Link>

          <Link
            to="/about"
            className={getStyle(["/government-updates"])}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/government-updates"
            className={getStyle(["/government-updates"])}
            onClick={closeMobileMenu}
          >
            Government Updates
          </Link>

          <div className="flex flex-col">
            <button
              onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
              className={`${baseLinkClass} justify-between ${
                isActive(["/activities", "/newsletters", "/downloads"])
                  ? activeClass
                  : inactiveClass
              }`}
            >
              Activities
              <FaChevronDown
                size={10}
                className={`transition-transform ${
                  isMobileAboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMobileAboutOpen && (
              <div className="pl-6 flex flex-col gap-2 mt-2">
                <Link
                  to="/activities"
                  onClick={closeMobileMenu}
                  className="text-sm text-gray-600 hover:text-[#0B3D91]"
                >
                  Activities Overview
                </Link>

                <Link
                  to="/newsletters"
                  onClick={closeMobileMenu}
                  className="text-sm text-gray-600 hover:text-[#0B3D91]"
                >
                  Newsletters
                </Link>

                <Link
                  to="/downloads"
                  onClick={closeMobileMenu}
                  className="text-sm text-gray-600 hover:text-[#0B3D91]"
                >
                  Downloads
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/membership"
            className={getStyle(["/membership"])}
            onClick={closeMobileMenu}
          >
            Membership Plans
          </Link>

          <Link
            to="/contact"
            className={getStyle(["/contact"])}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>

          <Link
            to="/login"
            onClick={closeMobileMenu}
            className="bg-[#0B3D91] text-white px-4 py-2 rounded-md text-center mt-2"
          >
            Login / Register
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

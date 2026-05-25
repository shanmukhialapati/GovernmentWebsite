import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaUniversity,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B3D91] text-white pt-14 pb-6 mt-16 border-t-4 border-[#FFD700]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Portal Info */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-5">
            <div className="bg-white p-3 rounded-lg">
              <FaUniversity className="text-[#0B3D91] text-xl" />
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight">
                Teacher Portal
              </h2>
              <p className="text-sm text-[#FFD700]">
                Government Education Department
              </p>
            </div>
          </Link>

          <p className="text-sm text-gray-200 leading-relaxed mb-6">
            Official platform for teacher resources, government updates,
            educational activities, newsletters, and membership services.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="p-2.5 bg-white/10 rounded-full hover:bg-[#FFD700] hover:text-[#0B3D91] transition-all duration-300"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="#"
              className="p-2.5 bg-white/10 rounded-full hover:bg-[#FFD700] hover:text-[#0B3D91] transition-all duration-300"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href="#"
              className="p-2.5 bg-white/10 rounded-full hover:bg-[#FFD700] hover:text-[#0B3D91] transition-all duration-300"
            >
              <FaYoutube size={14} />
            </a>

            <a
              href="#"
              className="p-2.5 bg-white/10 rounded-full hover:bg-[#FFD700] hover:text-[#0B3D91] transition-all duration-300"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-5 border-b-2 border-[#FFD700] inline-block pb-1">
            Quick Links
          </h2>

          <ul className="space-y-3 text-sm text-gray-200">
            <li>
              <Link
                to="/"
                className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
              >
                ▸ Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
              >
                ▸ About
              </Link>
            </li>

            <li>
              <Link
                to="/government-updates"
                className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
              >
                ▸ Government Updates
              </Link>
            </li>

            <li>
              <Link
                to="/activities"
                className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
              >
                ▸ Activities
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
              >
                ▸ Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-bold mb-5 border-b-2 border-[#FFD700] inline-block pb-1">
            Resources
          </h2>

          <ul className="space-y-3 text-sm text-gray-200">
            <li>
              <Link
                to="/downloads"
                className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
              >
                ▸ Downloads
              </Link>
            </li>

            <li>
              <Link
                to="/newsletters"
                className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
              >
                ▸ Newsletters
              </Link>
            </li>

            <li>
              <Link
                to="/membership"
                className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
              >
                ▸ Membership Plans
              </Link>
            </li>

            <li>
              <Link
                to="/profile"
                className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
              >
                ▸ User Profile
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="hover:text-[#FFD700] transition-colors flex items-center gap-2"
              >
                ▸ Login/Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-5 border-b-2 border-[#FFD700] inline-block pb-1">
            Contact Us
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#FFD700] mt-1" size={15} />

              <p className="text-sm text-gray-200 leading-relaxed">
                Department of Education, Government Office, Hyderabad, Telangana
                - 500001
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#FFD700]" size={14} />

              <p className="text-sm text-gray-200">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#FFD700]" size={14} />

              <p className="text-sm text-gray-200">
                support@teacherportal.gov.in
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10 mt-12 pt-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-300 text-center">
            © {new Date().getFullYear()} Government Education Department. All
            Rights Reserved.
          </p>

          <div className="flex gap-4 text-xs text-gray-300">
            <Link to="#" className="hover:text-[#FFD700] transition-colors">
              Privacy Policy
            </Link>

            <Link to="#" className="hover:text-[#FFD700] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

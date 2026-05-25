import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaTools, FaArrowLeft, FaEnvelope } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-10 text-center">
        <div className="w-24 h-24 mx-auto bg-[#E8F0FE] rounded-full flex items-center justify-center mb-6">
          <FaTools className="text-[#0B3D91] text-4xl" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B3D91] mb-4">
          Coming Soon
        </h1>

        {/* Sub Text */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          This page is currently under development.
          <br />
          We are working hard to bring new features and updates to the
          Government Teacher Portal.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 bg-[#0B3D91] hover:bg-[#072c6b] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          <Link
            to="/contact"
            className="border border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Government Education Resource Portal
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;

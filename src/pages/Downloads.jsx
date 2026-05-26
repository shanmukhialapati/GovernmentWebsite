import React, { useState } from "react";
import { FaFilePdf, FaFileWord, FaDownload, FaFolderOpen, FaTimes, FaCrown, FaCheck, FaSpinner } from "react-icons/fa";

const downloadCategories = [
  {
    title: "Administrative Forms",
    files: [
      { id: 101, name: "Casual Leave (CL) Application Form", type: "pdf", size: "120 KB" },
      { id: 102, name: "Medical Reimbursement Form", type: "pdf", size: "350 KB" },
      { id: 103, name: "Transfer Request Format", type: "word", size: "45 KB" },
    ]
  },
  {
    title: "Academic Resources",
    files: [
      { id: 201, name: "10th Class Model Question Papers 2026", type: "pdf", size: "2.1 MB" },
      { id: 202, name: "Standard Lesson Plan Template", type: "word", size: "80 KB" },
      { id: 203, name: "Academic Calendar 2026-27", type: "pdf", size: "1.5 MB" },
    ]
  },
  {
    title: "Software & Utilities",
    files: [
      { id: 301, name: "Teacher Biometric Attendance App (APK)", type: "software", size: "15 MB" },
      { id: 302, name: "Marks Entry Excel Macro Tool", type: "excel", size: "500 KB" },
    ]
  }
];

const Downloads = () => {
  const [showPlans, setShowPlans] = useState(false);
  const [paymentState, setPaymentState] = useState("idle");
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePayment = (plan) => {
    setSelectedPlan(plan);
    setPaymentState("processing");
    
    setTimeout(() => {
      setPaymentState("success");
    }, 2500);
  };

  const closeModal = () => {
    setShowPlans(false);
    setTimeout(() => {
      setPaymentState("idle");
      setSelectedPlan("");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-3">Resource Downloads</h1>
          <p className="text-gray-600">Access and download important forms, academic materials, and official software utilities.</p>
        </div>

        <div className="space-y-8">
          {downloadCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#E8F0FE] px-5 py-3 border-b border-gray-200 flex items-center gap-3">
                <FaFolderOpen className="text-[#0B3D91] text-xl" />
                <h2 className="text-lg font-bold text-[#0B3D91]">{category.title}</h2>
              </div>
              
              <div className="divide-y divide-gray-100">
                {category.files.map(file => (
                  <div key={file.id} className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      {file.type === 'word' ? (
                        <FaFileWord className="text-blue-600 text-2xl" />
                      ) : (
                        <FaFilePdf className="text-red-500 text-2xl" />
                      )}
                      <div>
                        <p className="font-semibold text-gray-800">{file.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{file.type.toUpperCase()} • {file.size}</p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => alert(`Starting download for: ${file.name}`)}
                      className="flex items-center justify-center gap-2 text-sm bg-white border border-gray-300 hover:border-[#0B3D91] hover:text-[#0B3D91] font-medium px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
                    >
                      <FaDownload /> Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 bg-gradient-to-r from-[#0B3D91] to-[#1a55b8] rounded-xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-xl font-bold mb-2">Looking for Premium Materials?</h3>
            <p className="text-blue-100 text-sm">Upgrade your membership to access exclusive training videos and advanced study materials.</p>
          </div>
          <button 
            onClick={() => setShowPlans(true)}
            className="bg-[#FFD700] text-[#0B3D91] font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors whitespace-nowrap"
          >
            View Membership Plans
          </button>
        </div>

      </div>

      {showPlans && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl relative animate-fadeIn overflow-hidden">
        
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl md:text-2xl font-bold text-[#0B3D91] flex items-center gap-2">
                <FaCrown className="text-[#FFD700] text-2xl" /> Upgrade Membership
              </h2>
              {paymentState === "idle" && (
                <button 
                  onClick={closeModal} 
                  className="text-gray-400 hover:text-red-500 transition-colors p-1"
                >
                  <FaTimes size={24} />
                </button>
              )}
            </div>

            <div className="p-6 md:p-8">
              
              {paymentState === "idle" && (
                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800">Basic Access</h3>
                    <p className="text-3xl font-black text-[#0B3D91] my-4">Free</p>
                    <ul className="space-y-3 mb-8 text-sm text-gray-600">
                      <li className="flex items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/> Access to Public Updates</li>
                      <li className="flex items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/> Download Basic Forms</li>
                      <li className="flex items-center gap-2 opacity-40"><FaTimes className="text-red-500 flex-shrink-0"/> No Premium PDFs</li>
                      <li className="flex items-center gap-2 opacity-40"><FaTimes className="text-red-500 flex-shrink-0"/> No Training Videos</li>
                    </ul>
                    <button disabled className="w-full py-3 bg-gray-100 text-gray-400 rounded-lg font-bold cursor-not-allowed border border-gray-200">
                      Current Plan
                    </button>
                  </div>

                  <div className="border-2 border-[#0B3D91] rounded-xl p-6 shadow-xl relative transform md:-translate-y-2 bg-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-[#0B3D91] px-4 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                      Recommended
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Premium Teacher</h3>
                    <p className="text-3xl font-black text-[#0B3D91] my-4">
                      ₹499 <span className="text-sm text-gray-500 font-normal">/ year</span>
                    </p>
                    <ul className="space-y-3 mb-8 text-sm text-gray-600">
                      <li className="flex items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/> Everything in Basic</li>
                      <li className="flex items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/> Unlimited Premium PDFs</li>
                      <li className="flex items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/> Exclusive Training Videos</li>
                      <li className="flex items-center gap-2"><FaCheck className="text-green-500 flex-shrink-0"/> Priority Support</li>
                    </ul>
                    <button 
                      onClick={() => handlePayment('Premium')}
                      className="w-full py-3 bg-[#0B3D91] hover:bg-[#072c6b] text-white rounded-lg font-bold transition-all hover:shadow-lg active:scale-95"
                    >
                      Pay Now (₹499)
                    </button>
                  </div>

                </div>
              )}

              {paymentState === "processing" && (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fadeIn">
                  <FaSpinner className="animate-spin text-[#0B3D91] text-6xl mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800">Processing Payment...</h3>
                  <p className="text-gray-500 mt-2">Connecting to secure gateway. Please do not close or refresh this window.</p>
                </div>
              )}

              {paymentState === "success" && (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-fadeIn">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <FaCheck className="text-green-500 text-5xl animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
                  <p className="text-gray-600 mb-8 max-w-md">
                    Thank you! Welcome to the <strong className="text-[#0B3D91] text-lg">{selectedPlan}</strong> plan. Your account has been upgraded successfully.
                  </p>
                  <button 
                    onClick={closeModal} 
                    className="px-8 py-3 bg-[#0B3D91] text-white rounded-lg font-bold hover:bg-[#072c6b] transition-all hover:shadow-lg"
                  >
                    Access Premium Content
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Downloads;
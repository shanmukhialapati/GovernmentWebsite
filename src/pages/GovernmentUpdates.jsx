import React, { useState } from "react";
import { FaSearch, FaFileAlt, FaBullhorn, FaCalendarAlt, FaTimes } from "react-icons/fa";

const updatesData = [
  { 
    id: 1, 
    title: "Recent Teachers Transfer Guidelines 2026", 
    date: "May 24, 2026", 
    category: "GOs", 
    isNew: true,
    content: "According to the recent guidelines issued by the Education Department, teachers with a minimum of 3 years of service in their current station are eligible for transfer. The entire process will be conducted online via the official portal. Counseling dates will be announced shortly in the upcoming circulars." 
  },
  { 
    id: 2, 
    title: "DA Hike Announcement for State Government Teachers", 
    date: "May 20, 2026", 
    category: "Notifications", 
    isNew: true,
    content: "The State Government is pleased to announce a 4% increase in the Dearness Allowance (DA) for all teaching and non-teaching staff. This hike will be effective retroactively from January 1, 2026. The arrears will be credited along with the June salary." 
  },
  { 
    id: 3, 
    title: "New Academic Calendar for 2026-27 Released", 
    date: "May 15, 2026", 
    category: "Circulars", 
    isNew: false,
    content: "The academic calendar for the year 2026-27 has been finalized. Schools will reopen on June 12, 2026. The calendar includes 220 working days. Formative and Summative assessment schedules have been slightly adjusted. Headmasters are requested to download the detailed PDF for planning." 
  },
  { 
    id: 4, 
    title: "Biometric Attendance Mandatory Guidelines", 
    date: "May 10, 2026", 
    category: "GOs", 
    isNew: false,
    content: "It is hereby ordered that Aadhaar-based Biometric Attendance System (ABAS) is strictly mandatory for all teaching staff across the state. Manual attendance will no longer be considered valid for salary processing starting from next month." 
  },
  { 
    id: 5, 
    title: "Summer Vacation Extension Notice", 
    date: "May 01, 2026", 
    category: "Circulars", 
    isNew: false,
    content: "Due to the prevailing severe heatwave conditions across the state, the government has decided to extend the summer vacation for all public and private schools by one week. The revised reopening date will be intimated shortly." 
  },
  { 
    id: 6, 
    title: "Guidelines for conducting Parent-Teacher Meetings (PTM)", 
    date: "April 28, 2026", 
    category: "Circulars", 
    isNew: false,
    content: "All schools must conduct a mandatory Parent-Teacher Meeting on the second Saturday of every month. Teachers are required to maintain a register of parent signatures and discuss student progress, attendance, and behavioral aspects comprehensively." 
  },
  { 
    id: 7, 
    title: "Sanction of Maternity Leave for Contract Teachers", 
    date: "April 15, 2026", 
    category: "GOs", 
    isNew: false,
    content: "The Government extends the benefit of 180 days of paid maternity leave to female teachers working on a contract basis, bringing them on par with regular employees. This order comes into force with immediate effect." 
  },
  { 
    id: 8, 
    title: "State Level Best Teacher Awards 2026 - Call for Nominations", 
    date: "April 05, 2026", 
    category: "Notifications", 
    isNew: false,
    content: "Nominations are invited for the 'State Best Teacher Awards 2026'. Eligible teachers with exceptional track records and innovative teaching methods can apply through their respective District Educational Officers before June 30, 2026." 
  }
];

const GovernmentUpdates = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoc, setSelectedDoc] = useState(null); 

  const tabs = ["All", "GOs", "Notifications", "Circulars"];

  const filteredUpdates = updatesData.filter(update => {
    const matchesTab = activeTab === "All" || update.category === activeTab;
    const matchesSearch = update.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-3">Government Updates & GOs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay informed with the latest official orders, circulars, and notifications from the Education Department.</p>
        </div>

        <div className="mb-8">
          <marquee className="font-semibold text-lg text-[#C00000] tracking-wide" scrollamount="6">
            <span className="inline-block px-2 py-0.5 mr-2 bg-red-600 text-white text-xs font-black rounded animate-pulse shadow-sm">NEW</span>
            DA Hike Announcement for State Government Teachers released. &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            Recent Teachers Transfer Guidelines 2026 are now available in GOs section. Please check before the deadline.
          </marquee>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab ? "bg-[#0B3D91] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search updates..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="space-y-4">
          {filteredUpdates.length > 0 ? (
            filteredUpdates.map(update => (
              <div key={update.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-l-[#0B3D91]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#E8F0FE] p-3 rounded-full mt-1">
                    {update.category === "GOs" ? <FaFileAlt className="text-[#0B3D91]" /> : update.category === "Notifications" ? <FaBullhorn className="text-[#0B3D91]" /> : <FaCalendarAlt className="text-[#0B3D91]" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">{update.category}</span>
                      {update.isNew && <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-600 rounded animate-pulse">NEW</span>}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{update.title}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-2">
                      <FaCalendarAlt size={12} /> {update.date}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedDoc(update)}
                  className="text-[#0B3D91] font-medium border border-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap self-start sm:self-center"
                >
                  View Document
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-500">No updates found for your search.</div>
          )}
        </div>
      </div>

      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl relative max-h-[90vh] flex flex-col animate-fadeIn">
            
            <div className="p-6 border-b border-gray-200 flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold px-3 py-1 bg-[#E8F0FE] text-[#0B3D91] rounded-full inline-block mb-3">
                  {selectedDoc.category}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">{selectedDoc.title}</h2>
                <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                  <FaCalendarAlt /> Published on: {selectedDoc.date}
                </p>
              </div>
              <button 
                onClick={() => setSelectedDoc(null)} 
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedDoc.content}
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">
                *This is a digital copy for reference. Official signed documents can be downloaded by premium members.*
              </p>
            </div>

            <div className="p-4 border-t border-gray-200 flex justify-end gap-3 bg-gray-50 rounded-b-2xl">
              <button 
                onClick={() => setSelectedDoc(null)} 
                className="px-5 py-2 text-gray-600 font-medium hover:bg-gray-200 rounded-lg transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => alert("Premium Feature: Sign in required to download official PDF.")}
                className="px-5 py-2 bg-[#0B3D91] text-white font-medium rounded-lg hover:bg-[#072c6b] transition-colors"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default GovernmentUpdates;
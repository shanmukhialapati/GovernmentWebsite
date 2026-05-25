import React, { useState } from "react";
import { FaBookOpen, FaDownload, FaTimes } from "react-icons/fa";

const newslettersData = [
  { 
    id: 1, 
    title: "Vidya Darshini", 
    issue: "May 2026 Edition", 
    color: "bg-blue-500", 
    topics: "New Curriculum, Tech in Classrooms",
    content: "Welcome to the May 2026 edition of Vidya Darshini. In this issue, we deeply explore the integration of modern digital tools in daily lesson planning. The State Education Board has recently revised the STEM curriculum to make it more interactive. We have also included a special section on 'Classroom Management Techniques' contributed by senior headmasters from various districts. Read through to find the winners of the inter-district science exhibition."
  },
  { 
    id: 2, 
    title: "Teacher's Voice", 
    issue: "April 2026 Edition", 
    color: "bg-green-500", 
    topics: "Summer Training, Health Benefits",
    content: "This month's Teacher's Voice highlights the upcoming summer training workshops scheduled for May. We have detailed the registration process for the 5-day orientation program. Additionally, an exclusive interview with the Health Minister sheds light on the newly revised health insurance schemes (EHS) covering extended family members of government teachers. Don't miss the article on 'Maintaining Work-Life Balance' by Dr. K. Srinivas."
  },
  { 
    id: 3, 
    title: "EduFocus Magazine", 
    issue: "March 2026 Edition", 
    color: "bg-purple-500", 
    topics: "Board Exams Prep, Mental Health",
    content: "With board exams right around the corner, this issue of EduFocus is dedicated to stress management for both teachers and students. We have compiled a list of 10 effective revision strategies that can be implemented in the final 30 days. Furthermore, expert child psychologists have shared valuable insights on identifying anxiety among 10th-grade students and how educators can provide the necessary emotional support."
  },
  { 
    id: 4, 
    title: "Vidya Darshini", 
    issue: "February 2026 Edition", 
    color: "bg-blue-400", 
    topics: "Sports Meet, Science Fair Winners",
    content: "February was an eventful month! This edition covers the spectacular State-Level Inter-School Sports Meet held in Hyderabad. We feature photographs and interviews with the winning athletes and their PT teachers. We also showcase the innovative projects from the State Science Fair, focusing on renewable energy and water conservation models created by rural school students."
  },
  { 
    id: 5, 
    title: "Teacher's Voice", 
    issue: "January 2026 Edition", 
    color: "bg-teal-500", 
    topics: "Republic Day, New Year Goals",
    content: "Happy New Year to all educators! January's issue focuses on setting realistic academic goals for the second half of the academic year. We also bring you a colorful pictorial coverage of Republic Day celebrations across various ZP High Schools in the state. Read the special column on 'Fostering Patriotism in the Modern Classroom'."
  },
  { 
    id: 6, 
    title: "EduFocus Magazine", 
    issue: "December 2025 Edition", 
    color: "bg-indigo-500", 
    topics: "Half-Yearly Exams, Winter Camps",
    content: "As we wrap up 2025, EduFocus analyzes the state-wide half-yearly examination results. We present statistical data on subject-wise performance and areas needing improvement. The issue also lists government-sponsored winter camps for students excelling in mathematics and literature. Learn how to nominate your brightest students for these camps."
  },
  { 
    id: 7, 
    title: "Vidya Darshini (Special)", 
    issue: "November 2025 Edition", 
    color: "bg-rose-500", 
    topics: "Children's Day, Pedagogy",
    content: "A special edition dedicated to Children's Day! This issue is packed with fun activities, quizzes, and drama scripts that teachers can organize in their schools. It also features a serious pedagogical discussion on 'Play-Way Method of Learning' in primary education, with case studies showing significant improvements in student retention rates."
  },
  { 
    id: 8, 
    title: "Teacher's Voice", 
    issue: "October 2025 Edition", 
    color: "bg-orange-500", 
    topics: "Dasara Holidays, Cultural Fests",
    content: "Embracing the festive spirit, the October edition highlights the cultural diversity celebrated in our schools before the Dasara vacation. It includes a comprehensive guide on organizing eco-friendly Bathukamma and Dasara events on campus. We also address the revised guidelines for mid-day meal schemes during festival months."
  }
];

const Newsletters = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-3">Monthly Newsletters</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our collection of educational magazines, teaching methodologies, and departmental highlights.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newslettersData.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <div className={`${item.color} h-48 flex flex-col items-center justify-center text-white p-4 text-center`}>
                <h3 className="text-2xl font-black uppercase tracking-wider">{item.title}</h3>
                <p className="font-medium mt-2 bg-white/20 px-3 py-1 rounded-full text-sm">{item.issue}</p>
              </div>
              
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{item.title} - {item.issue.split(' ')[0]}</h4>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">Highlights: {item.topics}</p>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button 
                    onClick={() => setSelectedNewsletter(item)}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#0B3D91] hover:bg-[#072c6b] text-white py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <FaBookOpen /> Read
                  </button>
                  <button 
                    onClick={() => alert("Premium Feature: Please Login to Download PDF")} 
                    className="flex-1 flex items-center justify-center gap-2 border border-[#0B3D91] text-[#0B3D91] hover:bg-[#E8F0FE] py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <FaDownload /> PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedNewsletter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl relative max-h-[90vh] flex flex-col animate-fadeIn">
            
            <div className="p-6 border-b border-gray-200 flex justify-between items-start bg-gray-50 rounded-t-2xl">
              <div className="flex items-center gap-4">
                <div className={`${selectedNewsletter.color} w-16 h-20 rounded shadow-md flex items-center justify-center text-white text-xs font-bold text-center p-1`}>
                  {selectedNewsletter.title.split(' ')[0]}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0B3D91]">{selectedNewsletter.title}</h2>
                  <p className="text-sm text-gray-600 font-medium">{selectedNewsletter.issue}</p>
                  <p className="text-xs text-gray-500 mt-1">Highlights: {selectedNewsletter.topics}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedNewsletter(null)} 
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="prose max-w-none text-gray-700 leading-relaxed text-justify">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#0B3D91] first-letter:mr-1 first-letter:float-left">
                  {selectedNewsletter.content}
                </p>
                <p className="mt-4">
                  *More articles and department news are available in the full PDF version.*
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 flex justify-end gap-3 bg-gray-50 rounded-b-2xl">
              <button 
                onClick={() => setSelectedNewsletter(null)} 
                className="px-5 py-2 text-gray-600 font-medium hover:bg-gray-200 rounded-lg transition-colors"
              >
                Close Reader
              </button>
              <button 
                onClick={() => alert("Premium Feature: Sign in required to download official PDF.")}
                className="px-5 py-2 flex items-center gap-2 bg-[#0B3D91] text-white font-medium rounded-lg hover:bg-[#072c6b] transition-colors"
              >
                <FaDownload /> Download Full PDF
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Newsletters;
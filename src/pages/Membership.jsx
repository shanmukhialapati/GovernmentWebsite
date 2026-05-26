import React from "react";
import { Link } from "react-router-dom";
import {
  FaCrown,
  FaCheckCircle,
  FaUsers,
  FaBookOpen,
  FaChalkboardTeacher,
  FaCertificate,
  FaLaptop,
  FaHeadset,
  FaArrowRight,
  FaUniversity,
  FaUserGraduate,
  FaGlobe,
} from "react-icons/fa";

const plans = [
  {
    title: "Basic Membership",
    price: "Free",
    color: "border-blue-200",
    button: "bg-blue-700 hover:bg-blue-800",
    icon: <FaUsers />,
    features: [
      "Access to Government Updates",
      "Teacher News & Announcements",
      "Basic Learning Resources",
      "Community Access",
    ],
  },
  {
    title: "Professional Plan",
    price: "₹499 / Year",
    color: "border-yellow-300",
    button: "bg-yellow-500 hover:bg-yellow-600",
    icon: <FaCrown />,
    popular: true,
    features: [
      "All Basic Features",
      "Premium Training Sessions",
      "Online Workshops",
      "Certification Programs",
      "Priority Support",
      "Downloadable Study Materials",
    ],
  },
  {
    title: "Institution Plan",
    price: "₹1999 / Year",
    color: "border-green-300",
    button: "bg-green-600 hover:bg-green-700",
    icon: <FaUniversity />,
    features: [
      "All Professional Features",
      "Multi-Teacher Access",
      "Institution Dashboard",
      "Advanced Reports",
      "Dedicated Support Team",
      "Custom Learning Programs",
    ],
  },
];

const features = [
  {
    icon: <FaBookOpen />,
    title: "Digital Learning",
    desc: "Access modern digital resources and educational content anytime.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Teacher Training",
    desc: "Participate in workshops, webinars, and skill development programs.",
  },
  {
    icon: <FaCertificate />,
    title: "Certification",
    desc: "Earn government-recognized certificates after course completion.",
  },
  {
    icon: <FaLaptop />,
    title: "Online Classes",
    desc: "Attend online seminars and professional development sessions.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Get quick support and assistance from our education team.",
  },
  {
    icon: <FaGlobe />,
    title: "National Access",
    desc: "Connect with teachers and institutions across the country.",
  },
];

const MembershipPlans = () => {
  return (
    <div className="bg-[#F5F8FF] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B3D91] to-[#174EA6] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Membership Plans for Teachers & Institutions
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Unlock premium educational resources, teacher training programs,
              certifications, workshops, and exclusive government initiatives
              designed to empower educators across the nation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#0B3D91] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
                Explore Plans
              </button>

              <Link
                to="/contact"
                className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#0B3D91] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Teachers"
              className="rounded-3xl shadow-2xl w-full max-w-xl object-cover h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-3xl font-bold text-[#0B3D91]">10K+</h2>
            <p className="text-gray-600 mt-2">Teachers Registered</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-3xl font-bold text-[#0B3D91]">500+</h2>
            <p className="text-gray-600 mt-2">Training Programs</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-3xl font-bold text-[#0B3D91]">150+</h2>
            <p className="text-gray-600 mt-2">Institutions Connected</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-3xl font-bold text-[#0B3D91]">24/7</h2>
            <p className="text-gray-600 mt-2">Support Available</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0B3D91] mb-4">
              Why Choose Our Membership?
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our platform provides professional tools and learning
              opportunities to help educators grow in their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#E8F0FE] rounded-2xl flex items-center justify-center text-[#0B3D91] text-2xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold text-[#0B3D91] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section id="plans-section" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14"><h2 className="text-4xl font-bold text-[#0B3D91]">Choose Your Membership Plan</h2></div>
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-[#F9FBFF] border-2 ${plan.color} rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-all flex flex-col justify-between`}>
                {plan.popular && <div className="absolute top-0 right-0 bg-yellow-500 text-white px-4 py-1 rounded-bl-2xl rounded-tr-xl text-sm font-bold">Most Popular</div>}
                <div>
                  <div className="text-[#0B3D91] text-3xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-[#0B3D91] mb-2">{plan.title}</h3>
                  <p className="text-3xl font-bold text-gray-800 mb-6">{plan.price}</p>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <FaCheckCircle className="text-green-500 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className={`w-full ${plan.button} text-white py-3 rounded-xl font-semibold`}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0B3D91] to-[#174EA6] rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            {/* Left */}
            <div className="p-10 text-white">
              <h2 className="text-4xl font-bold mb-6">
                Empower Your Teaching Career
              </h2>

              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Join thousands of educators who are improving their teaching
                skills and professional development through our platform.
              </p>

              <button className="bg-white text-[#0B3D91] px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all duration-300">
                Join Today
                <FaArrowRight />
              </button>
            </div>

            {/* Right */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
                alt="Teacher"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0B3D91] mb-4">
              What Educators Say
            </h2>

            <p className="text-gray-600 text-lg">
              Trusted by teachers and institutions nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#F8FAFF] p-8 rounded-3xl shadow-md">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-[#0B3D91]">
                    Priya Sharma
                  </h4>
                  <p className="text-gray-500 text-sm">Government Teacher</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                The training sessions and certification programs helped me
                improve my teaching skills significantly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F8FAFF] p-8 rounded-3xl shadow-md">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-[#0B3D91]">
                    Rahul Verma
                  </h4>
                  <p className="text-gray-500 text-sm">School Principal</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                The institution dashboard and reporting tools are excellent for
                managing teacher development programs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F8FAFF] p-8 rounded-3xl shadow-md">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-[#0B3D91]">
                    Anjali Reddy
                  </h4>
                  <p className="text-gray-500 text-sm">Senior Lecturer</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                This platform gives teachers access to modern educational tools
                and nationwide learning opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0B3D91] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-[#0B3D91] mb-2">
                Who can apply for membership?
              </h3>

              <p className="text-gray-600">
                Teachers, lecturers, educational institutions, and government
                education staff can apply for membership.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-[#0B3D91] mb-2">
                Are certifications government approved?
              </h3>

              <p className="text-gray-600">
                Yes, selected certification programs are officially recognized
                and verified by the education department.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-[#0B3D91] mb-2">
                Can institutions register multiple teachers?
              </h3>

              <p className="text-gray-600">
                Yes, the Institution Plan allows multiple teacher accounts under
                one organization dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0B3D91] py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <FaUserGraduate className="text-6xl mx-auto mb-6" />

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Upgrade Your Learning Experience?
          </h2>

          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Join our education platform today and access premium learning
            resources, certifications, training programs, and government
            educational support services.
          </p>

          <button className="bg-white text-[#0B3D91] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300">
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default MembershipPlans;
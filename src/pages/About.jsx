import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaBell,
  FaFileAlt,
  FaBullhorn,
  FaClipboardList,
  FaCalendarAlt,
  FaUsers,
  FaChalkboardTeacher,
  FaNewspaper,
  FaBook,
  FaFilePdf,
  FaCertificate,
  FaCheck,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaHeadset,
  FaArrowRight,
  FaDownload,
  FaGraduationCap,
  FaMedal,
  FaLaptop,
  FaChartLine,
  FaStar,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaAward,
  FaBookOpen,
  FaUserTie,
  FaGlobe,
  FaBullseye,
  FaEye,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaLock,
  FaChartBar,
  FaUniversity,
  FaSchool,
  FaUserGraduate,
  FaUserShield,
  FaDesktop,
} from "react-icons/fa";

function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Counter animation hook ─────────────────────────────── */
function useCounter(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

/* ─── Reveal wrapper ─────────────────────────────────────── */
const Reveal = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [ref, visible] = useScrollReveal();
  const transforms = {
    up: "translateY(40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/* ─── Stat Card ──────────────────────────────────────────── */
const StatCard = ({ num, suffix, label, icon, color, started }) => {
  const count = useCounter(num, 2000, started);
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-xl"
        style={{ background: `${color}18`, color }}
      >
        {icon}
      </div>
      <p className="text-4xl font-bold mb-1" style={{ color }}>
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </div>
  );
};

/* ─── Data ───────────────────────────────────────────────── */
const stats = [
  {
    num: 5000,
    suffix: "+",
    label: "Teachers Registered",
    icon: <FaUsers />,
    color: "#0B3D91",
  },
  {
    num: 300,
    suffix: "+",
    label: "Resources Available",
    icon: <FaBookOpen />,
    color: "#0F6E56",
  },
  {
    num: 100,
    suffix: "+",
    label: "Activities Conducted",
    icon: <FaCalendarAlt />,
    color: "#854F0B",
  },
  {
    num: 50,
    suffix: "+",
    label: "Newsletters Published",
    icon: <FaNewspaper />,
    color: "#534AB7",
  },
  {
    num: 28,
    suffix: "",
    label: "Districts Covered",
    icon: <FaMapMarkerAlt />,
    color: "#993C1D",
  },
  {
    num: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    icon: <FaStar />,
    color: "#0B3D91",
  },
];

const services = [
  {
    icon: <FaBullhorn />,
    title: "Government Updates",
    desc: "Stay informed with the latest circulars, policies, and official notices directly from the Education Department.",
    color: "blue",
  },
  {
    icon: <FaNewspaper />,
    title: "Newsletters",
    desc: "Monthly bulletins covering welfare schemes, teacher achievements, policy round-ups, and research highlights.",
    color: "purple",
  },
  {
    icon: <FaMedal />,
    title: "Premium Resources",
    desc: "Exclusive PDFs, e-books, training videos, and course completion certificates for premium members.",
    color: "amber",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Activities & Training",
    desc: "Workshops, seminars, certification programmes, and residential training sessions for professional growth.",
    color: "teal",
  },
  {
    icon: <FaDownload />,
    title: "Downloads",
    desc: "A rich library of lesson plans, handbooks, assessment rubrics, and classroom management resources.",
    color: "coral",
  },
  {
    icon: <FaUserTie />,
    title: "Membership Access",
    desc: "Structured Basic and Premium membership tiers designed to suit every educator's professional needs.",
    color: "indigo",
  },
];

const objectives = [
  {
    icon: <FaBell />,
    text: "Disseminate government updates, circulars, and policy notifications to all teachers in real time",
  },
  {
    icon: <FaBookOpen />,
    text: "Provide a comprehensive digital resource library for classroom management and pedagogy",
  },
  {
    icon: <FaCalendarAlt />,
    text: "Organise and promote training activities, workshops, and professional development programmes",
  },
  {
    icon: <FaGraduationCap />,
    text: "Enable teachers to pursue continuous professional development through certified courses",
  },
  {
    icon: <FaLaptop />,
    text: "Support digital education by equipping teachers with ICT tools and modern methodologies",
  },
  {
    icon: <FaHandshake />,
    text: "Foster a collaborative community of educators across all 28 districts of Telangana",
  },
];

const whyChooseUs = [
  {
    icon: <FaShieldAlt />,
    title: "Trusted Government Platform",
    desc: "Officially certified by the Telangana Education Department with verified, authentic content.",
    color: "#0B3D91",
  },
  {
    icon: <FaCheck />,
    title: "Verified Resources",
    desc: "Every resource is reviewed and approved by education experts before being published.",
    color: "#0F6E56",
  },
  {
    icon: <FaUserGraduate />,
    title: "Teacher-Focused Services",
    desc: "Every feature is designed with the specific needs of government teachers in mind.",
    color: "#854F0B",
  },
  {
    icon: <FaGlobe />,
    title: "Easy Accessibility",
    desc: "Available 24/7 across all devices — desktop, tablet, and mobile — from anywhere.",
    color: "#534AB7",
  },
  {
    icon: <FaLock />,
    title: "Secure Membership",
    desc: "ISO 27001 compliant security infrastructure protecting all teacher data and information.",
    color: "#993C1D",
  },
  {
    icon: <FaChartBar />,
    title: "Measurable Impact",
    desc: "Trackable professional development milestones and certificates for career advancement.",
    color: "#0B3D91",
  },
];

const team = [
  {
    name: "Dr. K. Ramaiah",
    role: "Commissioner of School Education",
    dept: "Telangana Education Dept.",
    icon: <FaUniversity />,
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  },
  {
    name: "Smt. P. Lavanya",
    role: "Director — Digital Initiatives",
    dept: "Portal Administration",
    icon: <FaDesktop />,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
  {
    name: "Sri. M. Venkatesh",
    role: "Head — Teacher Welfare",
    dept: "Resource & Training Wing",
    icon: <FaUserShield />,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Smt. R. Sunitha",
    role: "Content & Publications Lead",
    dept: "Newsletter & Media Cell",
    icon: <FaNewspaper />,
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
];

const serviceColors = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-[#0B3D91]",
    border: "border-blue-100",
    tag: "bg-blue-100 text-blue-700",
  },
  purple: {
    bg: "bg-purple-50",
    icon: "text-purple-700",
    border: "border-purple-100",
    tag: "bg-purple-100 text-purple-700",
  },
  amber: {
    bg: "bg-amber-50",
    icon: "text-amber-700",
    border: "border-amber-100",
    tag: "bg-amber-100 text-amber-700",
  },
  teal: {
    bg: "bg-emerald-50",
    icon: "text-emerald-700",
    border: "border-emerald-100",
    tag: "bg-emerald-100 text-emerald-700",
  },
  coral: {
    bg: "bg-red-50",
    icon: "text-red-700",
    border: "border-red-100",
    tag: "bg-red-100 text-red-700",
  },
  indigo: {
    bg: "bg-indigo-50",
    icon: "text-indigo-700",
    border: "border-indigo-100",
    tag: "bg-indigo-100 text-indigo-700",
  },
};

/* ═══════════════════════════════════════════════════════════
   AboutPage
═══════════════════════════════════════════════════════════ */
const AboutPage = () => {
  const [statsRef, statsVisible] = useScrollReveal(0.2);

  return (
    <div
      className="w-full bg-white overflow-x-hidden"
      style={{ fontFamily: "'Lato', 'Segoe UI', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+Display:wght@600;700&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .hero-gradient { background: linear-gradient(135deg, #041f5d 0%, #0B3D91 45%, #1354b8 80%, #0a2d6e 100%); }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(11,61,145,0.12); }
        .dot-pattern { background-image: radial-gradient(circle, #0B3D9122 1px, transparent 1px); background-size: 24px 24px; }
        .section-divider { height: 4px; background: linear-gradient(90deg, #0B3D91, #1a56c4, #0B3D91); border-radius: 2px; }
        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after { content:''; position:absolute; top:-50%;left:-60%;width:40%;height:200%;background:rgba(255,255,255,0.15);transform:skewX(-20deg);transition:left 0.5s ease; }
        .btn-shine:hover::after { left:120%; }
        .mission-card { background: linear-gradient(135deg, #0B3D91 0%, #1a56c4 100%); }
        .vision-card { background: linear-gradient(135deg, #0F6E56 0%, #1a9070 100%); }
        .objective-item:hover { transform: translateX(6px); }
        .objective-item { transition: transform 0.2s ease; }
        .team-card:hover .team-overlay { opacity: 1; }
        .team-overlay { opacity: 0; transition: opacity 0.3s ease; }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
        @keyframes fadeInDown { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:none} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes slideInLeft { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:none} }
        @keyframes slideInRight { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:none} }
        .hero-badge { animation: fadeInDown 0.8s ease both; }
        .hero-title { animation: fadeInUp 0.9s ease 0.1s both; }
        .hero-sub { animation: fadeInUp 0.9s ease 0.2s both; }
        .hero-cta { animation: fadeInUp 0.9s ease 0.3s both; }
        .hero-breadcrumb { animation: fadeIn 1s ease 0.4s both; }
        .breadcrumb-sep { color: rgba(255,255,255,0.4); margin: 0 6px; }
      `}</style>

      {/* ════════════════════════════════════════════
          1. HERO BANNER
      ════════════════════════════════════════════ */}
      <section
        className="hero-gradient relative overflow-hidden"
        style={{ minHeight: 520 }}
      >
        {/* decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 border-2 border-white" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-5 bg-white" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 bg-white -translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        {/* background image overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1400&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center text-center">
          {/* breadcrumb */}
          <p className="hero-breadcrumb text-white/50 text-xs mb-6 flex items-center gap-1">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="breadcrumb-sep">/</span>
            <span className="text-white/80">About Us</span>
          </p>

          <div className="hero-badge inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs px-4 py-2 rounded-full mb-5 tracking-widest font-medium uppercase">
            <FaShieldAlt /> Official Government Education Platform
          </div>

          <h1 className="hero-title font-display text-5xl md:text-6xl text-white leading-tight mb-5 max-w-3xl">
            About the <span style={{ color: "#93c5fd" }}>Teacher Resource</span>{" "}
            Portal
          </h1>

          <p className="hero-sub text-white/70 text-lg leading-relaxed mb-6 max-w-2xl">
            Empowering teachers through digital learning, verified resources,
            and comprehensive government support — serving 28 districts across
            Telangana since 2019.
          </p>

          <div className="hero-cta flex flex-wrap gap-4 justify-center">
            <Link
              to="/membership"
              className="btn-shine flex items-center gap-2 bg-white text-[#0B3D91] px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              <FaAward /> Join Membership
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 border-2 border-white/40 text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:border-white hover:bg-white/10 transition-all"
            >
              <FaHeadset /> Contact Us
            </Link>
          </div>

          {/* floating stat chips */}
          <div className="hero-cta flex flex-wrap gap-6 justify-center mt-8">
            {[
              ["5,000+", "Teachers"],
              ["28", "Districts"],
              ["2019", "Est."],
              ["300+", "Resources"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center"
              >
                <p className="text-xl font-bold text-white">{n}</p>
                <p className="text-[10px] text-white/50 uppercase tracking-widest">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 80L1440 80L1440 20C1200 80 960 0 720 40C480 80 240 0 0 20L0 80Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. ABOUT THE PORTAL
      ════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=85"
                alt="Portal overview"
                className="rounded-3xl w-full object-cover shadow-xl"
                style={{ height: 460 }}
              />
              <div className="absolute -bottom-8 -right-4 lg:-right-10 bg-white rounded-2xl p-5 shadow-xl max-w-[200px]">
                <FaGlobe className="text-[#0B3D91] text-2xl mb-2" />
                <p className="text-sm font-bold text-gray-900 leading-snug">
                  Serving 28 districts across Telangana
                </p>
              </div>
              <div className="absolute top-6 -left-4 lg:-left-8 bg-[#0B3D91] text-white rounded-2xl px-5 py-4 shadow-xl text-center">
                <p className="text-3xl font-black">2019</p>
                <p className="text-[10px] text-white/60 uppercase tracking-wide">
                  Est.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <span className="text-xs uppercase tracking-widest text-[#0B3D91] font-bold block mb-3">
              About the Portal
            </span>
            <h2 className="font-display text-4xl text-gray-900 mb-5">
              A Digital Home for Every Government Teacher
            </h2>
            <div className="section-divider w-20 mb-6" />

            <p className="text-gray-600 leading-relaxed mb-4">
              The Government Teacher Resource Portal is an official initiative
              by the Telangana Education Department, created to centralise and
              digitalise all teacher welfare services. It was established in
              2019 in response to a growing need for a unified digital platform
              that could bridge the gap between government communications and
              the teachers it serves.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The portal provides a wide array of services including official
              government circulars and updates, monthly newsletters,
              professional training and activity registrations, a comprehensive
              digital resource library, and tiered membership access — all in a
              single, secure, easy-to-use platform.
            </p>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
              <p className="text-sm font-bold text-[#0B3D91] mb-2">
                Who Can Use This Portal?
              </p>
              <ul className="space-y-1.5">
                {[
                  "All permanent government school teachers in Telangana",
                  "Headmasters and school principals",
                  "Education department administrative staff",
                  "Teachers pursuing professional development certifications",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <FaCheck
                      className="text-emerald-500 mt-0.5 flex-shrink-0"
                      size={12}
                    />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["Govt. Certified Platform", FaShieldAlt],
                ["ISO 27001 Compliant", FaAward],
                ["24/7 Resource Access", FaGlobe],
                ["5,000+ Active Users", FaUsers],
              ].map(([text, Icon], i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0B3D91] text-sm flex-shrink-0">
                    <Icon />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3 & 4. MISSION & VISION
      ════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-[#0B3D91] font-bold block mb-2">
              Our Purpose
            </span>
            <h2 className="font-display text-4xl text-gray-900">
              Mission & Vision
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <Reveal delay={0.05}>
              <div className="mission-card rounded-3xl p-10 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center text-white text-3xl mb-6">
                    <FaBullseye />
                  </div>
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white mb-4">
                    Our Mission
                  </span>
                  <h3 className="font-display text-3xl text-white mb-4">
                    What We Do
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    To support government teachers across Telangana with
                    accessible digital resources, timely government information,
                    structured training activities, and diverse educational
                    opportunities that elevate both personal and professional
                    growth.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Centralise all teacher welfare communications",
                      "Deliver verified educational resources digitally",
                      "Connect teachers to training and development opportunities",
                    ].map((m, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-white/85"
                      >
                        <FaCheck
                          className="text-white/60 mt-0.5 flex-shrink-0"
                          size={11}
                        />{" "}
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.12}>
              <div className="vision-card rounded-3xl p-10 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center text-white text-3xl mb-6">
                    <FaEye />
                  </div>
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white mb-4">
                    Our Vision
                  </span>
                  <h3 className="font-display text-3xl text-white mb-4">
                    Where We're Headed
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    To build a strong, digitally empowered educational community
                    by connecting every government teacher with modern learning
                    tools, government initiatives, and a collaborative
                    professional network that transforms classroom outcomes
                    across Telangana.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Every teacher digitally empowered by 2030",
                      "A thriving community of 20,000+ educators",
                      "Telangana as a model for digital teacher welfare in India",
                    ].map((v, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-white/85"
                      >
                        <FaCheck
                          className="text-white/60 mt-0.5 flex-shrink-0"
                          size={11}
                        />{" "}
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. OBJECTIVES
      ════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right" className="order-2 lg:order-1">
            <span className="text-xs uppercase tracking-widest text-[#0B3D91] font-bold block mb-3">
              What We Aim to Achieve
            </span>
            <h2 className="font-display text-4xl text-gray-900 mb-3">
              Our Objectives
            </h2>
            <div className="section-divider w-20 mb-8" />
            <div className="space-y-4">
              {objectives.map((obj, i) => (
                <div
                  key={i}
                  className="objective-item flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-[#0B3D91]/20 hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0B3D91] text-base flex-shrink-0">
                    {obj.icon}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {obj.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left" className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=85"
                alt="Objectives"
                className="rounded-3xl w-full object-cover shadow-xl"
                style={{ height: 520 }}
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0B3D91]/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B3D91] flex items-center justify-center text-white text-lg flex-shrink-0">
                    <FaRocket />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Driving Digital Education
                    </p>
                    <p className="text-xs text-gray-500">
                      6 core objectives for 2025–2030
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. SERVICES OFFERED
      ════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-[#0B3D91] font-bold block mb-2">
              What We Provide
            </span>
            <h2 className="font-display text-4xl text-gray-900 mb-3">
              Services Offered
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              A comprehensive suite of digital services designed to meet every
              professional need of a government teacher.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const c = serviceColors[s.color];
              return (
                <Reveal key={i} delay={i * 0.07}>
                  <div
                    className={`card-hover bg-white rounded-2xl border ${c.border} p-6 h-full flex flex-col shadow-sm`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center ${c.icon} text-xl mb-4`}
                    >
                      {s.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed flex-1">
                      {s.desc}
                    </p>
                    <Link
                      to="/"
                      className={`mt-4 text-xs font-bold flex items-center gap-1 ${c.icon} hover:underline`}
                    >
                      Learn More <FaArrowRight size={9} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          7. WHY CHOOSE US
      ════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#0B3D91] font-bold block mb-2">
            Our Differentiators
          </span>
          <h2 className="font-display text-4xl text-gray-900 mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            We are not just a portal — we are a trusted government partner in
            every teacher's professional journey.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="card-hover relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm overflow-hidden group">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}08, ${item.color}04)`,
                  }}
                />
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          8. STATISTICS
      ════════════════════════════════════════════ */}
      <section className="bg-[#041f5d] py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="max-w-7xl mx-auto relative">
          <Reveal className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">
              Impact in Numbers
            </span>
            <h2 className="font-display text-4xl text-white">
              Portal at a Glance
            </h2>
          </Reveal>
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
          >
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <StatCard {...s} started={statsVisible} />
              </Reveal>
            ))}
          </div>

          {/* Timeline strip */}
          <Reveal className="mt-16">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-8 text-center">
                Our Journey
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    year: "2019",
                    event: "Portal launched by Telangana Education Department",
                  },
                  {
                    year: "2021",
                    event:
                      "Premium membership tier introduced, 2,000+ teachers enrolled",
                  },
                  {
                    year: "2023",
                    event: "Reached 4,000 teachers, 200+ resources published",
                  },
                  {
                    year: "2025",
                    event: "5,000+ teachers, 28 districts fully onboarded",
                  },
                ].map((t, i) => (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-[#FFD700] flex items-center justify-center mx-auto mb-3">
                      <span className="text-[#0B3D91] font-black text-sm">
                        {t.year}
                      </span>
                    </div>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {t.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          9. TEAM / DEPARTMENT
      ════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#0B3D91] font-bold block mb-2">
            Leadership
          </span>
          <h2 className="font-display text-4xl text-gray-900 mb-3">
            Portal Management Team
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Dedicated officials and administrators ensuring the portal serves
            every teacher with excellence.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card-hover team-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/80 via-transparent to-transparent team-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 team-overlay">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white text-sm">
                      {member.icon}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-bold text-gray-900 text-sm mb-1">
                    {member.name}
                  </p>
                  <p className="text-[#0B3D91] text-xs font-semibold mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-[11px]">{member.dept}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Dept info box */}
        <Reveal>
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 rounded-2xl bg-[#0B3D91] flex items-center justify-center text-white text-4xl flex-shrink-0">
              <FaUniversity />
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-lg mb-1">
                Telangana School Education Department
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                The portal is administered under the School Education
                Department, Government of Telangana. All content, circulars, and
                resources published on this portal are officially verified and
                authorised by the department.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  ["Official Website", FaGlobe],
                  ["Grievance Cell", FaHeadset],
                  ["RTI Portal", FaShieldAlt],
                ].map(([label, Icon], i) => (
                  <button
                    key={i}
                    className="flex items-center gap-2 text-xs font-bold text-[#0B3D91] bg-blue-50 border border-blue-100 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Icon size={11} /> {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-3">
              {[
                ["Estd.", "2019"],
                ["Dept.", "School Ed."],
                ["State", "Telangana"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="text-center bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm"
                >
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    {k}
                  </p>
                  <p className="text-sm font-bold text-gray-900">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default AboutPage;

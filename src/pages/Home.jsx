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
  FaFileInvoice,
  FaFilePdf,
  FaCertificate,
  FaTools,
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
  FaPlay,
  FaAward,
  FaBookOpen,
  FaUserTie,
  FaGlobe,
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

const govUpdates = [
  {
    icon: <FaFileAlt />,
    color: "blue",
    badge: "New",
    tag: "Circular",
    title: "Revised teacher promotion policy 2025",
    desc: "New guidelines for promotions based on service years and performance appraisal criteria across all districts.",
    date: "18 May 2025",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
  },
  {
    icon: <FaBullhorn />,
    color: "blue",
    badge: "Important",
    tag: "Notice",
    title: "Annual increment schedule for 2025–26",
    desc: "Increment dates and eligibility conditions notified for all categories of teaching and non-teaching staff.",
    date: "10 May 2025",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
  },
  {
    icon: <FaClipboardList />,
    color: "blue",
    tag: "Policy Update",
    title: "Digital classroom implementation framework",
    desc: "Comprehensive guidelines on smart board usage, digital attendance, and e-content delivery standards.",
    date: "2 May 2025",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
  },
  {
    icon: <FaGraduationCap />,
    color: "blue",
    tag: "Order",
    title: "In-service training mandatory for 2025",
    desc: "All permanent teachers must complete 40 hours of in-service training before December 2025.",
    date: "28 Apr 2025",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
  },
];

const activities = [
  {
    icon: <FaCalendarAlt />,
    color: "teal",
    tag: "Workshop",
    title: "Digital pedagogy for secondary educators",
    desc: "Hands-on training on tech-integrated teaching strategies for classes 9–12 teachers.",
    meta: "District Training Centre",
    date: "Jun 5, 2025",
    seats: "48 seats left",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
  },
  {
    icon: <FaUsers />,
    color: "teal",
    tag: "Training Session",
    title: "Leadership & mentoring skills programme",
    desc: "For senior teachers aspiring to head-teacher roles — 2-day intensive residential programme.",
    meta: "State Education Hub",
    date: "Jun 12, 2025",
    seats: "22 seats left",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
  {
    icon: <FaChalkboardTeacher />,
    color: "teal",
    tag: "Seminar",
    title: "National seminar on inclusive education",
    desc: "Best practices for teaching students with special needs and diverse learning abilities.",
    meta: "Online (Zoom)",
    date: "Jun 20, 2025",
    seats: "Unlimited",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
  },
  {
    icon: <FaLaptop />,
    color: "teal",
    tag: "Certification",
    title: "ICT tools for classroom management",
    desc: "Learn to use Google Workspace, MS Teams and LMS platforms for effective classroom management.",
    meta: "Regional Centre, Hyderabad",
    date: "Jul 3, 2025",
    seats: "60 seats left",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
  },
];

const newsletters = [
  {
    icon: <FaNewspaper />,
    color: "purple",
    title: "Shiksha Sandesh — May 2025",
    desc: "Welfare schemes, teacher achievements, and policy round-up for the month of May.",
    meta: "1.2 MB · May 2025",
    pages: "24 pages",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80",
  },
  {
    icon: <FaBook />,
    color: "purple",
    title: "Education digest — April 2025",
    desc: "Research highlights, curriculum changes, and upcoming government initiatives for Q2 2025.",
    meta: "0.9 MB · April 2025",
    pages: "18 pages",
    img: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&q=80",
  },
  {
    icon: <FaFileInvoice />,
    color: "purple",
    title: "NEP 2020 — Implementation review",
    desc: "Progress review, case studies from pilot schools, and roadmap for the next academic year.",
    meta: "2.4 MB · March 2025",
    pages: "36 pages",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80",
  },
];

const downloads = [
  {
    icon: <FaFilePdf />,
    color: "amber",
    title: "Classroom management handbook",
    meta: "PDF · 3.1 MB",
    tag: "Popular",
  },
  {
    icon: <FaCertificate />,
    color: "amber",
    title: "Teacher training guide 2025",
    meta: "PDF · 1.8 MB",
    tag: null,
  },
  {
    icon: <FaBook />,
    color: "amber",
    title: "Model lesson plan templates",
    meta: "DOCX · 0.5 MB",
    tag: "New",
  },
  {
    icon: <FaTools />,
    color: "amber",
    title: "Assessment rubrics & tools",
    meta: "PDF · 2.2 MB",
    tag: null,
  },
  {
    icon: <FaChartLine />,
    color: "amber",
    title: "Student progress tracking sheets",
    meta: "XLSX · 0.3 MB",
    tag: null,
  },
  {
    icon: <FaGraduationCap />,
    color: "amber",
    title: "Exam preparation resource pack",
    meta: "ZIP · 12 MB",
    tag: "Updated",
  },
  {
    icon: <FaBookOpen />,
    color: "amber",
    title: "NEP 2020 summary for teachers",
    meta: "PDF · 1.1 MB",
    tag: null,
  },
  {
    icon: <FaLaptop />,
    color: "amber",
    title: "Digital tools quick reference card",
    meta: "PDF · 0.4 MB",
    tag: "New",
  },
];

const testimonials = [
  {
    name: "Meena Reddy",
    role: "Senior Teacher, Hyderabad",
    stars: 5,
    quote:
      "This portal has transformed how I access government circulars and training resources. Everything is now at my fingertips.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  },
  {
    name: "Ramesh Kumar",
    role: "Headmaster, Warangal",
    stars: 5,
    quote:
      "The membership resources, especially the premium PDFs and training videos, have been invaluable for our school's professional development.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  },
  {
    name: "Anitha Sharma",
    role: "Principal, Karimnagar",
    stars: 5,
    quote:
      "Registering for workshops is now seamless. I love how all government updates are consolidated in one professional platform.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
  },
];

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

const iconBg = {
  blue: "bg-blue-50 text-[#0B3D91]",
  teal: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  purple: "bg-purple-50 text-purple-700",
  coral: "bg-red-50 text-red-700",
};

const tagBg = {
  blue: "bg-blue-100 text-blue-800",
  teal: "bg-emerald-100 text-emerald-800",
  amber: "bg-amber-100 text-amber-800",
  purple: "bg-purple-100 text-purple-800",
};

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

const HomePage = () => {
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
        .img-zoom img { transition: transform 0.5s ease; }
        .img-zoom:hover img { transform: scale(1.06); }
        .badge-pulse { animation: pulse-badge 2s infinite; }
        @keyframes pulse-badge { 0%,100%{opacity:1} 50%{opacity:0.7} }
        .hero-float { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .shimmer { background: linear-gradient(90deg, #f0f4ff 25%, #dce8ff 50%, #f0f4ff 75%); background-size: 200% 100%; animation: shimmer 2s infinite; }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        .dot-pattern { background-image: radial-gradient(circle, #0B3D9122 1px, transparent 1px); background-size: 24px 24px; }
        .geo-pattern { background-image: linear-gradient(30deg, #0B3D9108 12%, transparent 12.5%, transparent 87%, #0B3D9108 87.5%, #0B3D9108), linear-gradient(150deg, #0B3D9108 12%, transparent 12.5%, transparent 87%, #0B3D9108 87.5%, #0B3D9108), linear-gradient(30deg, #0B3D9108 12%, transparent 12.5%, transparent 87%, #0B3D9108 87.5%, #0B3D9108), linear-gradient(150deg, #0B3D9108 12%, transparent 12.5%, transparent 87%, #0B3D9108 87.5%, #0B3D9108); background-size: 40px 70px; }
        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after { content:''; position:absolute; top:-50%;left:-60%;width:40%;height:200%;background:rgba(255,255,255,0.15);transform:skewX(-20deg);transition:left 0.5s ease; }
        .btn-shine:hover::after { left:120%; }
        .news-card:hover .news-img { transform: scale(1.05); }
        .news-img { transition: transform 0.4s ease; }
        .section-divider { height: 4px; background: linear-gradient(90deg, #0B3D91, #1a56c4, #0B3D91); border-radius: 2px; }
      `}</style>

      <section className="hero-gradient relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 border-2 border-white" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-5 bg-white" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 bg-white -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] bg-white -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs px-4 py-2 rounded-full mb-8 tracking-widest font-medium uppercase"
              style={{ animation: "fadeInDown 0.8s ease both" }}
            >
              <FaShieldAlt /> Official Government Education Platform
            </div>

            <h1
              className="font-display text-5xl md:text-6xl text-white leading-tight mb-6"
              style={{ animation: "fadeInUp 0.9s ease 0.1s both" }}
            >
              Empowering
              <br />
              <span style={{ color: "#93c5fd" }}>India's Teachers</span>
              <br />
              Digitally
            </h1>

            <p
              className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
              style={{ animation: "fadeInUp 0.9s ease 0.2s both" }}
            >
              A centralised government platform delivering resources, circulars,
              training, and welfare schemes to over 5,000 educators across 28
              districts.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-12"
              style={{ animation: "fadeInUp 0.9s ease 0.3s both" }}
            >
              <Link
                to="/government-updates"
                className="btn-shine flex items-center gap-2 bg-white text-[#0B3D91] px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <FaBell /> Explore Updates
              </Link>
              <Link
                to="/membership"
                className="btn-shine flex items-center gap-2 bg-[#FFD700] text-[#0B3D91] px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <FaAward /> Join Membership
              </Link>
              <Link
                to="/login"
                className="flex items-center gap-2 border-2 border-white/40 text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:border-white hover:bg-white/10 transition-all"
              >
                Login / Register
              </Link>
            </div>

            <div
              className="flex flex-wrap gap-8"
              style={{ animation: "fadeInUp 0.9s ease 0.4s both" }}
            >
              {[
                ["5,000+", "Teachers"],
                ["300+", "Resources"],
                ["28", "Districts"],
              ].map(([n, l]) => (
                <div key={l} className="text-center">
                  <p className="text-2xl font-bold text-white">{n}</p>
                  <p className="text-xs text-white/50 uppercase tracking-widest">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hidden lg:block relative"
            style={{ animation: "fadeIn 1.2s ease 0.4s both" }}
          >
            <div className="hero-float relative">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=85"
                alt="Teachers in training"
                className="rounded-3xl w-full object-cover shadow-2xl"
                style={{ height: 420 }}
              />

              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 min-w-[180px]">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 text-lg flex-shrink-0">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Latest update</p>
                  <p className="text-sm font-bold text-gray-800">
                    Promotion Policy
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-[#FFD700] rounded-2xl p-4 shadow-xl">
                <p className="text-[#0B3D91] font-black text-xl leading-none">
                  100+
                </p>
                <p className="text-[#0B3D91]/70 text-xs font-semibold">
                  Activities
                </p>
              </div>

              <div className="absolute top-1/2 -right-10 bg-[#0B3D91] rounded-2xl p-4 shadow-xl text-white">
                <FaGraduationCap className="text-2xl mb-1 text-[#93c5fd]" />
                <p className="text-xs font-semibold">
                  Certified
                  <br />
                  Platform
                </p>
              </div>
            </div>
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

        <style>{`
          @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
          @keyframes fadeInDown { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:none} }
          @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        `}</style>
      </section>

      {/* ── Trusted by banner ── */}
      <div className="bg-gray-50 border-y border-gray-100 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            Trusted by educators across
          </p>
          {[
            "Hyderabad",
            "Warangal",
            "Karimnagar",
            "Nizamabad",
            "Khammam",
            "Nalgonda",
          ].map((d) => (
            <span
              key={d}
              className="text-sm font-semibold text-gray-600 flex items-center gap-1"
            >
              <FaMapMarkerAlt className="text-[#0B3D91] text-xs" /> {d}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          2. GOVERNMENT UPDATES
      ════════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-3 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0B3D91] font-bold block mb-2">
                Official Notices
              </span>
              <h2 className="font-display text-4xl text-gray-900">
                Latest Government Updates
              </h2>
            </div>
            <Link
              to="/government-updates"
              className="flex items-center gap-2 text-[#0B3D91] font-bold text-sm hover:gap-3 transition-all"
            >
              View all updates <FaArrowRight size={12} />
            </Link>
          </div>
          <div className="section-divider w-20 mb-10" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {govUpdates.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card-hover news-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col">
                <div className="overflow-hidden h-44 bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover news-img"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    {item.badge && (
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${item.badge === "New" ? "bg-emerald-100 text-emerald-800 badge-pulse" : "bg-red-100 text-red-800"}`}
                      >
                        {item.badge}
                      </span>
                    )}
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${tagBg[item.color]}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 flex-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                    <span className="text-[11px] text-gray-400 flex items-center gap-1">
                      <FaClock size={9} /> {item.date}
                    </span>
                    <Link
                      to="/government-updates"
                      className="text-[11px] font-bold text-[#0B3D91] hover:underline flex items-center gap-1"
                    >
                      Read <FaArrowRight size={9} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          3. ACTIVITIES
      ════════════════════════════════════════════════ */}
      <section className=" bg-slate-50 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-3 flex-wrap gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold block mb-2">
                  Professional Development
                </span>
                <h2 className="font-display text-4xl text-gray-900">
                  Upcoming Activities
                </h2>
              </div>
              <Link
                to="/activities"
                className="flex items-center gap-2 text-emerald-700 font-bold text-sm hover:gap-3 transition-all"
              >
                Explore all <FaArrowRight size={12} />
              </Link>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mb-10" />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {activities.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="img-zoom overflow-hidden h-48 relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                      <span className="text-[10px] font-bold text-emerald-700">
                        {item.seats}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                      {item.desc}
                    </p>
                    <div className="border-t border-gray-100 pt-3 space-y-1">
                      <p className="text-[11px] text-gray-500 flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-emerald-600 text-xs" />
                        {item.meta}
                      </p>
                      <p className="text-[11px] text-gray-500 flex items-center gap-1.5">
                        <FaCalendarAlt className="text-emerald-600 text-xs" />
                        {item.date}
                      </p>
                    </div>
                    <Link
                      to="/activities"
                      className="mt-4 block text-center bg-emerald-50 text-emerald-700 font-bold text-xs py-2 rounded-lg hover:bg-emerald-100 transition-colors"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          4. NEWSLETTERS
      ════════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-3 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-purple-600 font-bold block mb-2">
                Monthly Publications
              </span>
              <h2 className="font-display text-4xl text-gray-900">
                Newsletters & Bulletins
              </h2>
            </div>
            <Link
              to="/newsletters"
              className="flex items-center gap-2 text-purple-700 font-bold text-sm hover:gap-3 transition-all"
            >
              View all <FaArrowRight size={12} />
            </Link>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full mb-10" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsletters.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full flex flex-col">
                <div className="img-zoom overflow-hidden h-52 relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="bg-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      PDF · {item.pages}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <span className="text-[11px] text-gray-400 flex items-center gap-1">
                      <FaFileAlt size={9} /> {item.meta}
                    </span>
                    <Link
                      to="/newsletters"
                      className="flex items-center gap-1 text-[11px] font-bold text-purple-700 hover:underline"
                    >
                      <FaDownload size={10} /> Download
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          5. DOWNLOADS
      ════════════════════════════════════════════════ */}
      <section className="bg-[#041f5d] py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="max-w-7xl mx-auto relative">
          <Reveal>
            <div className="flex items-end justify-between mb-3 flex-wrap gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">
                  Resource Library
                </span>
                <h2 className="font-display text-4xl text-white">
                  Downloads & Resources
                </h2>
              </div>
              <Link
                to="/downloads"
                className="flex items-center gap-2 text-amber-400 font-bold text-sm hover:gap-3 transition-all"
              >
                All resources <FaArrowRight size={12} />
              </Link>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full mb-10" />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {downloads.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="card-hover bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-400 text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-white text-sm font-semibold leading-snug">
                        {item.title}
                      </h3>
                      {item.tag && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-400 text-[#041f5d] flex-shrink-0">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-white/40 text-xs">{item.meta}</p>
                    <button className="mt-2 text-xs text-amber-400 font-bold flex items-center gap-1 hover:text-amber-300 transition-colors">
                      <FaDownload size={9} /> Download
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          6. MEMBERSHIP
      ════════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <Reveal className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#0B3D91] font-bold block mb-2">
            Choose Your Plan
          </span>
          <h2 className="font-display text-4xl text-gray-900 mb-3">
            Membership Plans
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Unlock the full potential of the portal with our membership options
            tailored for every educator.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free */}
          <Reveal delay={0.05}>
            <div className="card-hover border-2 border-gray-100 rounded-3xl p-8 bg-white h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 text-2xl mb-5">
                <FaUserTie />
              </div>
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 mb-3 self-start">
                Free Forever
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Basic</h3>
              <p className="text-gray-400 text-sm mb-6">
                Open to all registered government teachers
              </p>
              <ul className="space-y-3 flex-1">
                {[
                  "Access to all government updates & circulars",
                  "Monthly newsletters",
                  "Activity announcements & schedules",
                  "Download select free resources",
                  "Community forum access",
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <FaCheck
                      className="text-emerald-500 mt-0.5 flex-shrink-0"
                      size={13}
                    />{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/membership"
                className="mt-8 block text-center border-2 border-gray-200 rounded-xl py-3.5 text-sm font-bold text-gray-700 hover:border-[#0B3D91] hover:text-[#0B3D91] transition-all"
              >
                Get Started Free
              </Link>
            </div>
          </Reveal>

          {/* Premium */}
          <Reveal delay={0.12}>
            <div className="card-hover relative border-2 border-[#0B3D91] rounded-3xl p-8 bg-gradient-to-br from-[#0B3D91] to-[#041f5d] h-full flex flex-col shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#FFD700] text-[#0B3D91] text-xs font-black px-5 py-1.5 rounded-full shadow-lg">
                  MOST POPULAR
                </span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-[#FFD700] text-2xl mb-5">
                <FaMedal />
              </div>
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/15 text-white mb-3 self-start">
                Premium Access
              </span>
              <h3 className="text-2xl font-bold text-white mb-1">Premium</h3>
              <p className="text-white/50 text-sm mb-6">
                Exclusive benefits for dedicated educators
              </p>
              <ul className="space-y-3 flex-1">
                {[
                  "Everything in Basic, plus:",
                  "Premium PDFs, videos & e-books",
                  "Course completion certificates",
                  "Priority activity registration",
                  "Exclusive training sessions & webinars",
                  "1-on-1 mentor connect sessions",
                  "Early access to new resources",
                ].map((f, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-sm ${i === 0 ? "text-white/50 font-semibold" : "text-white/85"}`}
                  >
                    {i > 0 && (
                      <FaCheck
                        className="text-[#FFD700] mt-0.5 flex-shrink-0"
                        size={13}
                      />
                    )}
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/membership"
                className="mt-8 block text-center bg-[#FFD700] text-[#0B3D91] rounded-xl py-3.5 text-sm font-black hover:bg-yellow-300 transition-all shadow-lg"
              >
                Join Premium Membership
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          7. ABOUT PREVIEW
      ════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=700&q=85"
                alt="About the portal"
                className="rounded-3xl w-full object-cover shadow-xl"
                style={{ height: 460 }}
              />
              {/* Overlay card */}
              <div className="absolute -bottom-8 -right-4 lg:-right-10 bg-white rounded-2xl p-5 shadow-xl max-w-[200px]">
                <FaGlobe className="text-[#0B3D91] text-2xl mb-2" />
                <p className="text-sm font-bold text-gray-900 leading-snug">
                  Serving 28 districts across Telangana
                </p>
              </div>
              {/* Year badge */}
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
              Empowering Educators Since 2019
            </h2>
            <div className="h-1 w-16 bg-[#0B3D91] rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              The Government Teacher Resource Portal is an official initiative
              by the Telangana Education Department, designed to centralise and
              digitalise all teacher welfare services. From circulars to
              certificates, from activities to appraisals — everything in one
              place.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our mission is to ensure every government teacher, regardless of
              their district or posting, has equal and immediate access to
              resources, training, and government communications that help them
              deliver quality education.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
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
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#0B3D91] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#072c6b] transition-colors shadow-lg"
            >
              Read More About Us <FaArrowRight size={12} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          8. STATISTICS
      ════════════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#0B3D91] font-bold block mb-2">
              Impact in Numbers
            </span>
            <h2 className="font-display text-4xl text-gray-900">
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
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════ */}
      <section className="bg-[#041f5d] py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="max-w-7xl mx-auto relative">
          <Reveal className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">
              What Teachers Say
            </span>
            <h2 className="font-display text-4xl text-white">
              Voices from the Classroom
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card-hover bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
                  <FaQuoteLeft className="text-amber-400/40 text-4xl mb-4" />
                  <p className="text-white/80 text-sm leading-relaxed flex-1 mb-6">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white text-sm font-bold">{t.name}</p>
                      <p className="text-white/50 text-xs">{t.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(t.stars)].map((_, j) => (
                        <FaStar key={j} className="text-amber-400 text-xs" />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          9. CONTACT CTA
      ════════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 py-15">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
                alt="Contact background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91]/95 to-[#041f5d]/90" />
              <div className="relative px-10 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-3">
                    Get In Touch
                  </span>
                  <h2 className="font-display text-4xl text-white mb-4">
                    Need Help? We're Here for You
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Our dedicated support team is available to assist teachers
                    with any queries about the portal, membership benefits,
                    resources, or technical support.
                  </p>
                  <div className="space-y-3 mb-8">
                    {[
                      [FaEnvelope, "support@teacherportal.gov.in"],
                      [FaPhone, "1800-XXX-XXXX (Toll Free)"],
                      [FaClock, "Mon–Sat, 9:00 AM – 6:00 PM"],
                      [FaMapMarkerAlt, "Education Department HQ, Hyderabad"],
                    ].map(([Icon, text], i) => (
                      <p
                        key={i}
                        className="flex items-center gap-3 text-white/80 text-sm"
                      >
                        <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="text-amber-400 text-xs" />
                        </span>
                        {text}
                      </p>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#FFD700] text-[#0B3D91] px-7 py-3.5 rounded-xl font-black text-sm hover:bg-yellow-300 transition-all shadow-lg"
                  >
                    <FaHeadset /> Contact Support
                  </Link>
                </div>
                <div className="hidden md:grid grid-cols-2 gap-4">
                  {[
                    [
                      "Helpdesk",
                      "Submit queries online",
                      FaHeadset,
                      "bg-white/10",
                    ],
                    [
                      "Email Support",
                      "24hr response time",
                      FaEnvelope,
                      "bg-white/10",
                    ],
                    ["Phone", "Toll-free helpline", FaPhone, "bg-white/10"],
                    ["FAQ", "Self-service portal", FaBookOpen, "bg-white/10"],
                  ].map(([title, sub, Icon, bg], i) => (
                    <div
                      key={i}
                      className={`${bg} border border-white/10 rounded-2xl p-5 flex flex-col gap-2`}
                    >
                      <Icon className="text-amber-400 text-xl" />
                      <p className="text-white font-bold text-sm">{title}</p>
                      <p className="text-white/50 text-xs">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

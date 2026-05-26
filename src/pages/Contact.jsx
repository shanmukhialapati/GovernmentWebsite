import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaGlobe,
  FaHeadset,
  FaPaperclip,
  FaArrowRight,
  FaPaperPlane,
  FaRedo,
  FaShieldAlt,
  FaCheckCircle,
  FaDirections,
  FaUsers,
  FaFileAlt,
  FaCalendarAlt,
  FaCertificate,
  FaTools,
  FaQuestionCircle,
  FaCreditCard,
  FaBullhorn,
} from "react-icons/fa";

/* ─── Shared scroll-reveal hook (same as HomePage) ─── */
function useScrollReveal(threshold = 0.11) {
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

/* ─── Inquiry categories ─── */
const inquiryCategories = [
  { value: "", label: "Select inquiry type…", icon: null },
  { value: "membership", label: "Membership Support", icon: FaUsers },
  { value: "payment", label: "Payment Issues", icon: FaCreditCard },
  { value: "gov-updates", label: "Government Updates", icon: FaBullhorn },
  { value: "activities", label: "Activities & Events", icon: FaCalendarAlt },
  { value: "certificate", label: "Certificate Help", icon: FaCertificate },
  { value: "technical", label: "Technical Support", icon: FaTools },
  { value: "general", label: "General Inquiry", icon: FaQuestionCircle },
];

/* ─── Contact info tiles ─── */
const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    color: "#0B3D91",
    bg: "#0B3D9115",
    label: "Office Address",
    lines: [
      "Government Education Welfare Office,",
      "3rd Floor, Education Bhavan,",
      "Masab Tank, Hyderabad – 500 028,",
      "Telangana, India",
    ],
  },
  {
    icon: FaPhone,
    color: "#0F6E56",
    bg: "#0F6E5615",
    label: "Phone Numbers",
    lines: ["+91 9876 543 210 (Primary)", "1800-XXX-XXXX (Toll Free)"],
  },
  {
    icon: FaEnvelope,
    color: "#7C3AED",
    bg: "#7C3AED15",
    label: "Email Addresses",
    lines: ["support@govportal.com", "info@govteacherportal.gov.in"],
  },
  {
    icon: FaClock,
    color: "#B45309",
    bg: "#B4530915",
    label: "Working Hours",
    lines: [
      "Monday – Friday",
      "9:00 AM – 6:00 PM IST",
      "Closed on public holidays",
    ],
  },
  {
    icon: FaGlobe,
    color: "#0B3D91",
    bg: "#0B3D9115",
    label: "Website",
    lines: ["www.govteacherportal.gov.in"],
  },
  {
    icon: FaHeadset,
    color: "#B91C1C",
    bg: "#B91C1C15",
    label: "Live Support",
    lines: ["Chat available Mon–Sat", "9:00 AM – 5:00 PM IST"],
  },
];

/* ─── Support channel cards ─── */
const channels = [
  {
    icon: FaHeadset,
    title: "Helpdesk",
    sub: "Raise a ticket online",
    color: "#0B3D91",
    bg: "bg-blue-50",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    sub: "Reply within 24 hrs",
    color: "#7C3AED",
    bg: "bg-purple-50",
  },
  {
    icon: FaPhone,
    title: "Phone",
    sub: "Toll-free helpline",
    color: "#0F6E56",
    bg: "bg-emerald-50",
  },
  {
    icon: FaFileAlt,
    title: "FAQ",
    sub: "Self-service answers",
    color: "#B45309",
    bg: "bg-amber-50",
  },
];

/* ══════════════════════════════════════════
   CONTACT PAGE COMPONENT
══════════════════════════════════════════ */
const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    message: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((f) => ({ ...f, [name]: files ? files[0] : value }));
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      category: "",
      subject: "",
      message: "",
      file: null,
    });
    if (fileRef.current) fileRef.current.value = "";
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

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
        .form-input {
          width: 100%; border: 2px solid #e5e7eb; border-radius: 12px;
          padding: 12px 16px; font-size: 14px; color: #1f2937;
          transition: border-color 0.2s, box-shadow 0.2s; background: #fafbff;
          outline: none; font-family: 'Lato', sans-serif;
        }
        .form-input:focus { border-color: #0B3D91; box-shadow: 0 0 0 3px #0B3D9118; background: #fff; }
        .form-input::placeholder { color: #9ca3af; }
        .form-select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%230B3D91' d='M6 8L1 3h10z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; }
        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after { content:''; position:absolute; top:-50%;left:-60%;width:40%;height:200%;background:rgba(255,255,255,0.15);transform:skewX(-20deg);transition:left 0.5s ease; }
        .btn-shine:hover::after { left:120%; }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
        @keyframes fadeInDown { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:none} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes checkPop { 0%{transform:scale(0)} 70%{transform:scale(1.2)} 100%{transform:scale(1)} }
        .check-pop { animation: checkPop 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
        .map-frame { border-radius: 20px; overflow: hidden; border: 3px solid #e5e7eb; box-shadow: 0 8px 32px rgba(11,61,145,0.10); }
        textarea.form-input { resize: vertical; min-height: 130px; }
      `}</style>

      <section className="hero-gradient relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 border-2 border-white" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-5 bg-white" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 bg-white -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] bg-white -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center z-10">
          <div
            className="inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs md:text-xs px-5 py-2 rounded-full mb-8 tracking-[0.25em] font-semibold uppercase shadow-lg"
            style={{ animation: "fadeInDown 0.8s ease both" }}
          >
            <FaShieldAlt className="text-yellow-400 " />
            Official Government Teacher Portal
          </div>

          {/* Heading */}
          <h1
            className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            style={{ animation: "fadeInUp 0.9s ease 0.1s both" }}
          >
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
              Touch
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-white/75 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
            style={{ animation: "fadeInUp 0.9s ease 0.2s both" }}
          >
            We’re here to support teachers, members, and institutions with
            memberships, government updates, newsletters, activities, and all
            portal-related assistance.
          </p>

          {/* Contact Channel Cards */}
          <div
            className="flex flex-wrap justify-center gap-5"
            style={{ animation: "fadeInUp 0.9s ease 0.3s both" }}
          >
            {channels.map((c, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-blue-400/40 px-6 py-4 rounded-2xl backdrop-blur-lg transition-all duration-300 shadow-lg hover:scale-105"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center border border-white/10">
                  <c.icon className="text-yellow-400 text-lg group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="text-left">
                  <p className="text-white font-semibold text-sm md:text-base">
                    {c.title}
                  </p>
                  <p className="text-white/60 text-xs">
                    Available 24/7 Support
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div
            className="mt-16 flex flex-wrap justify-center gap-8 text-center"
            style={{ animation: "fadeInUp 0.9s ease 0.4s both" }}
          >
            <div>
              <h3 className="text-3xl font-bold text-white">10K+</h3>
              <p className="text-white/60 text-sm mt-1">Registered Teachers</p>
            </div>

            <div className="hidden md:block w-px bg-white/20"></div>

            <div>
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="text-white/60 text-sm mt-1">Government Updates</p>
            </div>

            <div className="hidden md:block w-px bg-white/20"></div>

            <div>
              <h3 className="text-3xl font-bold text-white">24/7</h3>
              <p className="text-white/60 text-sm mt-1">Support Assistance</p>
            </div>
          </div>
        </div>

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
      {/* ══ 2. CONTACT INFO TILES ══ */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <Reveal className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#0B3D91] font-bold block mb-2">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl text-gray-900 mb-3">
            Contact Information
          </h2>
          <div className="section-divider w-20 mx-auto" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((item, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: item.bg, color: item.color }}
                >
                  <item.icon />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </p>
                  {item.lines.map((line, j) => (
                    <p
                      key={j}
                      className="text-sm text-gray-600 leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ 3. CONTACT FORM + SIDEBAR ══ */}
      <section className="bg-slate-50 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#0B3D91] font-bold block mb-2">
              Send a Message
            </span>
            <h2 className="font-display text-4xl text-gray-900 mb-1">
              Write to Us
            </h2>
            <div className="section-divider w-20 mt-3" />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* ── Form ── */}
            <div className="lg:col-span-2">
              <Reveal delay={0.05}>
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <FaCheckCircle className="check-pop text-6xl text-emerald-500 mb-5" />
                      <h3 className="font-display text-3xl text-gray-900 mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-gray-500 mb-8 max-w-sm leading-relaxed">
                        Thank you for reaching out. Our support team will
                        respond within 24 working hours on your registered
                        email.
                      </p>
                      <button
                        onClick={handleReset}
                        className="flex items-center gap-2 bg-[#0B3D91] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#072c6b] transition-colors"
                      >
                        <FaRedo size={12} /> Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="e.g. Meena Reddy"
                            required
                            className="form-input"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className="form-input"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="form-input"
                          />
                        </div>

                        {/* Inquiry Category */}
                        <div>
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                            Inquiry Category{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            required
                            className="form-input form-select"
                          >
                            {inquiryCategories.map((c) => (
                              <option key={c.value} value={c.value}>
                                {c.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="mb-5">
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="Brief subject of your inquiry"
                          required
                          className="form-input"
                        />
                      </div>

                      {/* Message */}
                      <div className="mb-5">
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Describe your query in detail so we can assist you better…"
                          required
                          className="form-input"
                        />
                      </div>

                      {/* Attachment */}
                      <div className="mb-8">
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                          Attachment{" "}
                          <span className="text-gray-400 font-normal">
                            (optional — PDF, JPG, PNG · max 5 MB)
                          </span>
                        </label>
                        <label className="flex items-center gap-3 border-2 border-dashed border-gray-200 rounded-xl px-5 py-4 cursor-pointer hover:border-[#0B3D91] transition-colors group">
                          <FaPaperclip className="text-gray-400 group-hover:text-[#0B3D91] transition-colors text-lg flex-shrink-0" />
                          <span className="text-sm text-gray-400 group-hover:text-[#0B3D91] transition-colors">
                            {form.file
                              ? form.file.name
                              : "Click to browse or drag & drop file here"}
                          </span>
                          <input
                            ref={fileRef}
                            type="file"
                            name="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-shine flex items-center gap-2 bg-[#0B3D91] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:bg-[#072c6b] transition-all disabled:opacity-60"
                        >
                          {submitting ? (
                            <>
                              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Sending…
                            </>
                          ) : (
                            <>
                              <FaPaperPlane /> Submit Message
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={handleReset}
                          className="flex items-center gap-2 border-2 border-gray-200 text-gray-600 px-7 py-3.5 rounded-xl font-bold text-sm hover:border-gray-400 transition-all"
                        >
                          <FaRedo size={12} /> Reset Form
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {/* Support channels */}
              <Reveal delay={0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="font-bold text-gray-900 text-base mb-4">
                    Other Ways to Reach Us
                  </h3>
                  <div className="space-y-3">
                    {channels.map((c, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 ${c.bg} rounded-xl p-3`}
                      >
                        <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                          <c.icon style={{ color: c.color }} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">
                            {c.title}
                          </p>
                          <p className="text-xs text-gray-500">{c.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Inquiry category quick-ref */}
              <Reveal delay={0.15}>
                <div className="bg-[#041f5d] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
                    <FaQuestionCircle className="text-amber-400" /> Inquiry
                    Types
                  </h3>
                  <ul className="space-y-2.5">
                    {inquiryCategories.slice(1).map((c, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-sm text-white/75"
                      >
                        <c.icon className="text-amber-400 text-xs flex-shrink-0" />
                        {c.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Working hours reminder */}
              <Reveal delay={0.2}>
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex gap-3">
                  <FaClock className="text-emerald-600 text-xl flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-emerald-800 mb-1">
                      Response Time
                    </p>
                    <p className="text-xs text-emerald-700 leading-relaxed">
                      We typically respond within{" "}
                      <strong>24 working hours</strong>. Phone support is
                      available Mon–Sat, 9 AM – 6 PM IST.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. GOOGLE MAP ══ */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-3 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0B3D91] font-bold block mb-2">
                Find Us
              </span>
              <h2 className="font-display text-4xl text-gray-900">
                Our Location
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=Education+Bhavan+Masab+Tank+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine flex items-center gap-2 bg-[#0B3D91] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-[#072c6b] transition-colors"
            >
              <FaDirections /> Get Directions <FaArrowRight size={11} />
            </a>
          </div>
          <div className="section-divider w-20 mb-8" />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Map embed */}
            <div className="lg:col-span-2 map-frame" style={{ minHeight: 400 }}>
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0773748682996!2d78.44765687516687!3d17.401165983461823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97220c69d095%3A0x2d8b9a5b1e4e9a0d!2sMasab%20Tank%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1716987654321!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address card */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex-1">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0B3D91] text-xl mb-4">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-3">
                  Government Education Welfare Office
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  3rd Floor, Education Bhavan,
                  <br />
                  Masab Tank, Hyderabad – 500 028,
                  <br />
                  Telangana, India
                </p>
                <div className="space-y-2 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <FaClock className="text-[#0B3D91]" /> Mon–Fri: 9:00 AM –
                    6:00 PM
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <FaPhone className="text-[#0B3D91]" /> +91 9876 543 210
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <FaEnvelope className="text-[#0B3D91]" />{" "}
                    support@govportal.com
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Education+Bhavan+Masab+Tank+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine flex items-center justify-center gap-2 bg-[#FFD700] text-[#0B3D91] px-6 py-4 rounded-2xl font-black text-sm shadow-lg hover:bg-yellow-300 transition-all"
              >
                <FaDirections className="text-lg" /> Open in Google Maps
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default ContactPage;

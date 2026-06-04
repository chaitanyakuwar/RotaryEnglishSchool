import Navbar from "../components/common/Navbar";

import { useState } from "react";
import {
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
  RiTimeLine,
  RiSendPlaneLine,
  RiCheckboxCircleLine,
  RiFacebookFill,
  RiYoutubeFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiArrowRightLine,
  RiUserLine,
  RiQuestionLine,
  RiInformationLine,
  RiWhatsappLine,
} from "react-icons/ri";

const contactCards = [
  {
    icon: <RiPhoneLine />,
    title: "Call Us",
    lines: ["02566-246574", "+91 9527084764"],
    sub: "Mon – Sat, 7:00 AM – 5:00 PM",
    color: "#1A56A0",
    light: "#E6F1FB",
    action: "tel:+919527084764",
    actionLabel: "Call Now",
  },
  {
    icon: <RiWhatsappLine />,
    title: "WhatsApp",
    lines: ["+91 9527084764"],
    sub: "Quick response during school hours",
    color: "#16A34A",
    light: "#DCFCE7",
    action: "https://wa.me/919527084764",
    actionLabel: "Chat Now",
  },
  {
    icon: <RiMailLine />,
    title: "Email Us",
    lines: ["rotaryenglishschool@yahoo.in"],
    sub: "We reply within 24 hours",
    color: "#7C3AED",
    light: "#EDE9FE",
    action: "mailto:rotaryenglishschool@yahoo.in",
    actionLabel: "Send Email",
  },
  {
    icon: <RiMapPinLine />,
    title: "Visit Us",
    lines: [
      "S.No. 356/2, Malpur Road,",
      "Dondaicha, Tal: Shindkheda,",
      "Dist: Dhule – 425408, Maharashtra",
    ],
    sub: "Click to get directions",
    color: "#DC2626",
    light: "#FEE2E2",
    action: "https://maps.google.com/?q=Rotary+English+School+Dondaicha",
    actionLabel: "Get Directions",
  },
];

const officeHours = [
  { day: "Monday – Friday", time: "7:00 AM – 5:00 PM", open: true },
  { day: "Saturday", time: "7:00 AM – 1:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
  { day: "Public Holidays", time: "Closed", open: false },
];

const quickLinks = [
  {
    label: "Admission Enquiry",
    href: "/admission-enquiry",
    icon: <RiUserLine />,
  },
  {
    label: "Fee Structure",
    href: "/fees-structure",
    icon: <RiInformationLine />,
  },
  {
    label: "Transfer Certificate",
    href: "/transfer-certificate",
    icon: <RiQuestionLine />,
  },
];

const subjects = [
  "General Enquiry",
  "Admission",
  "Fee Related",
  "Transfer Certificate",
  "Academic Records",
  "Transport",
  "Other",
];

const socials = [
  {
    icon: <RiFacebookFill />,
    href: "https://www.facebook.com/rotaryenglishschooldondaicha",
    label: "Facebook",
    color: "#1877F2",
  },
  {
    icon: <RiYoutubeFill />,
    href: "https://www.youtube.com/channel/UC5qWOe7VvBh3NUOyf5CD8mA",
    label: "YouTube",
    color: "#EF4444",
  },
  {
    icon: <RiInstagramLine />,
    href: "https://www.instagram.com/smt.res/",
    label: "Instagram",
    color: "#E1306C",
  },
  {
    icon: <RiLinkedinFill />,
    href: "https://www.linkedin.com/in/smt-res-school-98877820b/",
    label: "LinkedIn",
    color: "#0A66C2",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.subject) e.subject = "Please select a subject";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition bg-white ${
      errors[field]
        ? "border-red-300 focus:ring-red-200"
        : "border-gray-200 focus:ring-[#1A56A0]/20 focus:border-[#1A56A0]"
    }`;
  return (
    <>
      <section>
        <Navbar />
        <div className="w-full h-full bg-white p-6">
          <section
            className="min-h-screen overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg,#F8FAFC 0%,#EFF6FF 60%,#F8FAFC 100%)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {/* ── HERO BANNER ── */}
            <div
              className="relative overflow-hidden py-20 px-6"
              style={{ background: "#0B1F3A" }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #60A5FA, transparent)",
                  transform: "translate(30%,-30%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #F4C300, transparent)",
                  transform: "translate(-30%,30%)",
                }}
              />

              <div className="relative max-w-6xl mx-auto text-center">
                <p
                  className="text-xs font-bold uppercase tracking-[5px] mb-3"
                  style={{ color: "#F4C300" }}
                >
                  Get In Touch
                </p>
                <h1
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(32px,5vw,52px)",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.1,
                  }}
                >
                  Contact Us
                </h1>
                <p
                  className="mt-4 text-base leading-relaxed mx-auto"
                  style={{ color: "rgba(255,255,255,0.6)", maxWidth: 480 }}
                >
                  We're here to help. Reach out to us for admissions, academic
                  queries, or any other information about our school.
                </p>
                <div className="flex justify-center gap-1.5 mt-6">
                  <div
                    className="w-10 h-1 rounded-full"
                    style={{ background: "#1A56A0" }}
                  />
                  <div
                    className="w-3 h-1 rounded-full"
                    style={{ background: "#F4C300" }}
                  />
                  <div
                    className="w-1.5 h-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  />
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
              {/* ── CONTACT CARDS ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                {contactCards.map((card, i) => (
                  <a
                    key={i}
                    href={card.action}
                    target={
                      card.action.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noreferrer"
                    className="block rounded-2xl overflow-hidden border transition-all duration-300"
                    style={{
                      background: "white",
                      borderColor: hoveredCard === i ? card.color : "#E2E8F0",
                      boxShadow:
                        hoveredCard === i
                          ? `0 20px 60px ${card.color}18`
                          : "0 2px 12px rgba(11,31,58,0.06)",
                      transform:
                        hoveredCard === i
                          ? "translateY(-5px)"
                          : "translateY(0)",
                    }}
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className="h-1"
                      style={{
                        background: `linear-gradient(90deg, ${card.color}, ${card.color}99)`,
                      }}
                    />
                    <div className="p-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 transition-transform duration-300"
                        style={{
                          background: card.light,
                          color: card.color,
                          transform:
                            hoveredCard === i
                              ? "scale(1.1) rotate(-5deg)"
                              : "scale(1)",
                        }}
                      >
                        {card.icon}
                      </div>
                      <p
                        className="text-xs font-bold uppercase tracking-wider mb-2"
                        style={{ color: card.color }}
                      >
                        {card.title}
                      </p>
                      {card.lines.map((line, j) => (
                        <p
                          key={j}
                          className="font-semibold text-sm text-[#0B1F3A] leading-snug"
                        >
                          {line}
                        </p>
                      ))}
                      <p className="text-xs text-gray-400 mt-2 mb-4">
                        {card.sub}
                      </p>
                      <div
                        className="flex items-center gap-1.5 text-xs font-bold transition-all duration-200"
                        style={{ color: card.color }}
                      >
                        {card.actionLabel}{" "}
                        <RiArrowRightLine
                          className={`transition-transform duration-200 ${hoveredCard === i ? "translate-x-1" : ""}`}
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* ── MAIN 2-COL ── */}
              <div className="grid lg:grid-cols-[1fr_420px] gap-8 mb-12">
                {/* LEFT — Contact Form */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="px-8 py-6" style={{ background: "#0B1F3A" }}>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: "#F4C300" }}
                    >
                      Send a Message
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "white",
                      }}
                    >
                      We'd Love to Hear From You
                    </h3>
                  </div>

                  <div className="p-8">
                    {submitted ? (
                      <div className="text-center py-12">
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                          style={{ background: "#DCFCE7" }}
                        >
                          <RiCheckboxCircleLine className="text-green-500 text-4xl" />
                        </div>
                        <h4
                          className="font-bold text-[#0B1F3A] text-xl mb-2"
                          style={{ fontFamily: "'Playfair Display',serif" }}
                        >
                          Message Sent!
                        </h4>
                        <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed mb-6">
                          Thank you for reaching out. We will get back to you
                          within 24 working hours.
                        </p>
                        <button
                          className="px-6 py-3 rounded-xl font-semibold text-sm text-white cursor-pointer transition hover:opacity-90"
                          style={{ background: "#0B1F3A" }}
                          onClick={() => {
                            setSubmitted(false);
                            setForm({
                              name: "",
                              phone: "",
                              email: "",
                              subject: "",
                              message: "",
                            });
                          }}
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          {/* Name */}
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                              Full Name <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Your full name"
                              value={form.name}
                              onChange={(e) => {
                                setForm({ ...form, name: e.target.value });
                                setErrors({ ...errors, name: "" });
                              }}
                              className={inputClass("name")}
                            />
                            {errors.name && (
                              <p className="text-red-400 text-xs mt-1">
                                {errors.name}
                              </p>
                            )}
                          </div>

                          {/* Phone */}
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                              Phone Number{" "}
                              <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="tel"
                              placeholder="+91 XXXXXXXXXX"
                              value={form.phone}
                              onChange={(e) => {
                                setForm({ ...form, phone: e.target.value });
                                setErrors({ ...errors, phone: "" });
                              }}
                              className={inputClass("phone")}
                            />
                            {errors.phone && (
                              <p className="text-red-400 text-xs mt-1">
                                {errors.phone}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                            Email Address{" "}
                            <span className="text-gray-300 font-normal">
                              (Optional)
                            </span>
                          </label>
                          <input
                            type="email"
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            className={inputClass("email")}
                          />
                        </div>

                        {/* Subject */}
                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                            Subject <span className="text-red-400">*</span>
                          </label>
                          <select
                            value={form.subject}
                            onChange={(e) => {
                              setForm({ ...form, subject: e.target.value });
                              setErrors({ ...errors, subject: "" });
                            }}
                            className={inputClass("subject")}
                          >
                            <option value="">Select a subject...</option>
                            {subjects.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          {errors.subject && (
                            <p className="text-red-400 text-xs mt-1">
                              {errors.subject}
                            </p>
                          )}
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                            Message <span className="text-red-400">*</span>
                          </label>
                          <textarea
                            rows={5}
                            placeholder="Write your message here..."
                            value={form.message}
                            onChange={(e) => {
                              setForm({ ...form, message: e.target.value });
                              setErrors({ ...errors, message: "" });
                            }}
                            className={inputClass("message")}
                            style={{ resize: "none" }}
                          />
                          {errors.message && (
                            <p className="text-red-400 text-xs mt-1">
                              {errors.message}
                            </p>
                          )}
                        </div>

                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white transition cursor-pointer hover:opacity-90 hover:scale-[1.01]"
                          style={{
                            background:
                              "linear-gradient(135deg, #0B1F3A, #1A56A0)",
                            boxShadow: "0 8px 32px rgba(26,86,160,0.3)",
                          }}
                        >
                          <RiSendPlaneLine className="text-lg" /> Send Message
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                {/* RIGHT — Info Sidebar */}
                <div className="space-y-5">
                  {/* Office Hours */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: "#E6F1FB" }}
                      >
                        <RiTimeLine className="text-[#1A56A0] text-lg" />
                      </div>
                      <h4 className="font-bold text-[#0B1F3A] text-sm">
                        Office Hours
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {officeHours.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0"
                        >
                          <span className="text-sm text-gray-600">{h.day}</span>
                          <span
                            className="text-xs font-bold px-3 py-1 rounded-full"
                            style={{
                              background: h.open ? "#DCFCE7" : "#FEE2E2",
                              color: h.open ? "#16A34A" : "#DC2626",
                            }}
                          >
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h4 className="font-bold text-[#0B1F3A] text-sm mb-4">
                      Quick Links
                    </h4>
                    <div className="space-y-2">
                      {quickLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group hover:bg-[#E6F1FB]"
                        >
                          <span
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 transition"
                            style={{ background: "#F1F5F9", color: "#1A56A0" }}
                          >
                            {link.icon}
                          </span>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-[#1A56A0] transition">
                            {link.label}
                          </span>
                          <RiArrowRightLine className="ml-auto text-gray-300 group-hover:text-[#1A56A0] group-hover:translate-x-0.5 transition-all text-sm" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Social Media */}
                  <div
                    className="rounded-2xl p-6"
                    style={{ background: "#0B1F3A" }}
                  >
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-4"
                      style={{ color: "#F4C300" }}
                    >
                      Follow Us
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {socials.map((s, i) => (
                        <a
                          key={i}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-105"
                          style={{
                            background: `${s.color}22`,
                            border: `1px solid ${s.color}33`,
                          }}
                        >
                          <span className="text-xl" style={{ color: s.color }}>
                            {s.icon}
                          </span>
                          <span className="text-xs font-semibold text-white">
                            {s.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── GOOGLE MAP ── */}
              <div
                className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-12"
                style={{ height: "420px" }}
              >
                <iframe
                  title="SMT RES Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14867.537251387193!2d74.5594561!3d21.3155871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee9d5e51c51fedcc!2sRotary+English+School!5e0!3m2!1sen!2sin!4v1480075123318"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* ── BOTTOM CTA STRIP ── */}
              <div
                className="rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg,#0B1F3A 0%,#1A56A0 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "#F4C300" }}
                  >
                    Admissions Open
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    Interested in Joining SMT RES?
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Apply for Academic Year 2025–26. Limited seats available.
                  </p>
                </div>
                <div className="relative flex gap-3 flex-shrink-0">
                  <a
                    href="/admission-enquiry"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm cursor-pointer hover:scale-105 transition-transform"
                    style={{
                      background: "#F4C300",
                      color: "#0B1F3A",
                      boxShadow: "0 4px 20px rgba(244,195,0,0.35)",
                    }}
                  >
                    Apply Now <RiArrowRightLine />
                  </a>
                  <a
                    href="tel:+919527084764"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border text-white hover:bg-white/10 transition"
                    style={{ borderColor: "rgba(255,255,255,0.3)" }}
                  >
                    <RiPhoneLine /> Call Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;

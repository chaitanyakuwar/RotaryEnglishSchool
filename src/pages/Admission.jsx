import Navbar from "../components/common/Navbar";
import { useState } from "react";

// ── Steps ──────────────────────────────────────────────────────────
const steps = [
  {
    step: "01",
    title: "Check Availability",
    desc: "Visit or call the school to check seat availability in the desired class (Std. I to X). Admission is open to all irrespective of caste, creed or social status.",
    icon: <SearchIcon />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    step: "02",
    title: "Collect Documents",
    desc: "Gather all required documents listed below. Ensure originals and photocopies are ready before visiting the school office.",
    icon: <ClipboardIcon />,
    color: "bg-amber-50 text-amber-600",
  },
  {
    step: "03",
    title: "Submit Application",
    desc: "Visit the school office with all documents during working hours (Mon–Sat, 7:00 AM – 5:00 PM) and submit the admission form.",
    icon: <DocumentIcon />,
    color: "bg-purple-50 text-purple-600",
  },
  {
    step: "04",
    title: "Confirmation",
    desc: "After document verification and seat confirmation, you will receive admission confirmation. Fee payment completes the process.",
    icon: <CheckCircleIcon />,
    color: "bg-green-50 text-green-600",
  },
];

// ── Required documents ─────────────────────────────────────────────
const documents = [
  {
    label: "Original Birth Certificate",
    note: "Required for Std. I only",
    icon: <CertIcon />,
    color: "text-blue-500",
  },
  {
    label: "School Transfer / Leaving Certificate",
    note: "Original required",
    icon: <TransferIcon />,
    color: "text-purple-500",
  },
  {
    label: "Photocopy of Report Card",
    note: "Last academic year",
    icon: <ReportIcon />,
    color: "text-amber-500",
  },
  {
    label: "Photocopy of Aadhar Card",
    note: "Student's Aadhar card",
    icon: <IdIcon />,
    color: "text-teal-500",
  },
  {
    label: "4 Colour Passport Size Photographs",
    note: "Recent photographs",
    icon: <PhotoIcon />,
    color: "text-rose-500",
  },
];

// ── Classes for dropdown ───────────────────────────────────────────
const classOptions = [
  "Nursery",
  "KG",
  "Std. I",
  "Std. II",
  "Std. III",
  "Std. IV",
  "Std. V",
  "Std. VI",
  "Std. VII",
  "Std. VIII",
  "Std. IX",
  "Std. X",
];

// ── SVG Icons ──────────────────────────────────────────────────────
function SearchIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}
function ClipboardIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  );
}
function DocumentIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
function CheckCircleIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function CertIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M12 15l-8.485 3.536 1.06-9.193L12 2l7.425 7.343 1.06 9.193z" />
    </svg>
  );
}
function TransferIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  );
}
function ReportIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}
function IdIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2" />
    </svg>
  );
}
function PhotoIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M19 9l-7 7-7-7" />
    </svg>
  );
}
function SendIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22l-4-9-9-4 20-7z" />
    </svg>
  );
}

// ── Input Component ────────────────────────────────────────────────
function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:border-[#1a2e4a] focus:ring-2 focus:ring-[#1a2e4a]/10 transition-all placeholder:text-gray-300";

const Admission = () => {
  const [activeTab, setActiveTab] = useState("process"); // "process" | "enquiry"
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    classApplying: "",
    currentSchool: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.studentName.trim()) e.studentName = "Student name is required";
    if (!form.parentName.trim()) e.parentName = "Parent name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.classApplying) e.classApplying = "Please select a class";
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
  return (
    <>
      <section>
        <Navbar />
        <div className="w-full h-full p-6">
          <div className="min-h-screen bg-gray-50 font-sans">
            {/* ── Hero ──────────────────────────────────────── */}
            <div className="relative overflow-hidden bg-[#1a2e4a]">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#c8973a]/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

              <div className="relative max-w-5xl mx-auto px-6 py-14">
                <h1
                  className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Admissions at <span className="text-[#c8973a]">SMT RES</span>
                </h1>
                <p className="text-blue-200/70 text-base max-w-xl leading-relaxed">
                  Open to all — irrespective of caste, creed or social status.
                  Classes I to X. Simple process, warm welcome.
                </p>

                {/* Quick info pills */}
                <div className="flex flex-wrap gap-3 mt-7">
                  {[
                    { icon: <MapPinIcon />, text: "Malpur Road, Dondaicha" },
                    {
                      icon: <PhoneIcon />,
                      text: "02566-246574 / +91 9527084764",
                    },
                    {
                      icon: (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                      ),
                      text: "Mon–Sat, 7:00 AM – 5:00 PM",
                    },
                  ].map((p, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur text-white/80 text-xs px-3 py-1.5 rounded-full border border-white/10"
                    >
                      {p.icon} {p.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Tab bar ───────────────────────────────────── */}
            <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
              <div className="max-w-5xl mx-auto px-6">
                <div className="flex gap-0">
                  {[
                    { id: "process", label: "Admission Process" },
                    { id: "enquiry", label: "Enquiry Form" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-5 py-4 text-sm font-semibold border-b-2 transition-all duration-150 ${
                        activeTab === tab.id
                          ? "border-[#c8973a] text-[#1a2e4a]"
                          : "border-transparent text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-10">
              {/* ══════════════════════════════════════════════
            TAB 1 — ADMISSION PROCESS
        ══════════════════════════════════════════════ */}
              {activeTab === "process" && (
                <div className="space-y-14">
                  {/* Steps */}
                  <div>
                    <div className="mb-8">
                      <span className="text-xs font-semibold tracking-widest uppercase text-[#c8973a] mb-2 block">
                        How to Apply
                      </span>
                      <h2
                        className="text-2xl font-bold text-[#1a2e4a]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Step-by-Step Process
                      </h2>
                      <p className="text-sm text-gray-400 mt-1">
                        Follow these simple steps to complete your admission.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      {steps.map((s, i) => (
                        <div
                          key={i}
                          className="relative bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                        >
                          {/* Connector line */}
                          {i < steps.length - 1 && (
                            <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-gray-200 z-10" />
                          )}
                          <div className="flex items-start justify-between mb-4">
                            <div
                              className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center flex-shrink-0`}
                            >
                              {s.icon}
                            </div>
                            <span className="text-3xl font-black text-gray-100 select-none leading-none">
                              {s.step}
                            </span>
                          </div>
                          <h3 className="text-sm font-semibold text-gray-800 mb-2">
                            {s.title}
                          </h3>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            {s.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Documents Required */}
                  <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div>
                      <span className="text-xs font-semibold tracking-widest uppercase text-[#c8973a] mb-2 block">
                        Checklist
                      </span>
                      <h2
                        className="text-2xl font-bold text-[#1a2e4a] mb-6"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Documents Required
                      </h2>
                      <div className="space-y-3">
                        {documents.map((doc, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-4 py-3.5 shadow-sm"
                          >
                            <div
                              className={`w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 ${doc.color}`}
                            >
                              {doc.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-800 leading-snug">
                                {doc.label}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {doc.note}
                              </p>
                            </div>
                            <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-gray-200" />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Note */}
                      <div className="mt-5 flex gap-3 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                        <svg
                          className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4M12 8h.01" />
                        </svg>
                        <p className="text-xs text-blue-700 leading-relaxed">
                          Please bring both <strong>originals</strong> and{" "}
                          <strong>photocopies</strong> of all documents.
                          Originals will be verified and returned.
                        </p>
                      </div>
                    </div>

                    {/* Info card */}
                    <div className="space-y-4">
                      {/* Eligibility */}
                      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-sm font-semibold text-[#1a2e4a] mb-4 flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                            <CheckCircleIcon />
                          </div>
                          Eligibility
                        </h3>
                        <ul className="space-y-2.5 text-xs text-gray-600">
                          {[
                            "Classes I to X — subject to seat availability",
                            "Open to all — irrespective of caste, creed or social status",
                            "Age appropriate class placement",
                            "Prior academic records may be reviewed",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <svg
                                className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2.5}
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Office hours */}
                      <div className="bg-[#1a2e4a] rounded-2xl p-6 text-white">
                        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-[#c8973a]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          Office Hours
                        </h3>
                        <div className="space-y-2 text-xs text-blue-200/80">
                          <div className="flex justify-between">
                            <span>Monday – Friday</span>
                            <span className="text-white font-medium">
                              7:00 AM – 5:00 PM
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday</span>
                            <span className="text-white font-medium">
                              7:00 AM – 5:00 PM
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday</span>
                            <span className="text-red-300 font-medium">
                              Closed
                            </span>
                          </div>
                        </div>
                        <div className="mt-5 pt-4 border-t border-white/10">
                          <a
                            href="tel:+919527084764"
                            className="flex items-center gap-2 text-xs text-[#c8973a] font-semibold hover:text-amber-300 transition-colors"
                          >
                            <PhoneIcon /> 02566-246574 / +91 9527084764
                          </a>
                        </div>
                      </div>

                      {/* CTA to enquiry */}
                      <button
                        onClick={() => setActiveTab("enquiry")}
                        className="w-full flex items-center justify-center gap-2 bg-[#c8973a] hover:bg-[#b5852e] text-white font-semibold py-3.5 rounded-2xl transition-all hover:-translate-y-0.5 shadow-md text-sm"
                      >
                        <SendIcon /> Fill Enquiry Form
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ══════════════════════════════════════════════
            TAB 2 — ENQUIRY FORM
        ══════════════════════════════════════════════ */}
              {activeTab === "enquiry" && (
                <div className="grid md:grid-cols-5 gap-10">
                  {/* Form */}
                  <div className="md:col-span-3">
                    <div className="mb-7">
                      <span className="text-xs font-semibold tracking-widest uppercase text-[#c8973a] mb-2 block">
                        Get in Touch
                      </span>
                      <h2
                        className="text-2xl font-bold text-[#1a2e4a]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Admission Enquiry Form
                      </h2>
                      <p className="text-sm text-gray-400 mt-1">
                        Fill in your details and we'll get back to you shortly.
                      </p>
                    </div>

                    {submitted ? (
                      <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm flex flex-col items-center text-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          Enquiry Submitted!
                        </h3>
                        <p className="text-sm text-gray-500 max-w-xs">
                          Thank you, <strong>{form.parentName}</strong>! Our
                          team will contact you on <strong>{form.phone}</strong>{" "}
                          within 1–2 working days.
                        </p>
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setForm({
                              studentName: "",
                              parentName: "",
                              phone: "",
                              email: "",
                              classApplying: "",
                              currentSchool: "",
                              message: "",
                            });
                          }}
                          className="mt-2 px-6 py-2.5 bg-[#1a2e4a] text-white rounded-xl text-sm font-medium hover:bg-[#243d62] transition-colors"
                        >
                          Submit Another Enquiry
                        </button>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleSubmit}
                        className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm space-y-5"
                      >
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Field label="Student's Full Name" required>
                            <div className="relative">
                              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300">
                                <UserIcon />
                              </span>
                              <input
                                name="studentName"
                                value={form.studentName}
                                onChange={handleChange}
                                placeholder="e.g. Rahul Patil"
                                className={`${inputCls} pl-10 ${errors.studentName ? "border-red-300" : ""}`}
                              />
                            </div>
                            {errors.studentName && (
                              <p className="text-xs text-red-400 mt-1">
                                {errors.studentName}
                              </p>
                            )}
                          </Field>

                          <Field label="Parent / Guardian Name" required>
                            <div className="relative">
                              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300">
                                <UserIcon />
                              </span>
                              <input
                                name="parentName"
                                value={form.parentName}
                                onChange={handleChange}
                                placeholder="e.g. Suresh Patil"
                                className={`${inputCls} pl-10 ${errors.parentName ? "border-red-300" : ""}`}
                              />
                            </div>
                            {errors.parentName && (
                              <p className="text-xs text-red-400 mt-1">
                                {errors.parentName}
                              </p>
                            )}
                          </Field>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <Field label="Phone Number" required>
                            <div className="relative">
                              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300">
                                <PhoneIcon />
                              </span>
                              <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+91 XXXXXXXXXX"
                                type="tel"
                                className={`${inputCls} pl-10 ${errors.phone ? "border-red-300" : ""}`}
                              />
                            </div>
                            {errors.phone && (
                              <p className="text-xs text-red-400 mt-1">
                                {errors.phone}
                              </p>
                            )}
                          </Field>

                          <Field label="Email Address">
                            <div className="relative">
                              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300">
                                <MailIcon />
                              </span>
                              <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                type="email"
                                className={`${inputCls} pl-10`}
                              />
                            </div>
                          </Field>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <Field label="Class Applying For" required>
                            <div className="relative">
                              <select
                                name="classApplying"
                                value={form.classApplying}
                                onChange={handleChange}
                                className={`${inputCls} appearance-none pr-10 ${errors.classApplying ? "border-red-300" : ""} text-gray-700`}
                              >
                                <option value="">Select class…</option>
                                {classOptions.map((c) => (
                                  <option key={c} value={c}>
                                    {c}
                                  </option>
                                ))}
                              </select>
                              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                                <ChevronDownIcon />
                              </span>
                            </div>
                            {errors.classApplying && (
                              <p className="text-xs text-red-400 mt-1">
                                {errors.classApplying}
                              </p>
                            )}
                          </Field>

                          <Field label="Current School (if any)">
                            <input
                              name="currentSchool"
                              value={form.currentSchool}
                              onChange={handleChange}
                              placeholder="Previous school name"
                              className={inputCls}
                            />
                          </Field>
                        </div>

                        <Field label="Additional Message">
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Any specific questions or information…"
                            className={`${inputCls} resize-none`}
                          />
                        </Field>

                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 bg-[#1a2e4a] hover:bg-[#243d62] text-white font-semibold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-md text-sm mt-2"
                        >
                          <SendIcon /> Submit Enquiry
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Side info */}
                  <div className="md:col-span-2 space-y-4">
                    {/* Contact card */}
                    <div className="bg-[#1a2e4a] rounded-2xl p-6 text-white">
                      <h3
                        className="text-sm font-semibold mb-5"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        Contact Us Directly
                      </h3>
                      <div className="space-y-4 text-xs">
                        <a
                          href="tel:+919527084764"
                          className="flex items-start gap-3 text-blue-200/80 hover:text-white transition-colors"
                        >
                          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                            <PhoneIcon />
                          </div>
                          <div>
                            <p className="font-medium text-white">Call Us</p>
                            <p>02566-246574 / +91 9527084764</p>
                          </div>
                        </a>
                        <a
                          href="mailto:rotaryenglishschool@yahoo.in"
                          className="flex items-start gap-3 text-blue-200/80 hover:text-white transition-colors"
                        >
                          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                            <MailIcon />
                          </div>
                          <div>
                            <p className="font-medium text-white">Email Us</p>
                            <p>rotaryenglishschool@yahoo.in</p>
                          </div>
                        </a>
                        <div className="flex items-start gap-3 text-blue-200/80">
                          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                            <MapPinIcon />
                          </div>
                          <div>
                            <p className="font-medium text-white">Visit Us</p>
                            <p>
                              S.No. 356/2, Malpur Road, Dondaicha, Tal:
                              Shindkhda, Dist: Dhule, Maharashtra 425408
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick checklist */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                      <h3 className="text-sm font-semibold text-[#1a2e4a] mb-4">
                        Documents Checklist
                      </h3>
                      <ul className="space-y-2.5">
                        {documents.map((d, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2.5 text-xs text-gray-600"
                          >
                            <div
                              className={`w-4 h-4 flex items-center justify-center flex-shrink-0 ${d.color}`}
                            >
                              {d.icon}
                            </div>
                            {d.label}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => setActiveTab("process")}
                        className="mt-4 text-xs text-[#1a2e4a] font-semibold hover:text-[#c8973a] transition-colors"
                      >
                        ← View full process
                      </button>
                    </div>

                    {/* Response time */}
                    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <svg
                          className="w-4 h-4 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        <p className="text-xs font-semibold text-amber-700">
                          Response Time
                        </p>
                      </div>
                      <p className="text-xs text-amber-700">
                        We typically respond within{" "}
                        <strong>1–2 working days</strong> of receiving your
                        enquiry.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admission;

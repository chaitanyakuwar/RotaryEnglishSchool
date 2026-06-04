import { useState } from "react";

// ── Sample alumni data ──────────────────────────────────────────────
const alumniData = [
  {
    id: 1,
    name: "Rahul Patil",
    batch: "2015",
    profession: "Software Engineer",
    company: "TCS, Pune",
    avatar: "RP",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Priya Deshmukh",
    batch: "2016",
    profession: "Doctor (MBBS)",
    company: "Civil Hospital, Dhule",
    avatar: "PD",
    color: "bg-pink-500",
  },
  {
    id: 3,
    name: "Amit Mahajan",
    batch: "2014",
    profession: "Civil Engineer",
    company: "L&T, Mumbai",
    avatar: "AM",
    color: "bg-green-500",
  },
  {
    id: 4,
    name: "Sneha Chaudhari",
    batch: "2017",
    profession: "CA",
    company: "Self-Employed",
    avatar: "SC",
    color: "bg-purple-500",
  },
  {
    id: 5,
    name: "Vikas Sonawane",
    batch: "2013",
    profession: "IPS Officer",
    company: "Maharashtra Police",
    avatar: "VS",
    color: "bg-amber-500",
  },
  {
    id: 6,
    name: "Pooja Borse",
    batch: "2018",
    profession: "Teacher",
    company: "ZP School, Dondaicha",
    avatar: "PB",
    color: "bg-teal-500",
  },
  {
    id: 7,
    name: "Nikhil Jadhav",
    batch: "2012",
    profession: "Entrepreneur",
    company: "Jadhav Agro Pvt. Ltd",
    avatar: "NJ",
    color: "bg-red-500",
  },
  {
    id: 8,
    name: "Dipali Wagh",
    batch: "2019",
    profession: "B.Tech Student",
    company: "COEP, Pune",
    avatar: "DW",
    color: "bg-indigo-500",
  },
];

const stats = [
  { label: "Total Alumni", value: "500+", icon: <UserGroupIcon /> },
  { label: "Batches", value: "20+", icon: <CalendarIcon /> },
  { label: "Cities", value: "15+", icon: <LocationIcon /> },
  { label: "Professionals", value: "300+", icon: <BriefcaseIcon /> },
];

const batches = [
  "All",
  ...Array.from(new Set(alumniData.map((a) => a.batch))).sort((a, b) => b - a),
];

// ── Icons ──────────────────────────────────────────────────────────
function UserGroupIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function SearchIcon() {
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
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M6 18L18 6M6 6l12 12" />
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
function PlusIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M12 4v16m8-8H4" />
    </svg>
  );
}

function AlumniCard({ name, batch, profession, company, avatar, color }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      {/* Avatar */}
      <div
        className={`w-16 h-16 rounded-full ${color} flex items-center justify-center text-white text-xl font-semibold shadow-md`}
      >
        {avatar}
      </div>
      {/* Info */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
        <p className="text-xs text-gray-500 mt-0.5">{profession}</p>
        <p className="text-xs text-gray-400 mt-0.5">{company}</p>
      </div>
      {/* Batch badge */}
      <span className="inline-flex items-center gap-1 text-xs font-medium bg-[#1a2e4a]/8 text-[#1a2e4a] px-3 py-1 rounded-full">
        <CalendarIcon /> Batch {batch}
      </span>
    </div>
  );
}

// ── Register Modal ─────────────────────────────────────────────────
function RegisterModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    batch: "",
    profession: "",
    company: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(15,23,42,0.55)", backdropFilter: "blur(4px)" }}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-7 relative animate-fade-in">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <CloseIcon />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center text-center py-6 gap-4">
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
              Registration Successful!
            </h3>
            <p className="text-sm text-gray-500">
              Thank you, {form.name}! We'll add you to the alumni network soon.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2 bg-[#1a2e4a] text-white rounded-xl text-sm font-medium hover:bg-[#243d62] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2
                className="text-xl font-semibold text-[#1a2e4a]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Register as Alumni
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Join the SMT RES Alumni Network
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Rahul Patil"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a2e4a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Batch Year *
                  </label>
                  <input
                    name="batch"
                    value={form.batch}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 2015"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a2e4a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a2e4a] transition-colors"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Profession *
                  </label>
                  <input
                    name="profession"
                    value={form.profession}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Software Engineer"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a2e4a] transition-colors"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Company / Organization
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="e.g. TCS, Pune"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a2e4a] transition-colors"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a2e4a] transition-colors"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-1 w-full bg-[#1a2e4a] hover:bg-[#243d62] text-white rounded-xl py-3 text-sm font-semibold transition-colors shadow-md"
              >
                Submit Registration
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const Alumini_Card = () => {
  const [search, setSearch] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filtered = alumniData.filter((a) => {
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.profession.toLowerCase().includes(search.toLowerCase()) ||
      a.company.toLowerCase().includes(search.toLowerCase());
    const matchBatch = selectedBatch === "All" || a.batch === selectedBatch;
    return matchSearch && matchBatch;
  });
  return (
    <>
      <section>
        <div className="w-full h-full bg-white">
          <div className="min-h-screen bg-gray-50 font-sans">
            {/* ── Hero Banner ─────────────────────────────── */}
            <div className="relative overflow-hidden bg-[#1a2e4a] mx-6">
              {/* Decorative circles */}
              <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#c8973a]/10 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-white/5 blur-2xl" />

              <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
                {/* Tag */}
                <span className="inline-flex items-center gap-2 bg-[#c8973a]/20 text-[#f0d89a] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  Rotary English Medium School — Dondaicha
                </span>

                <h1
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our <span className="text-[#c8973a]">Alumni</span> Network
                </h1>
                <p className="mt-4 text-blue-200/80 text-base max-w-xl mx-auto leading-relaxed">
                  Celebrating the journeys of our graduates who carry forward
                  the values and spirit of SMT RES into the world.
                </p>

                {/* Register CTA */}
                <button
                  onClick={() => setShowModal(true)}
                  className="mt-8 inline-flex items-center gap-2 bg-[#c8973a] hover:bg-[#b5852e] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <PlusIcon /> Register as Alumni
                </button>
              </div>
            </div>

            {/* ── Stats Bar ───────────────────────────────── */}
            <div className="bg-white border-b border-gray-100 shadow-sm mx-6">
              <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1a2e4a]/8 text-[#1a2e4a] flex items-center justify-center flex-shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[#1a2e4a]">
                        {s.value}
                      </p>
                      <p className="text-xs text-gray-400">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Main Content ─────────────────────────────── */}
            <div className="max-w-5xl mx-auto py-10">
              {/* Search & Filter */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                {/* Search */}
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <SearchIcon />
                  </span>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name, profession or company..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white shadow-sm focus:outline-none focus:border-[#1a2e4a] transition-colors"
                  />
                </div>
                {/* Batch Filter */}
                <div className="relative">
                  <select
                    value={selectedBatch}
                    onChange={(e) => setSelectedBatch(e.target.value)}
                    className="appearance-none w-full sm:w-44 pl-4 pr-9 py-2.5 border border-gray-200 rounded-xl text-sm bg-white shadow-sm focus:outline-none focus:border-[#1a2e4a] transition-colors text-gray-700 cursor-pointer"
                  >
                    {batches.map((b) => (
                      <option key={b} value={b}>
                        {b === "All" ? "All Batches" : `Batch ${b}`}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <ChevronDownIcon />
                  </span>
                </div>
              </div>

              {/* Result count */}
              <p className="text-xs text-gray-400 mb-5">
                Showing{" "}
                <span className="font-semibold text-gray-600">
                  {filtered.length}
                </span>{" "}
                alumni
                {selectedBatch !== "All" && (
                  <>
                    {" "}
                    from batch{" "}
                    <span className="font-semibold text-[#1a2e4a]">
                      {selectedBatch}
                    </span>
                  </>
                )}
              </p>

              {/* Grid */}
              {filtered.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {filtered.map((a) => (
                    <AlumniCard key={a.id} {...a} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-gray-400">
                  <svg
                    className="w-12 h-12 mx-auto mb-3 opacity-40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <p className="text-sm">No alumni found for this search.</p>
                </div>
              )}

              {/* CTA bottom */}
              <div className="mt-14 rounded-2xl bg-[#1a2e4a] p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                <div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Are you an alumnus of SMT RES?
                  </h3>
                  <p className="text-blue-200/70 text-sm mt-1">
                    Join our growing network and reconnect with your batchmates.
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-[#c8973a] hover:bg-[#b5852e] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                >
                  <PlusIcon /> Register Now
                </button>
              </div>
            </div>

            {/* ── Modal ────────────────────────────────────── */}
            {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Alumini_Card;

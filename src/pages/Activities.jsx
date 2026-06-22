import Navbar from "../components/common/Navbar";
import { useState } from "react";

// ── All Activities Data ────────────────────────────────────────────
const activities = [
  {
    id: 1,
    title: "Co-Curricular Activities",
    year: "General",
    category: "Academic",
    img: "https://securelogin.smtres.in//uploaded_files/activities/15358815601501406837curricular_banner.jpg",
  },
  {
    id: 2,
    title: "Hindi Exhibition",
    year: "AY 2022–23",
    category: "Cultural",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1671377834IMG_20221205_121722.jpg",
  },
  {
    id: 3,
    title: "Career Guidance Programme",
    year: "AY 2023–24",
    category: "Academic",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708940027WhatsApp Image 2023-10-28 at 9.12.18 PM.jpeg",
  },
  {
    id: 4,
    title: "Field Visits",
    year: "AY 2023–24",
    category: "Excursion",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708940618IMG-20231006-WA0049.jpg",
  },
  {
    id: 5,
    title: "Lord Ganesh Installation",
    year: "AY 2023–24",
    category: "Cultural",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708940746IMG-20230921-WA0107.jpg",
  },
  {
    id: 6,
    title: "Har Ghar Tiranga Activity",
    year: "AY 2023–24",
    category: "Patriotic",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708940847IMG-20230814-WA0095.jpg",
  },
  {
    id: 7,
    title: "Hindi Speech Competition",
    year: "AY 2023–24",
    category: "Competition",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941004WhatsApp Image 2023-11-24 at 8.45.17 AM.jpeg",
  },
  {
    id: 8,
    title: "Dandiya Celebration",
    year: "AY 2023–24",
    category: "Cultural",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941109WhatsApp Image 2023-10-23 at 9.47.53 PM.jpeg",
  },
  {
    id: 9,
    title: "Paper Reading Competition",
    year: "AY 2023–24",
    category: "Competition",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941138WhatsApp Image 2023-11-24 at 8.47.18 AM.jpeg",
  },
  {
    id: 10,
    title: "Patriotic Song Singing Competition",
    year: "AY 2023–24",
    category: "Patriotic",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941171WhatsApp Image 2023-11-24 at 8.44.13 AM.jpeg",
  },
  {
    id: 11,
    title: "Poetry Recitation Competition",
    year: "AY 2023–24",
    category: "Competition",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941207WhatsApp Image 2023-11-24 at 8.46.19 AM.jpeg",
  },
  {
    id: 12,
    title: "POSCO Committee",
    year: "2024",
    category: "Academic",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941287IMG-20230719-WA0030.jpg",
  },
  {
    id: 13,
    title: "Quiz Competition",
    year: "AY 2023–24",
    category: "Competition",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941349WhatsApp Image 2023-11-24 at 8.41.37 AM.jpeg",
  },
  {
    id: 14,
    title: "Rangoli Competition",
    year: "AY 2023–24",
    category: "Cultural",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941431WhatsApp Image 2023-10-26 at 4.25.09 PM.jpeg",
  },
  {
    id: 15,
    title: "Shloka Recitation Competition",
    year: "AY 2023–24",
    category: "Competition",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941545WhatsApp Image 2023-11-24 at 8.37.23 AM.jpeg",
  },
  {
    id: 16,
    title: "Solo Dance Competition",
    year: "AY 2023–24",
    category: "Cultural",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941568WhatsApp Image 2023-11-24 at 8.38.32 AM.jpeg",
  },
  {
    id: 17,
    title: "Spell Bee Competition",
    year: "AY 2023–24",
    category: "Competition",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941612speel br 2.jpeg",
  },
  {
    id: 18,
    title: "Tree Plantation",
    year: "AY 2023–24",
    category: "Environment",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941723WhatsApp Image 2023-11-24 at 8.49.45 AM.jpeg",
  },
  {
    id: 19,
    title: "Vocabulary Competition",
    year: "AY 2023–24",
    category: "Competition",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1708941756vocablery 1.jpeg",
  },
  {
    id: 20,
    title: "English Parade Activity",
    year: "AY 2025–26",
    category: "Academic",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1765871760WhatsApp Image 2025-12-15 at 8.30.58 AM.jpeg",
  },
  {
    id: 21,
    title: "Morning Meditation Glimpses",
    year: "AY 2025–26",
    category: "Wellness",
    img: "https://securelogin.smtres.in//uploaded_files/activities/1765871799WhatsApp Image 2025-12-12 at 8.34.49 AM.jpeg",
  },
];
// ── Category config ────────────────────────────────────────────────
const categories = {
  All: {
    bg: "bg-gray-100",
    text: "text-gray-600",
    dot: "bg-gray-400",
    icon: "✦",
  },
  Academic: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    dot: "bg-blue-500",
    icon: "📚",
  },
  Cultural: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    dot: "bg-amber-500",
    icon: "🎭",
  },
  Competition: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    dot: "bg-purple-500",
    icon: "🏆",
  },
  Patriotic: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    dot: "bg-orange-500",
    icon: "🇮🇳",
  },
  Excursion: {
    bg: "bg-teal-50",
    text: "text-teal-700",
    dot: "bg-teal-500",
    icon: "🚌",
  },
  Environment: {
    bg: "bg-green-50",
    text: "text-green-700",
    dot: "bg-green-500",
    icon: "🌱",
  },
  Wellness: {
    bg: "bg-rose-50",
    text: "text-rose-700",
    dot: "bg-rose-500",
    icon: "🧘",
  },
};

const allCategories = Object.keys(categories);

// ── Icons ──────────────────────────────────────────────────────────
const ZoomIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
  </svg>
);
const XIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const ChevLeft = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevRight = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M9 5l7 7-7 7" />
  </svg>
);
const SearchIcon = () => (
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

// ── Lightbox ───────────────────────────────────────────────────────
function Lightbox({ items, index, onClose }) {
  const [cur, setCur] = useState(index);
  const prev = (e) => {
    e.stopPropagation();
    setCur((c) => (c - 1 + items.length) % items.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCur((c) => (c + 1) % items.length);
  };
  const item = items[cur];
  const cfg = categories[item.category] || categories.All;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <XIcon />
      </button>

      {/* Prev */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <ChevLeft />
      </button>

      {/* Image + info */}
      <div
        className="flex flex-col items-center gap-4 max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.img}
          alt={item.title}
          className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl"
        />
        <div className="flex items-center gap-3">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${cfg.bg} ${cfg.text}`}
          >
            {cfg.icon} {item.category}
          </span>
          <p className="text-white font-medium text-sm">{item.title}</p>
          <span className="text-white/40 text-xs">{item.year}</span>
        </div>
        <p className="text-white/40 text-xs">
          {cur + 1} / {items.length}
        </p>
      </div>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <ChevRight />
      </button>
    </div>
  );
}

// ── Activity Card ──────────────────────────────────────────────────
function ActivityCard({ item, onClick }) {
  const cfg = categories[item.category] || categories.All;
  return (
    <div
      onClick={onClick}
      className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.parentNode.classList.add(
              "flex",
              "items-center",
              "justify-center",
            );
            e.target.style.display = "none";
            const ph = document.createElement("div");
            ph.className = "text-4xl";
            ph.textContent = cfg.icon;
            e.target.parentNode.appendChild(ph);
          }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#1a2e4a]/0 group-hover:bg-[#003B6D]/60 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center text-[#003B6D]">
            <ZoomIcon />
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.text} shadow-sm`}
          >
            {cfg.icon} {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-[#005DAA] transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {item.year}
        </p>
      </div>
    </div>
  );
}

// ── Stats ──────────────────────────────────────────────────────────
const stats = [
  { value: activities.length + "+", label: "Activities" },
  { value: Object.keys(categories).length - 1 + "+", label: "Categories" },
  { value: "3+", label: "Academic Years" },
  { value: "100%", label: "Student Participation" },
];

const Activities = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered = activities.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSrc =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.year.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSrc;
  });

  const handleCat = (cat) => {
    setActiveCategory(cat);
  };
  return (
    <>
      <section>
        <Navbar />
        <div className="w-full h-full">
          <div className="min-h-screen bg-gray-50 font-sans">
            {/* ── Hero ──────────────────────────────────────── */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#003B6D] via-[#005DAA] to-[#003B6D]">
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#c8973a]/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#c8973a]/5 blur-3xl pointer-events-none" />

              <div className="relative max-w-5xl mx-auto px-6 py-16">
                <span className="inline-flex items-center gap-2 bg-[#c8973a]/20 text-[#f0d89a] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.87L12 17.77l-6.18 3.24 1.18-6.87L2 9.27l6.91-1.01z" />
                  </svg>
                  Co-Curricular & Beyond
                </span>

                <h1
                  className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  School <span className="text-[#F4C300]">Activities</span>
                </h1>
                <p className="text-blue-200/70 text-base max-w-xl leading-relaxed">
                  Exploring abilities, developing strengths and building
                  personality — through activities inside and beyond the
                  classroom.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/8 backdrop-blur border border-white/10 rounded-2xl px-5 py-4 text-center"
                    >
                      <p className="text-2xl font-bold text-[#F4C300]">
                        {s.value}
                      </p>
                      <p className="text-xs text-blue-200/60 mt-0.5">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Sticky filter bar ────────────────────────── */}
            <div className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
              <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                {/* Search */}
                <div className="relative flex-shrink-0 w-full sm:w-56">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                    <SearchIcon />
                  </span>
                  <input
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    placeholder="Search activities…"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:border-[#005DAA] transition-colors"
                  />
                </div>
                {/* Category pills — scrollable on mobile */}
                <div className="flex gap-2 flex-wrap">
                  {allCategories.map((cat) => {
                    const cfg = categories[cat];
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => handleCat(cat)}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-150 whitespace-nowrap ${
                          isActive
                            ? "bg-[#003B6D] text-white border-[#003B6D] shadow"
                            : `${cfg.bg} ${cfg.text} border-transparent hover:border-gray-200`
                        }`}
                      >
                        {cfg.icon} {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── Main grid ────────────────────────────────── */}
            <div className="max-w-5xl mx-auto px-6 py-10">
              {/* Result count */}
              <p className="text-xs text-gray-400 mb-6">
                Showing{" "}
                <span className="font-semibold text-gray-700">
                  {filtered.length}
                </span>{" "}
                activit{filtered.length === 1 ? "y" : "ies"}
                {activeCategory !== "All" && (
                  <>
                    {" "}
                    in{" "}
                    <span className="font-semibold text-[#1a2e4a]">
                      {activeCategory}
                    </span>
                  </>
                )}
                {search && (
                  <>
                    {" "}
                    matching "
                    <span className="font-semibold text-gray-700">
                      {search}
                    </span>
                    "
                  </>
                )}
              </p>

              {filtered.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filtered.map((item, i) => (
                    <ActivityCard
                      key={item.id}
                      item={item}
                      allFiltered={filtered}
                      onClick={() => setLightboxIdx(i)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 text-gray-400">
                  <svg
                    className="w-12 h-12 mx-auto mb-3 opacity-30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm">No activities found.</p>
                  <button
                    onClick={() => {
                      setActiveCategory("All");
                      setSearch("");
                    }}
                    className="mt-3 text-xs text-[#1a2e4a] font-medium hover:text-[#c8973a] transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {/* ── About section ────────────────────────── */}
              <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#c8973a] mb-3 block">
                    Our Philosophy
                  </span>
                  <h2
                    className="text-2xl font-bold text-[#1a2e4a] mb-4 leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Learning Beyond
                    <br />
                    the Classroom
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    These are the activities through which a learner explores
                    their abilities, develops strengths, and eradicates
                    shortcomings through informal guidance, observation and
                    self-assessment.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Activities are undertaken to strengthen classroom learning
                    as well as to develop the overall personality of the child —
                    both inside and outside school.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: "🎨",
                      label: "Creative Arts",
                      desc: "Rangoli, Dance, Drawing",
                    },
                    {
                      icon: "🏆",
                      label: "Competitions",
                      desc: "Quiz, Spell Bee, Speech",
                    },
                    {
                      icon: "🌿",
                      label: "Social Values",
                      desc: "Tree Plantation, POSCO",
                    },
                    {
                      icon: "🇮🇳",
                      label: "National Pride",
                      desc: "Tiranga, Patriotic Songs",
                    },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="bg-gray-50 rounded-2xl p-4 hover:bg-[#1a2e4a]/5 transition-colors"
                    >
                      <p className="text-2xl mb-2">{f.icon}</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {f.label}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Lightbox ──────────────────────────────────── */}
            {lightboxIdx !== null && (
              <Lightbox
                items={filtered}
                index={lightboxIdx}
                onClose={() => setLightboxIdx(null)}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;

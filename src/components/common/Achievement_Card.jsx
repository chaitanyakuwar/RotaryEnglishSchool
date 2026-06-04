import { useState, useEffect, useRef } from "react";
import {
  RiTrophyLine,
  RiMedalLine,
  RiSearchLine,
  RiCloseLine,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiStarLine,
  RiGroupLine,
  RiCalendarLine,
  RiMapPinLine,
} from "react-icons/ri";

const achievements = [
  {
    id: 1,
    title: "State Science Exhibition",
    student: "Riya Sharma",
    class: "Class X",
    year: "2024",
    category: "Academic",
    level: "State",
    medal: "gold",
    position: "1st Place",
    event: "Maharashtra State Science Fair",
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=600&q=80",
    desc: "Outstanding project on solar energy innovation at the Maharashtra State Science Exhibition 2024.",
  },
  {
    id: 2,
    title: "District Cricket Champions",
    student: "School Team",
    class: "Under-17",
    year: "2024",
    category: "Sports",
    level: "District",
    medal: "gold",
    position: "Champions",
    event: "District Cricket Tournament",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
    desc: "Our Under-17 cricket team clinched the District Championship Trophy 2024 with an unbeaten run.",
  },
  {
    id: 3,
    title: "National Math Olympiad",
    student: "Arjun Kulkarni",
    class: "Class IX",
    year: "2024",
    category: "Academic",
    level: "National",
    medal: "silver",
    position: "2nd Rank",
    event: "National Mathematics Olympiad",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    desc: "Secured 2nd rank at the National Mathematics Olympiad, representing Maharashtra with pride.",
  },
  {
    id: 4,
    title: "Zonal Kabaddi Winners",
    student: "School Team",
    class: "Under-14",
    year: "2024",
    category: "Sports",
    level: "Zonal",
    medal: "gold",
    position: "1st Place",
    event: "Zonal Kabaddi Championship",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
    desc: "Under-14 Kabaddi team dominated the Zonal Championship with a thrilling final match victory.",
  },
  {
    id: 5,
    title: "Inter-School Art Competition",
    student: "Anjali Deshmukh",
    class: "Class VIII",
    year: "2024",
    category: "Cultural",
    level: "District",
    medal: "gold",
    position: "Best Artist",
    event: "District Art Exhibition",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
    desc: "Won the 'Best Artist' award at the District Art Exhibition for an extraordinary watercolour painting.",
  },
  {
    id: 6,
    title: "State Quiz Competition",
    student: "Vikram & Neha",
    class: "Class X",
    year: "2023",
    category: "Academic",
    level: "State",
    medal: "bronze",
    position: "3rd Place",
    event: "Maharashtra State Quiz",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    desc: "Represented school brilliantly at the Maharashtra State Quiz Competition, finishing 3rd.",
  },
  {
    id: 7,
    title: "Cultural Dance Performance",
    student: "Dance Group",
    class: "Class VI–VIII",
    year: "2024",
    category: "Cultural",
    level: "State",
    medal: "silver",
    position: "2nd Place",
    event: "State Cultural Fest",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
    desc: "Our cultural dance group mesmerised judges with a classical Lavani performance at the State Cultural Fest.",
  },
  {
    id: 8,
    title: "Board Exam Topper",
    student: "Priya Patil",
    class: "Class X",
    year: "2024",
    category: "Academic",
    level: "District",
    medal: "gold",
    position: "District Topper",
    event: "CBSE Board Examination",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
    desc: "Achieved 98.4% in CBSE Board Examinations, topping the entire district in the 2024 batch.",
  },
  {
    id: 9,
    title: "Robotics Workshop Winner",
    student: "Tech Club",
    class: "Class VII–IX",
    year: "2023",
    category: "Academic",
    level: "Zonal",
    medal: "gold",
    position: "1st Place",
    event: "Zonal Robotics Competition",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    desc: "School's Tech Club built an innovative line-following robot that won 1st place at the Zonal Robotics Championship.",
  },
  {
    id: 10,
    title: "Swimming Championship",
    student: "Rahul More",
    class: "Class VII",
    year: "2023",
    category: "Sports",
    level: "District",
    medal: "silver",
    position: "2nd Place",
    event: "District Swimming Meet",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80",
    desc: "Secured 2nd place in 100m freestyle at the District Swimming Meet with a personal best timing.",
  },
  {
    id: 11,
    title: "Music Recital Award",
    student: "Sneha Tomar",
    class: "Class IX",
    year: "2023",
    category: "Cultural",
    level: "State",
    medal: "gold",
    position: "Best Vocalist",
    event: "State Music Competition",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&q=80",
    desc: "Awarded 'Best Vocalist' at the State Music Competition for an exceptional classical Hindustani performance.",
  },
  {
    id: 12,
    title: "Athletics — 100m Sprint",
    student: "Dev Nikam",
    class: "Class VIII",
    year: "2023",
    category: "Sports",
    level: "Zonal",
    medal: "bronze",
    position: "3rd Place",
    event: "Zonal Athletics Meet",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
    desc: "Finished 3rd in the 100m sprint event at the Zonal Athletics Meet with a personal best of 11.8 seconds.",
  },
];

// ── CONFIG ────────────────────────────────────────────────────────────────────
const categories = ["All", "Academic", "Sports", "Cultural"];
const levels = ["All", "National", "State", "Zonal", "District"];
const years = ["All", "2024", "2023"];

const medalConfig = {
  gold: {
    bg: "from-yellow-400 to-amber-500",
    light: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    label: "Gold",
    emoji: "🥇",
  },
  silver: {
    bg: "from-gray-300 to-slate-400",
    light: "bg-slate-50",
    text: "text-slate-600",
    border: "border-slate-200",
    label: "Silver",
    emoji: "🥈",
  },
  bronze: {
    bg: "from-orange-400 to-orange-600",
    light: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
    label: "Bronze",
    emoji: "🥉",
  },
};

const levelColors = {
  National: "bg-purple-100 text-purple-700",
  State: "bg-blue-100 text-blue-700",
  Zonal: "bg-teal-100 text-teal-700",
  District: "bg-green-100 text-green-700",
};

const catColors = {
  Academic: "bg-blue-100 text-blue-700",
  Sports: "bg-emerald-100 text-emerald-700",
  Cultural: "bg-pink-100 text-pink-700",
};

// ── ANIMATED COUNTER ─────────────────────────────────────────────────────────
function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let n = 0;
          const step = Math.ceil(target / 60);
          const t = setInterval(() => {
            n = Math.min(n + step, target);
            setVal(n);
            if (n >= target) clearInterval(t);
          }, 20);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

// ── LIGHTBOX ─────────────────────────────────────────────────────────────────
function Lightbox({ item, onClose, onPrev, onNext, total, idx }) {
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose, onPrev, onNext]);

  const m = medalConfig[item.medal];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "rgba(11,31,58,0.95)",
        backdropFilter: "blur(16px)",
      }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl cursor-pointer z-10 hover:bg-white/10 transition"
      >
        <RiCloseLine />
      </button>

      <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest font-bold uppercase">
        {idx + 1} / {total}
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition z-10"
      >
        <RiArrowLeftLine />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition z-10"
      >
        <RiArrowRightLine />
      </button>

      <div
        className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: "0 40px 120px rgba(0,0,0,0.6)" }}
      >
        {/* Image */}
        <div className="relative h-72 sm:h-96">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(11,31,58,0.95) 0%, transparent 50%)",
            }}
          />

          {/* Medal badge */}
          <div
            className={`absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${m.bg} shadow-lg`}
          >
            <span className="text-lg">{m.emoji}</span>
            <span className="text-white text-xs font-black uppercase tracking-wider">
              {m.label}
            </span>
          </div>

          {/* Level */}
          <span
            className={`absolute top-5 right-5 text-xs font-bold px-3 py-1.5 rounded-full ${levelColors[item.level]}`}
          >
            {item.level} Level
          </span>
        </div>

        {/* Details */}
        <div className="p-7 bg-white">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3
                className="text-xl font-bold text-[#0B1F3A] mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p className="text-sm font-semibold" style={{ color: "#1A56A0" }}>
                {item.position}
              </p>
            </div>
            <span
              className={`text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0 ${catColors[item.category]}`}
            >
              {item.category}
            </span>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            {item.desc}
          </p>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                icon: <RiGroupLine />,
                label: "Student / Team",
                val: item.student,
              },
              { icon: <RiStarLine />, label: "Class", val: item.class },
              { icon: <RiCalendarLine />, label: "Year", val: item.year },
              { icon: <RiMapPinLine />, label: "Event", val: item.event },
            ].map((r, i) => (
              <div key={i} className="flex gap-2.5 items-start">
                <span className="text-[#1A56A0] mt-0.5 flex-shrink-0 text-base">
                  {r.icon}
                </span>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                    {r.label}
                  </p>
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    {r.val}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Achievement_Card = () => {
  const [cat, setCat] = useState("All");
  const [level, setLevel] = useState("All");
  const [year, setYear] = useState("All");
  const [medal, setMedal] = useState("All");
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const filtered = achievements.filter((a) => {
    const mCat = cat === "All" || a.category === cat;
    const mLevel = level === "All" || a.level === level;
    const mYear = year === "All" || a.year === year;
    const mMedal = medal === "All" || a.medal === medal;
    const mSearch =
      !search ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.student.toLowerCase().includes(search.toLowerCase()) ||
      a.event.toLowerCase().includes(search.toLowerCase());
    return mCat && mLevel && mYear && mMedal && mSearch;
  });

  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);
  const prevItem = () => {
    const idx = filtered.findIndex((i) => i.id === lightbox.id);
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length]);
  };
  const nextItem = () => {
    const idx = filtered.findIndex((i) => i.id === lightbox.id);
    setLightbox(filtered[(idx + 1) % filtered.length]);
  };

  const goldCount = achievements.filter((a) => a.medal === "gold").length;
  const silverCount = achievements.filter((a) => a.medal === "silver").length;
  const bronzeCount = achievements.filter((a) => a.medal === "bronze").length;
  return (
    <>
      <div className="w-full h-full bg-white">
        {lightbox && (
          <Lightbox
            item={lightbox}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
            total={filtered.length}
            idx={filtered.findIndex((i) => i.id === lightbox.id)}
          />
        )}

        <section
          className="py-20 overflow-hidden relative"
          style={{
            background:
              "linear-gradient(160deg,#F8FAFC 0%,#FFF7ED 50%,#F8FAFC 100%)",
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #FCD34D, transparent)",
              transform: "translate(30%,-30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #BFDBFE, transparent)",
              transform: "translate(-30%,30%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* ── Stats ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {[
                {
                  icon: "🏆",
                  value: achievements.length,
                  suffix: "+",
                  label: "Total Awards",
                  bg: "#0B1F3A",
                  accent: "#F4C300",
                },
                {
                  icon: "🥇",
                  value: goldCount,
                  suffix: "",
                  label: "Gold Medals",
                  bg: "#D97706",
                  accent: "#FEF3C7",
                },
                {
                  icon: "🥈",
                  value: silverCount,
                  suffix: "",
                  label: "Silver Medals",
                  bg: "#475569",
                  accent: "#E2E8F0",
                },
                {
                  icon: "🥉",
                  value: bronzeCount,
                  suffix: "",
                  label: "Bronze Medals",
                  bg: "#C2410C",
                  accent: "#FED7AA",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 text-center"
                  style={{
                    background: s.bg,
                    boxShadow: `0 8px 32px ${s.bg}33`,
                  }}
                >
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <p
                    className="text-4xl font-black"
                    style={{ color: s.accent, lineHeight: 1 }}
                  >
                    <Counter target={s.value} suffix={s.suffix} />
                  </p>
                  <p
                    className="text-xs font-semibold mt-1"
                    style={{ color: `${s.accent}99` }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Filters ── */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-10">
              <div className="flex flex-col gap-4">
                {/* Search */}
                <div className="relative">
                  <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                  <input
                    type="text"
                    placeholder="Search achievements, students, events..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:border-[#1A56A0] transition"
                    style={{ "--tw-ring-color": "#1A56A0" }}
                  />
                </div>

                {/* Filter rows */}
                <div className="flex flex-wrap gap-y-3 gap-x-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Category:
                    </span>
                    {categories.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCat(c)}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer"
                        style={{
                          background: cat === c ? "#0B1F3A" : "#F1F5F9",
                          color: cat === c ? "white" : "#64748B",
                        }}
                      >
                        {c}
                      </button>
                    ))}
                  </div>

                  {/* Level */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Level:
                    </span>
                    {levels.map((l) => (
                      <button
                        key={l}
                        onClick={() => setLevel(l)}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer"
                        style={{
                          background: level === l ? "#1A56A0" : "#F1F5F9",
                          color: level === l ? "white" : "#64748B",
                        }}
                      >
                        {l}
                      </button>
                    ))}
                  </div>

                  {/* Medal */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Medal:
                    </span>
                    {["All", "gold", "silver", "bronze"].map((m) => (
                      <button
                        key={m}
                        onClick={() => setMedal(m)}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer capitalize"
                        style={{
                          background:
                            medal === m
                              ? m === "gold"
                                ? "#D97706"
                                : m === "silver"
                                  ? "#475569"
                                  : m === "bronze"
                                    ? "#C2410C"
                                    : "#0B1F3A"
                              : "#F1F5F9",
                          color: medal === m ? "white" : "#64748B",
                        }}
                      >
                        {m === "All"
                          ? "All"
                          : medalConfig[m]?.emoji + " " + medalConfig[m]?.label}
                      </button>
                    ))}
                  </div>

                  {/* Year */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Year:
                    </span>
                    {years.map((y) => (
                      <button
                        key={y}
                        onClick={() => setYear(y)}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer"
                        style={{
                          background: year === y ? "#F4C300" : "#F1F5F9",
                          color: year === y ? "#0B1F3A" : "#64748B",
                        }}
                      >
                        {y}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Results count */}
                <p className="text-xs text-gray-400">
                  Showing{" "}
                  <span className="font-bold text-[#0B1F3A]">
                    {filtered.length}
                  </span>{" "}
                  of {achievements.length} achievements
                </p>
              </div>
            </div>

            {/* ── MASONRY GRID ── */}
            {filtered.length > 0 ? (
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 mb-12">
                {filtered.map((item) => {
                  const m = medalConfig[item.medal];
                  const isHov = hovered === item.id;
                  return (
                    <div
                      key={item.id}
                      className="break-inside-avoid mb-5 rounded-2xl overflow-hidden cursor-pointer relative group"
                      style={{
                        boxShadow: isHov
                          ? "0 24px 64px rgba(11,31,58,0.18)"
                          : "0 4px 20px rgba(11,31,58,0.07)",
                        transform: isHov
                          ? "translateY(-6px) scale(1.01)"
                          : "translateY(0) scale(1)",
                        transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                        border: "1px solid rgba(11,31,58,0.06)",
                      }}
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => openLightbox(item)}
                    >
                      {/* Image */}
                      <div
                        className="relative overflow-hidden"
                        style={{
                          height: item.id % 3 === 0 ? "220px" : "180px",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500"
                          style={{
                            transform: isHov ? "scale(1.08)" : "scale(1)",
                          }}
                        />
                        {/* Gradient */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(11,31,58,0.7) 100%)",
                          }}
                        />

                        {/* Medal badge top-left */}
                        <div
                          className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${m.bg} shadow-md`}
                        >
                          <span className="text-sm">{m.emoji}</span>
                          <span className="text-white text-[10px] font-black uppercase tracking-wider">
                            {m.label}
                          </span>
                        </div>

                        {/* Level badge top-right */}
                        <span
                          className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${levelColors[item.level]}`}
                        >
                          {item.level}
                        </span>

                        {/* Year bottom-right */}
                        <span className="absolute bottom-3 right-3 text-[10px] font-bold text-white/70 bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                          {item.year}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="p-4 bg-white">
                        {/* Category pill */}
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${catColors[item.category]} mb-2 inline-block`}
                        >
                          {item.category}
                        </span>

                        <h3
                          className="font-bold text-[#0B1F3A] text-sm leading-tight mb-1 transition-colors duration-200"
                          style={{
                            fontFamily: "'Playfair Display',serif",
                            color: isHov ? "#1A56A0" : "#0B1F3A",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-xs font-semibold mb-2"
                          style={{ color: "#1A56A0" }}
                        >
                          {item.position}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <RiGroupLine className="text-gray-400 text-xs" />
                            <span className="text-xs text-gray-500">
                              {item.student}
                            </span>
                          </div>
                          <span className="text-xs text-gray-400">
                            {item.class}
                          </span>
                        </div>

                        {/* Hover reveal — event name */}
                        <div
                          className="overflow-hidden transition-all duration-400 mt-0"
                          style={{
                            maxHeight: isHov ? "40px" : "0px",
                            opacity: isHov ? 1 : 0,
                          }}
                        >
                          <p className="text-[11px] text-gray-400 mt-2 pt-2 border-t border-gray-100 italic leading-tight">
                            {item.event}
                          </p>
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div
                        className={`h-0.5 w-full bg-gradient-to-r ${m.bg} transition-opacity duration-300`}
                        style={{ opacity: isHov ? 1 : 0 }}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20">
                <RiTrophyLine className="text-6xl text-gray-200 mx-auto mb-4" />
                <p className="font-semibold text-gray-400 text-lg">
                  No achievements found
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Try adjusting your filters
                </p>
              </div>
            )}

            {/* ── Bottom CTA ── */}
            <div
              className="rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg,#0B1F3A 0%,#1A56A0 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="relative">
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: "#F4C300" }}
                >
                  Be a Champion
                </p>
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  The Next Trophy Could Be Yours!
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    maxWidth: "420px",
                  }}
                >
                  Join SMT Rotary English School and unlock your potential in
                  academics, sports and the arts.
                </p>
              </div>
              <div className="relative flex gap-3 flex-wrap flex-shrink-0">
                <button
                  className="px-7 py-3 rounded-xl font-bold text-sm cursor-pointer hover:scale-105 transition-transform"
                  style={{
                    background: "#F4C300",
                    color: "#0B1F3A",
                    boxShadow: "0 4px 20px rgba(244,195,0,0.35)",
                  }}
                >
                  Apply for Admission →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Achievement_Card;

import { useState } from "react";
import {
  RiFileTextLine,
  RiDownloadLine,
  RiEyeLine,
  RiSearchLine,
  RiCalendarLine,
  RiGroupLine,
  RiTrophyLine,
  RiBarChartLine,
  RiArrowRightLine,
  RiBookOpenLine,
  RiGraduationCapLine,
  RiShieldCheckLine,
  RiTimeLine,
} from "react-icons/ri";

const reports = [
  {
    id: 1,
    year: "2024–25",
    title: "Annual Report",
    classes: "Class I – V",
    classRange: "Primary",
    desc: "Comprehensive academic report covering student performance, activities, and achievements for Primary classes.",
    pdfUrl: "/upload/annual-report-i-v.pdf",
    pages: 24,
    size: "2.4 MB",
    highlights: [
      "98% Pass Rate",
      "Science Fair Winners",
      "Sports Day Highlights",
      "New Smart Boards Installed",
    ],
    color: "#1A56A0",
    light: "#E6F1FB",
    accent: "#60A5FA",
    icon: <RiBookOpenLine />,
    tag: "Primary",
  },
  {
    id: 2,
    year: "2024–25",
    title: "Annual Report",
    classes: "Class VI – VIII",
    classRange: "Upper Primary",
    desc: "Detailed report on academic progress, co-curricular activities, and overall development for Upper Primary students.",
    pdfUrl: "/upload/annual-report-vi-viii.pdf",
    pages: 30,
    size: "3.1 MB",
    highlights: [
      "District Quiz Champions",
      "100% Attendance Award",
      "Lab Activities",
      "Cultural Fest Coverage",
    ],
    color: "#065F46",
    light: "#ECFDF5",
    accent: "#34D399",
    icon: <RiGraduationCapLine />,
    tag: "Upper Primary",
  },
  {
    id: 3,
    year: "2024–25",
    title: "Annual Report",
    classes: "Class IX",
    classRange: "Secondary",
    desc: "Board preparation focused annual report with subject-wise analysis, student achievements and faculty notes.",
    pdfUrl: "/upload/annual-report-9.pdf",
    pages: 28,
    size: "2.8 MB",
    highlights: [
      "Board Prep Analysis",
      "Zonal Kabaddi 1st",
      "Math Olympiad Medals",
      "Science Exhibition",
    ],
    color: "#7C2D12",
    light: "#FFF7ED",
    accent: "#FB923C",
    icon: <RiBarChartLine />,
    tag: "Secondary",
  },
  {
    id: 4,
    year: "2023–24",
    title: "Annual Report",
    classes: "Class I – V",
    classRange: "Primary",
    desc: "Annual report for Academic Year 2023-24 covering all primary classes with performance metrics and event coverage.",
    pdfUrl: "/upload/annual-report-i-v.pdf",
    pages: 22,
    size: "2.1 MB",
    highlights: [
      "97% Pass Rate",
      "Art Competition Awards",
      "Sports Meet",
      "Library Expansion",
    ],
    color: "#1A56A0",
    light: "#E6F1FB",
    accent: "#60A5FA",
    icon: <RiBookOpenLine />,
    tag: "Primary",
  },
  {
    id: 5,
    year: "2023–24",
    title: "Annual Report",
    classes: "Class VI – VIII",
    classRange: "Upper Primary",
    desc: "Upper primary annual report for 2023-24 with subject performance, inter-school competitions and faculty achievements.",
    pdfUrl: "/upload/annual-report-vi-viii.pdf",
    pages: 26,
    size: "2.9 MB",
    highlights: [
      "State Science Fair",
      "Drama Competition",
      "Robotics Club",
      "Annual Day Recap",
    ],
    color: "#065F46",
    light: "#ECFDF5",
    accent: "#34D399",
    icon: <RiGraduationCapLine />,
    tag: "Upper Primary",
  },
  {
    id: 6,
    year: "2023–24",
    title: "Annual Report",
    classes: "Class IX",
    classRange: "Secondary",
    desc: "Class IX annual report for 2023-24 featuring subject-wise performance data and CBSE board readiness analysis.",
    pdfUrl: "/upload/annual-report-9.pdf",
    pages: 25,
    size: "2.6 MB",
    highlights: [
      "Board Mock Results",
      "District Topper",
      "IT Lab Projects",
      "Career Counselling",
    ],
    color: "#7C2D12",
    light: "#FFF7ED",
    accent: "#FB923C",
    icon: <RiBarChartLine />,
    tag: "Secondary",
  },
];

const years = ["All", "2024–25", "2023–24"];
const classFilters = ["All", "Primary", "Upper Primary", "Secondary"];

function PdfPreviewCard({ report, onView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer"
      style={{
        borderColor: hovered ? report.color : "#E2E8F0",
        boxShadow: hovered
          ? `0 20px 60px ${report.color}18`
          : "0 2px 12px rgba(11,31,58,0.06)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top strip */}
      <div
        className="h-1.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${report.color}, ${report.accent})`,
        }}
      />

      {/* PDF Visual Mock */}
      <div
        className="relative h-44 flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${report.color}08, ${report.color}18)`,
        }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${report.color}33 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* PDF icon */}
        <div
          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg mb-3 transition-transform duration-300"
          style={{
            background: report.color,
            transform: hovered
              ? "scale(1.1) rotate(-3deg)"
              : "scale(1) rotate(0deg)",
          }}
        >
          <span className="text-white text-2xl">{report.icon}</span>
        </div>

        {/* Year badge */}
        <span
          className="relative z-10 text-xs font-black px-3 py-1.5 rounded-full"
          style={{ background: report.color, color: "white" }}
        >
          {report.year}
        </span>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300"
          style={{ background: `${report.color}dd`, opacity: hovered ? 1 : 0 }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onView(report);
            }}
            className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl text-xs font-bold transition hover:scale-105"
            style={{ color: report.color }}
          >
            <RiEyeLine /> Preview
          </button>
          <a
            href={report.pdfUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white border border-white/40 hover:bg-white/20 transition"
          >
            <RiDownloadLine /> Download
          </a>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Badges */}
        <div className="flex gap-2 mb-3 flex-wrap">
          <span
            className="text-[10px] font-bold px-2.5 py-1 rounded-full"
            style={{ background: report.light, color: report.color }}
          >
            {report.tag}
          </span>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
            {report.classes}
          </span>
        </div>

        <h3
          className="font-bold text-[#0B1F3A] text-sm mb-1 leading-tight"
          style={{ fontFamily: "'Playfair Display',serif" }}
        >
          {report.title} — {report.classes}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
          {report.desc}
        </p>

        {/* Meta */}
        <div className="flex gap-4 text-xs text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <RiFileTextLine /> {report.pages} pages
          </span>
          <span className="flex items-center gap-1">
            <RiTimeLine /> {report.size}
          </span>
        </div>

        {/* Highlights */}
        <div className="space-y-1.5 mb-4">
          {report.highlights.slice(0, 3).map((h, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: report.color }}
              />
              <span className="text-[11px] text-gray-600">{h}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-3 border-t border-gray-50">
          <button
            onClick={() => onView(report)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition"
            style={{ background: report.light, color: report.color }}
          >
            <RiEyeLine /> Preview
          </button>
          <a
            href={report.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-white transition hover:opacity-90"
            style={{ background: report.color }}
          >
            <RiDownloadLine /> Download
          </a>
        </div>
      </div>
    </div>
  );
}

// ── PREVIEW MODAL ─────────────────────────────────────────────────────────────
function PreviewModal({ report, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "rgba(11,31,58,0.85)",
        backdropFilter: "blur(12px)",
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: "0 40px 120px rgba(0,0,0,0.4)" }}
      >
        {/* Header */}
        <div
          className="px-8 py-6 flex items-start justify-between"
          style={{ background: report.color }}
        >
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest mb-2 block"
              style={{ color: report.accent }}
            >
              {report.year} · {report.tag}
            </span>
            <h3
              className="text-xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display',serif" }}
            >
              {report.title} — {report.classes}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition cursor-pointer flex-shrink-0 ml-4"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            ✕
          </button>
        </div>

        <div className="p-8">
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {report.desc}
          </p>

          {/* Highlights */}
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Report Highlights
            </p>
            <div className="grid grid-cols-2 gap-3">
              {report.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl"
                  style={{ background: report.light }}
                >
                  <RiShieldCheckLine
                    className="text-base flex-shrink-0"
                    style={{ color: report.color }}
                  />
                  <span className="text-xs font-medium text-gray-700">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Meta info */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: <RiCalendarLine />, label: "Year", val: report.year },
              {
                icon: <RiFileTextLine />,
                label: "Pages",
                val: `${report.pages} pages`,
              },
              { icon: <RiTimeLine />, label: "Size", val: report.size },
            ].map((m, i) => (
              <div key={i} className="text-center p-3 rounded-xl bg-gray-50">
                <span
                  className="text-lg block mb-1"
                  style={{ color: report.color }}
                >
                  {m.icon}
                </span>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                  {m.label}
                </p>
                <p className="text-sm font-bold text-[#0B1F3A]">{m.val}</p>
              </div>
            ))}
          </div>

          {/* PDF embed preview */}
          <div
            className="rounded-2xl overflow-hidden mb-6 border border-gray-100"
            style={{
              height: "280px",
              background: `linear-gradient(145deg, ${report.color}08, ${report.color}15)`,
            }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl text-white"
                style={{ background: report.color }}
              >
                {report.icon}
              </div>
              <p className="text-sm font-semibold text-gray-600">PDF Preview</p>
              <p className="text-xs text-gray-400">
                Click Download to view the full report
              </p>
            </div>
          </div>

          <a
            href={report.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition hover:opacity-90"
            style={{ background: report.color }}
          >
            <RiDownloadLine /> Download Full Report (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}

const ReportCard = () => {
  const [yearFilter, setYearFilter] = useState("All");
  const [classFilter, setClassFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [preview, setPreview] = useState(null);

  const filtered = reports.filter((r) => {
    const mYear = yearFilter === "All" || r.year === yearFilter;
    const mClass = classFilter === "All" || r.tag === classFilter;
    const mSearch =
      !search ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.classes.toLowerCase().includes(search.toLowerCase()) ||
      r.year.toLowerCase().includes(search.toLowerCase());
    return mYear && mClass && mSearch;
  });
  return (
    <>
      <section>
        <div className="w-full h-full bg-white">
          {preview && (
            <PreviewModal report={preview} onClose={() => setPreview(null)} />
          )}

          <section
            className="py-20 overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg,#F8FAFC 0%,#EFF6FF 60%,#F8FAFC 100%)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            <div className="max-w-6xl mx-auto">

              {/* ── Stats Banner ── */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {[
                  {
                    icon: <RiFileTextLine />,
                    value: reports.length,
                    label: "Total Reports",
                    bg: "#0B1F3A",
                    accent: "#F4C300",
                  },
                  {
                    icon: <RiCalendarLine />,
                    value: "2",
                    label: "Academic Years",
                    bg: "#1A56A0",
                    accent: "#60A5FA",
                  },
                  {
                    icon: <RiGroupLine />,
                    value: "3",
                    label: "Class Groups",
                    bg: "#065F46",
                    accent: "#34D399",
                  },
                  {
                    icon: <RiTrophyLine />,
                    value: "23+",
                    label: "Years of Excellence",
                    bg: "#7C2D12",
                    accent: "#FCA5A5",
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 text-center"
                    style={{
                      background: s.bg,
                      boxShadow: `0 8px 32px ${s.bg}33`,
                    }}
                  >
                    <span
                      className="text-2xl block mb-1"
                      style={{ color: s.accent }}
                    >
                      {s.icon}
                    </span>
                    <p
                      className="text-3xl font-black"
                      style={{ color: s.accent, lineHeight: 1 }}
                    >
                      {s.value}
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
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between flex-wrap">
                  {/* Search */}
                  <div className="relative w-full sm:w-64">
                    <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                    <input
                      type="text"
                      placeholder="Search reports..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:border-[#1A56A0] transition"
                    />
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {/* Year Filter */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Year:
                      </span>
                      {years.map((y) => (
                        <button
                          key={y}
                          onClick={() => setYearFilter(y)}
                          className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer"
                          style={{
                            background:
                              yearFilter === y ? "#F4C300" : "#F1F5F9",
                            color: yearFilter === y ? "#0B1F3A" : "#64748B",
                          }}
                        >
                          {y}
                        </button>
                      ))}
                    </div>

                    {/* Class Filter */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Class:
                      </span>
                      {classFilters.map((c) => (
                        <button
                          key={c}
                          onClick={() => setClassFilter(c)}
                          className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer"
                          style={{
                            background:
                              classFilter === c ? "#0B1F3A" : "#F1F5F9",
                            color: classFilter === c ? "white" : "#64748B",
                          }}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-3">
                  Showing{" "}
                  <span className="font-bold text-[#0B1F3A]">
                    {filtered.length}
                  </span>{" "}
                  of {reports.length} reports
                </p>
              </div>

              {/* ── Latest Year Featured ── */}
              {yearFilter === "All" && classFilter === "All" && !search && (
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                      style={{ background: "#F4C300", color: "#0B1F3A" }}
                    >
                      Latest
                    </span>
                    <h3 className="font-bold text-[#0B1F3A] text-base">
                      Academic Year 2024–25
                    </h3>
                  </div>

                  {/* Featured horizontal cards */}
                  <div className="grid sm:grid-cols-3 gap-5 mb-10">
                    {reports
                      .filter((r) => r.year === "2024–25")
                      .map((report) => (
                        <div
                          key={report.id}
                          className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                          style={{ background: "white" }}
                        >
                          <div
                            className="h-1.5"
                            style={{
                              background: `linear-gradient(90deg, ${report.color}, ${report.accent})`,
                            }}
                          />
                          <div className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white flex-shrink-0"
                                style={{ background: report.color }}
                              >
                                {report.icon}
                              </div>
                              <div>
                                <span
                                  className="text-[10px] font-bold uppercase tracking-wider"
                                  style={{ color: report.color }}
                                >
                                  {report.tag}
                                </span>
                                <h4
                                  className="font-bold text-[#0B1F3A] text-sm leading-tight"
                                  style={{
                                    fontFamily: "'Playfair Display',serif",
                                  }}
                                >
                                  {report.classes}
                                </h4>
                              </div>
                            </div>

                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                              {report.desc}
                            </p>

                            <div className="flex gap-3 text-xs text-gray-400 mb-4">
                              <span>{report.pages} pages</span>
                              <span>•</span>
                              <span>{report.size}</span>
                            </div>

                            <div className="flex gap-2">
                              <button
                                onClick={() => setPreview(report)}
                                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition"
                                style={{
                                  background: report.light,
                                  color: report.color,
                                }}
                              >
                                <RiEyeLine /> Preview
                              </button>
                              <a
                                href={report.pdfUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-white transition hover:opacity-90"
                                style={{ background: report.color }}
                              >
                                <RiDownloadLine /> Download
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Past years divider */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px flex-1 bg-gray-100" />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Previous Year — 2023–24
                    </span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>
                </div>
              )}

              {/* ── All Reports Grid ── */}
              {(yearFilter !== "All" || classFilter !== "All" || search) && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {filtered.map((report) => (
                    <PdfPreviewCard
                      key={report.id}
                      report={report}
                      onView={setPreview}
                    />
                  ))}
                  {filtered.length === 0 && (
                    <div className="col-span-3 text-center py-20">
                      <RiFileTextLine className="text-5xl text-gray-200 mx-auto mb-3" />
                      <p className="text-gray-400 font-semibold">
                        No reports found
                      </p>
                      <p className="text-gray-300 text-sm mt-1">
                        Try adjusting your filters
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Past years grid (always visible when no filter) */}
              {yearFilter === "All" && classFilter === "All" && !search && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {reports
                    .filter((r) => r.year === "2023–24")
                    .map((report) => (
                      <PdfPreviewCard
                        key={report.id}
                        report={report}
                        onView={setPreview}
                      />
                    ))}
                </div>
              )}

              {/* ── Mandatory Disclosure note ── */}
              <div
                className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
                style={{ background: "#0B1F3A" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(244,195,0,0.2)" }}
                >
                  <RiShieldCheckLine className="text-[#F4C300] text-2xl" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-sm mb-1">
                    Mandatory Public Disclosure
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    In addition to annual reports, mandatory CBSE disclosure
                    documents including Affiliation Letter, Building Safety
                    Certificate, DEO Certificate and more are available for
                    download.
                  </p>
                </div>
                <a
                  href="/mandatory-disclosure"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm flex-shrink-0 transition hover:opacity-90"
                  style={{ background: "#F4C300", color: "#0B1F3A" }}
                >
                  View Documents <RiArrowRightLine />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ReportCard;

import { useMemo, useState } from "react";
import {
  RiFileTextLine,
  RiDownloadLine,
  RiSearchLine,
  RiCalendarLine,
  RiGroupLine,
  RiTrophyLine,
  RiArrowRightLine,
  RiBookOpenLine,
  RiGraduationCapLine,
  RiBarChartLine,
  RiShieldCheckLine,
} from "react-icons/ri";

const reports = [
  {
    id: 1,
    year: "2024–25",
    title: "Annual Report",
    classes: "Class I – V",
    classRange: "Primary",
    desc: "Comprehensive academic report covering student performance, activities and achievements.",
    pdfUrl: "/upload/annual-report-i-v.pdf",
  },
  {
    id: 2,
    year: "2024–25",
    title: "Annual Report",
    classes: "Class VI – VIII",
    classRange: "Upper Primary",
    desc: "Detailed report on academic progress and co-curricular activities.",
    pdfUrl: "/upload/annual-report-vi-viii.pdf",
  },
  {
    id: 3,
    year: "2024–25",
    title: "Annual Report",
    classes: "Class IX",
    classRange: "Secondary",
    desc: "Board preparation focused annual report.",
    pdfUrl: "/upload/annual-report-9.pdf",
  },
  {
    id: 4,
    year: "2023–24",
    title: "Annual Report",
    classes: "Class I – V",
    classRange: "Primary",
    desc: "Annual report for Primary Classes.",
    pdfUrl: "/upload/annual-report-i-v.pdf",
  },
  {
    id: 5,
    year: "2023–24",
    title: "Annual Report",
    classes: "Class VI – VIII",
    classRange: "Upper Primary",
    desc: "Annual report for Upper Primary.",
    pdfUrl: "/upload/annual-report-vi-viii.pdf",
  },
  {
    id: 6,
    year: "2023–24",
    title: "Annual Report",
    classes: "Class IX",
    classRange: "Secondary",
    desc: "Annual report for Secondary Classes.",
    pdfUrl: "/upload/annual-report-9.pdf",
  },
];

const getTheme = (classRange) => {
  switch (classRange) {
    case "Primary":
      return {
        color: "#1A56A0",
        light: "#EAF4FF",
        accent: "#60A5FA",
        icon: <RiBookOpenLine />,
      };

    case "Upper Primary":
      return {
        color: "#065F46",
        light: "#ECFDF5",
        accent: "#34D399",
        icon: <RiGraduationCapLine />,
      };

    case "Secondary":
      return {
        color: "#7C2D12",
        light: "#FFF7ED",
        accent: "#FB923C",
        icon: <RiBarChartLine />,
      };

    default:
      return {
        color: "#0B1F3A",
        light: "#F8FAFC",
        accent: "#CBD5E1",
        icon: <RiFileTextLine />,
      };
  }
};

const years = ["All", ...new Set(reports.map((r) => r.year))];

const classFilters = ["All", ...new Set(reports.map((r) => r.classRange))];

function PdfPreviewCard({ report }) {
  const [hovered, setHovered] = useState(false);

  const theme = getTheme(report.classRange);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer"
      style={{
        borderColor: hovered ? theme.color : "#E2E8F0",
        boxShadow: hovered
          ? `0 20px 60px ${theme.color}18`
          : "0 2px 12px rgba(11,31,58,0.06)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top Gradient */}
      <div
        className="h-1.5"
        style={{
          background: `linear-gradient(90deg, ${theme.color}, ${theme.accent})`,
        }}
      />

      {/* Preview */}
      <div
        className="relative h-44 flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${theme.color}08, ${theme.color}18)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${theme.color}33 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div
          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg mb-3 transition-all duration-300"
          style={{
            background: theme.color,
            transform: hovered ? "scale(1.08) rotate(-3deg)" : "scale(1)",
          }}
        >
          <span className="text-white">{theme.icon}</span>
        </div>

        <span
          className="relative z-10 text-xs font-black px-3 py-1.5 rounded-full"
          style={{
            background: theme.color,
            color: "#fff",
          }}
        >
          {report.year}
        </span>

        {/* Hover */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{
            background: `${theme.color}dd`,
            opacity: hovered ? 1 : 0,
          }}
        >
          <a
            href={report.pdfUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-5 py-2 rounded-xl text-white text-sm font-semibold border border-white/30 hover:bg-white/20 transition"
          >
            <RiDownloadLine className="inline mr-2" />
            Download PDF
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Badges */}
        <div className="flex gap-2 flex-wrap mb-4">
          <span
            className="text-[10px] font-bold px-3 py-1 rounded-full"
            style={{
              background: theme.light,
              color: theme.color,
            }}
          >
            {report.classRange}
          </span>

          <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
            {report.classes}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[#0B1F3A] font-bold text-sm mb-2"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {report.title}
        </h3>

        {/* Class */}
        <p
          className="font-semibold mb-3"
          style={{
            color: theme.color,
          }}
        >
          {report.classes}
        </p>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-6 line-clamp-3 mb-5">
          {report.desc}
        </p>

        {/* Footer */}
        <div className="border-t pt-4">
          <a
            href={report.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl py-3 text-white text-sm font-semibold transition hover:opacity-90"
            style={{
              background: theme.color,
            }}
          >
            <RiDownloadLine />
            Download Report
          </a>
        </div>
      </div>
    </div>
  );
}

// ── PREVIEW MODAL ─────────────────────────────────────────────────────────────
function PreviewModal({ report, onClose }) {
  const theme = getTheme(report.classRange);

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
      >
        {/* Header */}
        <div
          className="px-8 py-6 flex items-start justify-between"
          style={{
            background: `linear-gradient(135deg, ${theme.color}, ${theme.accent})`,
          }}
        >
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest block mb-2"
              style={{
                color: "#fff",
                opacity: 0.85,
              }}
            >
              {report.year}
            </span>

            <h2
              className="text-2xl font-bold text-white"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {report.title}
            </h2>

            <p className="text-white/80 mt-2">{report.classes}</p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          {/* Icon */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg"
            style={{
              background: theme.color,
            }}
          >
            {theme.icon}
          </div>

          {/* Class Badge */}
          <div className="flex justify-center mb-5">
            <span
              className="px-4 py-2 rounded-full text-sm font-bold"
              style={{
                background: theme.light,
                color: theme.color,
              }}
            >
              {report.classRange}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-8 text-center max-w-xl mx-auto mb-8">
            {report.desc}
          </p>

          {/* Information Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div
              className="rounded-2xl p-5"
              style={{
                background: theme.light,
              }}
            >
              <RiCalendarLine
                className="text-2xl mb-3"
                style={{
                  color: theme.color,
                }}
              />

              <p className="text-xs uppercase text-gray-400">Academic Year</p>

              <h4 className="font-bold text-[#0B1F3A] mt-1">{report.year}</h4>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                background: theme.light,
              }}
            >
              <RiFileTextLine
                className="text-2xl mb-3"
                style={{
                  color: theme.color,
                }}
              />

              <p className="text-xs uppercase text-gray-400">Class Group</p>

              <h4 className="font-bold text-[#0B1F3A] mt-1">
                {report.classRange}
              </h4>
            </div>
          </div>

          {/* Preview Box */}
          <div
            className="rounded-2xl border flex flex-col items-center justify-center h-64 mb-8"
            style={{
              background: theme.light,
              borderColor: `${theme.color}22`,
            }}
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl text-white mb-4"
              style={{
                background: theme.color,
              }}
            >
              {theme.icon}
            </div>

            <h4 className="font-semibold text-[#0B1F3A]">PDF Preview</h4>

            <p className="text-sm text-gray-500 mt-2">
              Click below to open the complete Annual Report.
            </p>
          </div>

          {/* Download Button */}
          <a
            href={report.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-bold transition hover:opacity-90"
            style={{
              background: theme.color,
            }}
          >
            <RiDownloadLine />
            Download Annual Report
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

  // Latest Academic Year
  const latestYear = useMemo(() => {
    return [...new Set(reports.map((r) => r.year))].sort().reverse()[0];
  }, []);

  // Filter Reports
  const filtered = useMemo(() => {
    return reports.filter((r) => {
      const yearMatch = yearFilter === "All" || r.year === yearFilter;

      const classMatch = classFilter === "All" || r.classRange === classFilter;

      const searchMatch =
        search === "" ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.classes.toLowerCase().includes(search.toLowerCase()) ||
        r.desc.toLowerCase().includes(search.toLowerCase());

      return yearMatch && classMatch && searchMatch;
    });
  }, [yearFilter, classFilter, search]);

  return (
    <>
      <section>
        <div className="w-full bg-white">
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
              {/* Stats */}

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
                    value: years.length - 1,
                    label: "Academic Years",
                    bg: "#1A56A0",
                    accent: "#60A5FA",
                  },
                  {
                    icon: <RiGroupLine />,
                    value: classFilters.length - 1,
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
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl p-5 text-center"
                    style={{
                      background: item.bg,
                      boxShadow: `0 8px 30px ${item.bg}33`,
                    }}
                  >
                    <span
                      className="text-2xl block mb-2"
                      style={{
                        color: item.accent,
                      }}
                    >
                      {item.icon}
                    </span>

                    <p
                      className="text-3xl font-black"
                      style={{
                        color: item.accent,
                      }}
                    >
                      {item.value}
                    </p>

                    <p
                      className="text-xs mt-1"
                      style={{
                        color: `${item.accent}CC`,
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Filters */}

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8">
                <div className="flex flex-col lg:flex-row gap-4 justify-between">
                  <div className="relative w-full lg:w-72">
                    <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      value={search}
                      placeholder="Search reports..."
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2"
                    />
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold uppercase text-gray-400">
                        Year
                      </span>

                      {years.map((year) => (
                        <button
                          key={year}
                          onClick={() => setYearFilter(year)}
                          className="px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
                          style={{
                            background:
                              yearFilter === year ? "#F4C300" : "#F1F5F9",

                            color: yearFilter === year ? "#0B1F3A" : "#64748B",
                          }}
                        >
                          {year}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold uppercase text-gray-400">
                        Class
                      </span>

                      {classFilters.map((item) => (
                        <button
                          key={item}
                          onClick={() => setClassFilter(item)}
                          className="px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
                          style={{
                            background:
                              classFilter === item ? "#0B1F3A" : "#F1F5F9",

                            color: classFilter === item ? "#fff" : "#64748B",
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-4">
                  Showing
                  <span className="font-bold text-[#0B1F3A] mx-1">
                    {filtered.length}
                  </span>
                  of {reports.length} reports
                </p>
              </div>

              {/* Latest Year */}

              {yearFilter === "All" && classFilter === "All" && !search && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: "#F4C300",
                        color: "#0B1F3A",
                      }}
                    >
                      Latest
                    </span>

                    <h3 className="font-bold text-[#0B1F3A]">
                      Academic Year {latestYear}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {reports
                      .filter((r) => r.year === latestYear)
                      .map((report) => (
                        <PdfPreviewCard
                          key={report.id}
                          report={report}
                          onView={setPreview}
                        />
                      ))}
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1 h-px bg-gray-200" />

                    <span className="text-xs uppercase font-bold text-gray-400">
                      Previous Reports
                    </span>

                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                </>
              )}

              {/* Filtered Reports */}
              {(yearFilter !== "All" || classFilter !== "All" || search) && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {filtered.length > 0 ? (
                    filtered.map((report) => (
                      <PdfPreviewCard
                        key={report.id}
                        report={report}
                        onView={setPreview}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-20">
                      <RiFileTextLine className="text-6xl text-gray-300 mx-auto mb-4" />

                      <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">
                        No Reports Found
                      </h3>

                      <p className="text-gray-500">
                        Try changing the filters or search keyword.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Previous Years */}
              {yearFilter === "All" && classFilter === "All" && !search && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {reports
                    .filter((r) => r.year !== latestYear)
                    .map((report) => (
                      <PdfPreviewCard
                        key={report.id}
                        report={report}
                        onView={setPreview}
                      />
                    ))}
                </div>
              )}

              {/* Mandatory Disclosure */}

              <div
                className="rounded-3xl p-7 flex flex-col lg:flex-row items-center justify-between gap-6"
                style={{
                  background: "linear-gradient(135deg,#0B1F3A,#153B68)",
                }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,.12)",
                    }}
                  >
                    <RiShieldCheckLine className="text-3xl text-[#F4C300]" />
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      Mandatory Public Disclosure
                    </h3>

                    <p className="text-white/70 text-sm leading-7 max-w-xl">
                      All mandatory CBSE disclosure documents including
                      Affiliation Letter, Building Safety Certificate,
                      Recognition Certificate and other important documents are
                      available for download.
                    </p>
                  </div>
                </div>

                <a
                  href="/mandatory-disclosure"
                  className="px-6 py-3 rounded-xl font-semibold transition hover:scale-105"
                  style={{
                    background: "#F4C300",
                    color: "#0B1F3A",
                  }}
                >
                  View Documents
                  <RiArrowRightLine className="inline ml-2" />
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

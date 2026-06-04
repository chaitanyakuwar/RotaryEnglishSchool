import Navbar from "../../components/common/Navbar";

const documents = [
  {
    category: "Legal & Registration",
    items: [
      {
        name: "Mandatory Disclosure Details",
        url: "https://www.smtres.in/upload/Mandatory-Disclosure.pdf",
        color: "blue",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        ),
      },
      {
        name: "Affiliation Letter",
        url: "https://www.smtres.in/upload/Affiliation-Letter.pdf",
        color: "blue",
        icon: (
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
        ),
      },
      {
        name: "Society Registration Certificate",
        url: "https://www.smtres.in/upload/Society-Registration-Certificate.pdf",
        color: "blue",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
      },
      {
        name: "No Objection Certificate",
        url: "https://www.smtres.in/upload/No-Objection-Certificate.pdf",
        color: "blue",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        ),
      },
      {
        name: "Recognition Certificate (RTE Act 2009)",
        url: "https://www.smtres.in/upload/Recognition-certificate.pdf",
        color: "blue",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M12 15l-8.485 3.536 1.06-9.193L12 2l7.425 7.343 1.06 9.193z" />
          </svg>
        ),
      },
      {
        name: "DEO Certificate",
        url: "https://www.smtres.in/upload/DEO-Certificate.pdf",
        color: "blue",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Safety & Infrastructure",
    items: [
      {
        name: "Building Safety Certificate",
        url: "https://www.smtres.in/upload/Building-Safety.pdf",
        color: "amber",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        ),
      },
      {
        name: "Fire Safety Certificate",
        url: "https://www.smtres.in/upload/Fire-Safety.pdf",
        color: "red",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
        ),
      },
      {
        name: "Water, Health & Sanitation",
        url: "https://www.smtres.in/upload/Water-Sanitation-Certificates.pdf",
        color: "teal",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Academics & Finance",
    items: [
      {
        name: "Fee Structure",
        url: "https://www.smtres.in/upload/Fee-Structure-school.pdf",
        color: "green",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M12 11v1m0 4h.01" />
          </svg>
        ),
      },
      {
        name: "Annual Academic Calendar",
        url: "https://www.smtres.in/upload/Annual-Academic-Calendar.pdf",
        color: "green",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        name: "AISSE Report Analysis",
        url: "https://www.smtres.in/upload/AISSE-Report-Analysis.pdf",
        color: "green",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Committees & Governance",
    items: [
      {
        name: "School Management Committee",
        url: "https://www.smtres.in/upload/School-Management-Committee.pdf",
        color: "purple",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
      },
      {
        name: "Parent Teacher Association",
        url: "https://www.smtres.in/upload/Parent-Teacher-Association.pdf",
        color: "purple",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        ),
      },
      {
        name: "Transport Committee",
        url: "https://www.smtres.in/upload/Transport-Committee-22-23.pdf",
        color: "purple",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        name: "POSCO Committee",
        url: "https://www.smtres.in/upload/POSCO-Committee.pdf",
        color: "purple",
        icon: (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
      },
    ],
  },
];

const colorMap = {
  blue: { icon: "bg-blue-50 text-blue-700", badge: "bg-blue-50 text-blue-600" },
  green: {
    icon: "bg-green-50 text-green-700",
    badge: "bg-green-50 text-green-600",
  },
  amber: {
    icon: "bg-amber-50 text-amber-700",
    badge: "bg-amber-50 text-amber-600",
  },
  teal: { icon: "bg-teal-50 text-teal-700", badge: "bg-teal-50 text-teal-600" },
  purple: {
    icon: "bg-purple-50 text-purple-700",
    badge: "bg-purple-50 text-purple-600",
  },
  red: { icon: "bg-red-50 text-red-700", badge: "bg-red-50 text-red-600" },
};

// PDF Icon
const PdfIcon = () => (
  <svg
    className="w-3 h-3"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

// Arrow Icon
const ArrowIcon = () => (
  <svg
    className="w-3.5 h-3.5"
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

// Document Card
const DocCard = ({ name, url, color, icon }) => {
  const c = colorMap[color] || colorMap.blue;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white border border-gray-100 rounded-2xl p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
    >
      {/* Icon */}
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${c.icon}`}
      >
        {icon}
      </div>

      {/* Name */}
      <p className="text-sm font-medium text-gray-800 leading-snug flex-1">
        {name}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2.5 border-t border-gray-100">
        <span
          className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-md ${c.badge}`}
        >
          <PdfIcon /> PDF
        </span>
        <span className="w-6 h-6 rounded-full bg-gray-100 group-hover:bg-[#1a2e4a] flex items-center justify-center transition-colors duration-200">
          <span className="text-gray-400 group-hover:text-amber-400 transition-colors duration-200">
            <ArrowIcon />
          </span>
        </span>
      </div>
    </a>
  );
};

// Category Section
const CategorySection = ({ category, items }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
        {category}
      </span>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {items.map((doc) => (
        <DocCard key={doc.name} {...doc} />
      ))}
    </div>
  </div>
);
const MandatoryDisclosureDetails = () => {
  return (
    <>
      <section className="w-full h-full bg-[#F8FAFC]">
        <Navbar />
        <div className="w-full h-full p-6">
          <section className="max-w-5xl mx-auto px-4 py-10">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-7 border-b border-gray-100 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1a2e4a] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="#c8973a"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2
                    className="text-2xl font-semibold text-[#1a2e4a] leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Mandatory Public Disclosure
                  </h2>
                  <p className="text-sm text-gray-400 mt-1 max-w-md leading-relaxed">
                    As required by CBSE Affiliation Bye-Laws — all documents are
                    publicly available for transparency and compliance.
                  </p>
                </div>
              </div>

              {/* CBSE Badge */}
              <div className="inline-flex items-center gap-2 bg-[#1a2e4a] text-amber-200 text-xs font-medium px-4 py-2 rounded-full border border-amber-700/30 flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="#c8973a"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 15l-8.485 3.536 1.06-9.193L12 2l7.425 7.343 1.06 9.193z" />
                </svg>
                CBSE Affiliated School
              </div>
            </div>

            {/* Document Categories */}
            {documents.map((group) => (
              <CategorySection
                key={group.category}
                category={group.category}
                items={group.items}
              />
            ))}

            {/* Footer Note */}
            <div className="flex items-center gap-3 mt-6 px-4 py-3.5 bg-white border border-gray-100 border-l-4 border-l-amber-400 rounded-r-xl shadow-sm">
              <svg
                className="w-4 h-4 flex-shrink-0 text-amber-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <p className="text-xs text-gray-500">
                सर्व documents CBSE नियमांनुसार publicly available आहेत.
                प्रत्येक card वर click केल्यावर PDF नवीन tab मध्ये उघडेल.
              </p>
            </div>
          </section> 
        </div>
      </section>
    </>
  );
};

export default MandatoryDisclosureDetails;

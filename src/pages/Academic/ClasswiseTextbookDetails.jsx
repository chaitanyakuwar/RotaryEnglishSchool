import Heading from "../../components/common/Heading";
import Navbar from "../../components/common/Navbar";

import { useState } from "react";
import {
  RiBookOpenLine,
  RiSearchLine,
  RiDownloadLine,
  RiPrinterLine,
  RiInformationLine,
} from "react-icons/ri";

import { RiBookmarkLine } from "react-icons/ri";

const classData = [
  {
    class: "I",
    label: "Class I",
    color: "from-sky-500 to-sky-700",
    light: "bg-sky-50 text-sky-700",
    border: "border-sky-200",
    dot: "bg-sky-500",
    subjects: [
      { name: "English", book: "Marigold – 1", publisher: "NCERT" },
      { name: "Hindi", book: "Rimjhim – 1", publisher: "NCERT" },
      { name: "Mathematics", book: "Math Magic – 1", publisher: "NCERT" },
      {
        name: "Marathi",
        book: "Balbharti Marathi – 1",
        publisher: "Balbharti",
      },
      { name: "EVS", book: "Aas Paas – 1", publisher: "NCERT" },
      {
        name: "GK & Drawing",
        book: "School Activity Book",
        publisher: "School",
      },
    ],
  },
  {
    class: "II",
    label: "Class II",
    color: "from-violet-500 to-violet-700",
    light: "bg-violet-50 text-violet-700",
    border: "border-violet-200",
    dot: "bg-violet-500",
    subjects: [
      { name: "English", book: "Marigold – 2", publisher: "NCERT" },
      { name: "Hindi", book: "Rimjhim – 2", publisher: "NCERT" },
      { name: "Mathematics", book: "Math Magic – 2", publisher: "NCERT" },
      {
        name: "Marathi",
        book: "Balbharti Marathi – 2",
        publisher: "Balbharti",
      },
      { name: "EVS", book: "Aas Paas – 2", publisher: "NCERT" },
      {
        name: "GK & Drawing",
        book: "School Activity Book",
        publisher: "School",
      },
    ],
  },
  {
    class: "III",
    label: "Class III",
    color: "from-emerald-500 to-emerald-700",
    light: "bg-emerald-50 text-emerald-700",
    border: "border-emerald-200",
    dot: "bg-emerald-500",
    subjects: [
      { name: "English", book: "Marigold – 3", publisher: "NCERT" },
      { name: "Hindi", book: "Rimjhim – 3", publisher: "NCERT" },
      { name: "Mathematics", book: "Math Magic – 3", publisher: "NCERT" },
      {
        name: "Marathi",
        book: "Balbharti Marathi – 3",
        publisher: "Balbharti",
      },
      { name: "EVS", book: "Looking Around – 3", publisher: "NCERT" },
      { name: "Computer", book: "Computer Masti – 3", publisher: "InOpen" },
      { name: "GK", book: "General Knowledge – 3", publisher: "School" },
    ],
  },
  {
    class: "IV",
    label: "Class IV",
    color: "from-orange-500 to-orange-700",
    light: "bg-orange-50 text-orange-700",
    border: "border-orange-200",
    dot: "bg-orange-500",
    subjects: [
      { name: "English", book: "Marigold – 4", publisher: "NCERT" },
      { name: "Hindi", book: "Rimjhim – 4", publisher: "NCERT" },
      { name: "Mathematics", book: "Math Magic – 4", publisher: "NCERT" },
      {
        name: "Marathi",
        book: "Balbharti Marathi – 4",
        publisher: "Balbharti",
      },
      { name: "EVS", book: "Looking Around – 4", publisher: "NCERT" },
      { name: "Computer", book: "Computer Masti – 4", publisher: "InOpen" },
      { name: "GK", book: "General Knowledge – 4", publisher: "School" },
    ],
  },
  {
    class: "V",
    label: "Class V",
    color: "from-pink-500 to-pink-700",
    light: "bg-pink-50 text-pink-700",
    border: "border-pink-200",
    dot: "bg-pink-500",
    subjects: [
      { name: "English", book: "Marigold – 5", publisher: "NCERT" },
      { name: "Hindi", book: "Rimjhim – 5", publisher: "NCERT" },
      { name: "Mathematics", book: "Math Magic – 5", publisher: "NCERT" },
      {
        name: "Marathi",
        book: "Balbharti Marathi – 5",
        publisher: "Balbharti",
      },
      { name: "EVS", book: "Looking Around – 5", publisher: "NCERT" },
      { name: "Computer", book: "Computer Masti – 5", publisher: "InOpen" },
      { name: "GK", book: "General Knowledge – 5", publisher: "School" },
    ],
  },
  {
    class: "VI",
    label: "Class VI",
    color: "from-teal-500 to-teal-700",
    light: "bg-teal-50 text-teal-700",
    border: "border-teal-200",
    dot: "bg-teal-500",
    subjects: [
      { name: "English", book: "Honeysuckle", publisher: "NCERT" },
      {
        name: "English Supp.",
        book: "A Pact with the Sun",
        publisher: "NCERT",
      },
      { name: "Hindi", book: "Vasant – Part 1", publisher: "NCERT" },
      {
        name: "Marathi",
        book: "Balbharti Marathi – 6",
        publisher: "Balbharti",
      },
      { name: "Mathematics", book: "Mathematics – 6", publisher: "NCERT" },
      { name: "Science", book: "Science – 6", publisher: "NCERT" },
      {
        name: "Social Science",
        book: "Our Pasts I / Earth / Social & Political Life I",
        publisher: "NCERT",
      },
      { name: "Computer", book: "Computer Masti – 6", publisher: "InOpen" },
    ],
  },
  {
    class: "VII",
    label: "Class VII",
    color: "from-indigo-500 to-indigo-700",
    light: "bg-indigo-50 text-indigo-700",
    border: "border-indigo-200",
    dot: "bg-indigo-500",
    subjects: [
      { name: "English", book: "Honeycomb", publisher: "NCERT" },
      { name: "English Supp.", book: "An Alien Hand", publisher: "NCERT" },
      { name: "Hindi", book: "Vasant – Part 2", publisher: "NCERT" },
      {
        name: "Marathi",
        book: "Balbharti Marathi – 7",
        publisher: "Balbharti",
      },
      { name: "Mathematics", book: "Mathematics – 7", publisher: "NCERT" },
      { name: "Science", book: "Science – 7", publisher: "NCERT" },
      {
        name: "Social Science",
        book: "Our Pasts II / Our Environment / Social & Political Life II",
        publisher: "NCERT",
      },
      { name: "Computer", book: "Computer Masti – 7", publisher: "InOpen" },
    ],
  },
  {
    class: "VIII",
    label: "Class VIII",
    color: "from-rose-500 to-rose-700",
    light: "bg-rose-50 text-rose-700",
    border: "border-rose-200",
    dot: "bg-rose-500",
    subjects: [
      { name: "English", book: "Honeydew", publisher: "NCERT" },
      { name: "English Supp.", book: "It So Happened", publisher: "NCERT" },
      { name: "Hindi", book: "Vasant – Part 3", publisher: "NCERT" },
      {
        name: "Marathi",
        book: "Balbharti Marathi – 8",
        publisher: "Balbharti",
      },
      { name: "Mathematics", book: "Mathematics – 8", publisher: "NCERT" },
      { name: "Science", book: "Science – 8", publisher: "NCERT" },
      {
        name: "Social Science",
        book: "Our Pasts III / Resources & Dev. / Social & Political Life III",
        publisher: "NCERT",
      },
      { name: "Computer", book: "Computer Masti – 8", publisher: "InOpen" },
    ],
  },
  {
    class: "IX",
    label: "Class IX",
    color: "from-amber-500 to-amber-700",
    light: "bg-amber-50 text-amber-700",
    border: "border-amber-200",
    dot: "bg-amber-500",
    subjects: [
      { name: "English", book: "Beehive + Moments", publisher: "NCERT" },
      { name: "Hindi", book: "Kshitij I + Kritika I", publisher: "NCERT" },
      {
        name: "Marathi",
        book: "Balbharti Marathi – 9",
        publisher: "Balbharti",
      },
      { name: "Mathematics", book: "Mathematics – 9", publisher: "NCERT" },
      { name: "Science", book: "Science – 9", publisher: "NCERT" },
      {
        name: "Social Science",
        book: "India & Contemporary I / Contemporary India I / Democratic Politics I / Economics",
        publisher: "NCERT",
      },
      {
        name: "IT / Computer",
        book: "Information Technology – 9",
        publisher: "CBSE",
      },
    ],
  },
  {
    class: "X",
    label: "Class X",
    color: "from-blue-600 to-blue-800",
    light: "bg-blue-50 text-blue-700",
    border: "border-blue-200",
    dot: "bg-blue-600",
    subjects: [
      {
        name: "English",
        book: "First Flight + Footprints without Feet",
        publisher: "NCERT",
      },
      { name: "Hindi", book: "Kshitij II + Kritika II", publisher: "NCERT" },
      {
        name: "Marathi",
        book: "Balbharti Marathi – 10",
        publisher: "Balbharti",
      },
      {
        name: "Mathematics",
        book: "Mathematics Standard – 10",
        publisher: "NCERT",
      },
      { name: "Science", book: "Science – 10", publisher: "NCERT" },
      {
        name: "Social Science",
        book: "India & Contemporary II / Contemporary India II / Democratic Politics II / Understanding Economic Development",
        publisher: "NCERT",
      },
      {
        name: "IT / Computer",
        book: "Information Technology – 10",
        publisher: "CBSE",
      },
    ],
  },
];

const publisherColors = {
  NCERT: "bg-blue-50 text-blue-600 border-blue-100",
  Balbharti: "bg-emerald-50 text-emerald-600 border-emerald-100",
  InOpen: "bg-violet-50 text-violet-600 border-violet-100",
  CBSE: "bg-orange-50 text-orange-600 border-orange-100",
  School: "bg-gray-100 text-gray-500 border-gray-200",
};

const ClasswiseTextbookDetails = () => {
  const [selectedClass, setSelectedClass] = useState("I");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("card"); // "card" | "table"

  const current = classData.find((c) => c.class === selectedClass);

  const filteredSubjects = current.subjects.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.book.toLowerCase().includes(search.toLowerCase()) ||
      s.publisher.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <section className="bg-gradient-to-b from-[#F8FBFF] via-white to-[#F5F9FF] min-h-screen">
        <Navbar />
        <div
          className="
  py-8
  bg-gradient-to-r
  from-[#003B6D]
  via-[#005DAA]
  to-[#003B6D]
  max-w-7xl
  mx-auto
  px-6
  rounded-[30px]
  my-8
  shadow-[0_20px_50px_rgba(0,93,170,0.25)]
"
        >
          <Heading
            sectionHeading="Academics"
            heading="Classwise Textbook Details"
            text="Complete list of prescribed CBSE textbooks for every class — helping parents and students stay prepared right from day one."
            className="text-[#FFF] text-3xl md:text-4xl"
          />
        </div>
        <div className="w-full h-full">
          <section className="py-10 bg-gradient-to-b from-[#F8FAFC] to-white min-h-screen">
            <div className="max-w-7xl mx-auto">
              {/* ── Class Selector ── */}
              <div className="bg-white rounded-[28px] border border-blue-100 shadow-xl p-6 mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 px-1">
                  Select Class
                </p>
                <div className="flex flex-wrap gap-2">
                  {classData.map((c) => (
                    <button
                      key={c.class}
                      onClick={() => {
                        setSelectedClass(c.class);
                        setSearch("");
                      }}
                      className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer
                          ${
                            selectedClass === c.class
                              ? `bg-gradient-to-r
from-[#003B6D]
to-[#005DAA]
text-white
shadow-lg
scale-105`
                              : "bg-gray-50 text-gray-500 border border-gray-200 hover:border-gray-300 hover:bg-gray-100"
                          }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Active Class Header ── */}
              <div
                className={`bg-gradient-to-r
from-[#003B6D]
via-[#005DAA]
to-[#003B6D] rounded-2xl p-7 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <RiBookmarkLine className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {current.label}
                    </h3>
                    <p className="text-white/75 text-sm">
                      {current.subjects.length} subjects · CBSE / Balbharti
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <button className="
flex items-center gap-2
bg-[#F4C300]
hover:bg-white
text-[#003B6D]
font-semibold
px-4 py-2
rounded-xl
transition-all
duration-300
hover:scale-105
cursor-pointer
">
                    <RiDownloadLine /> Download PDF
                  </button>
                  <button className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer">
                    <RiPrinterLine /> Print List
                  </button>
                </div>
              </div>

              {/* ── Search + View Toggle ── */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
                <div className="relative w-full sm:w-80">
                  <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search subject or book..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
w-full
pl-11
pr-4
py-4
rounded-2xl
border
border-blue-100
bg-white
shadow-sm
focus:ring-4
focus:ring-[#005DAA]/10
focus:border-[#005DAA]
"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode("card")}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${viewMode === "card" ? "bg-[#005DAA] text-white" : "bg-white border border-gray-200 text-gray-500"}`}
                  >
                    ⊞ Cards
                  </button>
                  <button
                    onClick={() => setViewMode("table")}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${viewMode === "table" ? "bg-[#005DAA] text-white" : "bg-white border border-gray-200 text-gray-500"}`}
                  >
                    ≡ Table
                  </button>
                </div>
              </div>

              {/* ── CARD VIEW ── */}
              {viewMode === "card" && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
                  {filteredSubjects.map((subj, i) => (
                    <div
                      key={i}
                      className="
group
bg-white
rounded-[26px]
overflow-hidden
border
border-blue-100
shadow-lg
hover:shadow-[0_20px_50px_rgba(0,93,170,0.18)]
hover:-translate-y-3
hover:rotate-1
transition-all
duration-500
"
                    >
                <div
  className="
  h-2
  bg-gradient-to-r
  from-[#F4C300]
  via-[#FFD84D]
  to-[#F4C300]
"
/>
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-4">
                          <div
  className="
  w-12
  h-12
  rounded-2xl
  bg-[#F4C300]/20
  flex
  items-center
  justify-center
  group-hover:scale-110
  transition
"
>
  <RiBookOpenLine className="text-2xl text-[#003B6D]" />
</div>
                          <span
                            className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${publisherColors[subj.publisher] || publisherColors["School"]}`}
                          >
                            {subj.publisher}
                          </span>
                        </div>
                        <p
                          className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${current.light.split(" ")[1]}`}
                        >
                          {subj.name}
                        </p>
                        <h4 className="font-semibold text-[#0F172A] text-sm leading-snug">
                          {subj.book}
                        </h4>
                      </div>
                    </div>
                  ))}

                  {filteredSubjects.length === 0 && (
                    <div className="col-span-full text-center py-16 text-gray-400">
                      <RiBookOpenLine className="text-5xl mx-auto mb-3 opacity-30" />
                      <p className="font-medium">
                        No books found for "{search}"
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* ── TABLE VIEW ── */}
              {viewMode === "table" && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-10">
                  <table className="w-full">
                    <thead>
                      <tr
className="
bg-gradient-to-r
from-[#003B6D]
to-[#005DAA]
"
>
                        <th className="text-left px-6 py-4 text-white text-xs font-bold uppercase tracking-wider w-8">
                          Sr.
                        </th>
                        <th className="text-left px-6 py-4 text-white text-xs font-bold uppercase tracking-wider">
                          Subject
                        </th>
                        <th className="text-left px-6 py-4 text-white text-xs font-bold uppercase tracking-wider">
                          Book Name
                        </th>
                        <th className="text-left px-6 py-4 text-white text-xs font-bold uppercase tracking-wider">
                          Publisher
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSubjects.map((subj, i) => (
                        <tr
                          key={i}
                          className={`border-b border-gray-50 hover:bg-gray-50 transition ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}
                        >
                          <td className="px-6 py-4 text-gray-400 text-sm font-medium">
                            {i + 1}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-2 h-2 rounded-full ${current.dot}`}
                              />
                              <span className="font-semibold text-[#0F172A] text-sm">
                                {subj.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-600 text-sm">
                            {subj.book}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`text-xs font-bold px-3 py-1 rounded-full border ${publisherColors[subj.publisher] || publisherColors["School"]}`}
                            >
                              {subj.publisher}
                            </span>
                          </td>
                        </tr>
                      ))}
                      {filteredSubjects.length === 0 && (
                        <tr>
                          <td
                            colSpan={4}
                            className="text-center py-16 text-gray-400"
                          >
                            No books found for "{search}"
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ── Publisher Legend ── */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-10 flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <RiInformationLine className="text-base" />
                  <span className="font-semibold uppercase tracking-wider">
                    Publisher Key:
                  </span>
                </div>
                {Object.entries(publisherColors).map(([pub, cls]) => (
                  <span
                    key={pub}
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${cls}`}
                  >
                    {pub}
                  </span>
                ))}
              </div>

              {/* ── All Classes Quick View ── */}
              <div className="border-t border-gray-100 pt-10">
                <h3 className="text-xl font-bold text-[#0F172A] mb-6 text-center">
                  All Classes at a Glance
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {classData.map((c) => (
                    <button
                      key={c.class}
                      onClick={() => {
                        setSelectedClass(c.class);
                        setSearch("");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="
bg-white
rounded-[24px]
border
border-blue-100
p-5
text-center
hover:-translate-y-2
hover:rotate-1
hover:shadow-[0_20px_50px_rgba(0,93,170,0.18)]
transition-all
duration-500
cursor-pointer
group
"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mx-auto mb-3`}
                      >
                        <RiBookOpenLine className="text-white text-xl" />
                      </div>
                      <p className="font-bold text-[#0F172A] text-sm">
                        {c.label}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {c.subjects.length} books
                      </p>
                      <p
                        className={`text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition ${c.light.split(" ")[1]}`}
                      >
                        View →
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ClasswiseTextbookDetails;

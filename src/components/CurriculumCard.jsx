import { useState } from "react";
import {
  RiBookOpenLine,
  RiFlaskLine,
  RiCalculatorLine,
  RiGlobalLine,
  RiPaletteLine,
  RiRunLine,
  RiComputerLine,
  RiHeartLine,
  RiMusicLine,
  RiSeedlingLine,
  RiCheckboxCircleLine,
  RiArrowRightLine,
  RiStarLine,
  RiGroupLine,
  RiLightbulbLine,
  RiAwardLine,
} from "react-icons/ri";

const pillars = [
  {
    id: "academic",
    label: "Academic",
    icon: <RiBookOpenLine />,
    color: "bg-[#E6F1FB] text-[#185FA5]",
    activeColor: "bg-[#005DAA] text-white",
    borderColor: "border-[#005DAA]",
    dot: "bg-[#005DAA]",
  },
  {
    id: "cocurricular",
    label: "Co-Curricular",
    icon: <RiRunLine />,
    color: "bg-[#EAF3DE] text-[#3B6D11]",
    activeColor: "bg-[#3B6D11] text-white",
    borderColor: "border-[#3B6D11]",
    dot: "bg-[#3B6D11]",
  },
  {
    id: "values",
    label: "Value Education",
    icon: <RiHeartLine />,
    color: "bg-[#EEEDFE] text-[#534AB7]",
    activeColor: "bg-[#534AB7] text-white",
    borderColor: "border-[#534AB7]",
    dot: "bg-[#534AB7]",
  },
];

const subjects = {
  academic: [
    {
      icon: <RiBookOpenLine />,
      name: "English",
      classes: "Class I – X",
      hrs: "5 hrs/week",
      topics: [
        "Grammar & Composition",
        "Literature",
        "Creative Writing",
        "Communication Skills",
      ],
      color: "bg-[#E6F1FB] text-[#185FA5]",
      stat: "Core Subject",
    },
    {
      icon: <RiBookOpenLine />,
      name: "Marathi",
      classes: "Class I – X",
      hrs: "4 hrs/week",
      topics: ["Vyakaran", "Kavita", "Gadya", "Lekhan"],
      color: "bg-[#E6F1FB] text-[#185FA5]",
      stat: "Core Subject",
    },
    {
      icon: <RiBookOpenLine />,
      name: "Hindi",
      classes: "Class I – X",
      hrs: "4 hrs/week",
      topics: ["Vyakaran", "Sahitya", "Lekhan Kaushal", "Bhasha Gyan"],
      color: "bg-[#E6F1FB] text-[#185FA5]",
      stat: "Core Subject",
    },
    {
      icon: <RiCalculatorLine />,
      name: "Mathematics",
      classes: "Class I – X",
      hrs: "5 hrs/week",
      topics: [
        "Arithmetic",
        "Algebra",
        "Geometry",
        "Statistics",
        "Math Lab Activities",
      ],
      color: "bg-[#EEEDFE] text-[#534AB7]",
      stat: "Core Subject",
    },
    {
      icon: <RiFlaskLine />,
      name: "Science",
      classes: "Class I – X",
      hrs: "4 hrs/week",
      topics: [
        "Physics",
        "Chemistry",
        "Biology",
        "Practical Lab",
        "3D Learning",
      ],
      color: "bg-[#EAF3DE] text-[#3B6D11]",
      stat: "Core Subject",
    },
    {
      icon: <RiGlobalLine />,
      name: "Social Studies",
      classes: "Class I – X",
      hrs: "4 hrs/week",
      topics: [
        "History",
        "Geography",
        "Civics",
        "Economics",
        "Current Affairs",
      ],
      color: "bg-[#FAEEDA] text-[#854F0B]",
      stat: "Core Subject",
    },
    {
      icon: <RiComputerLine />,
      name: "Computer Science",
      classes: "Class I – X",
      hrs: "3 hrs/week",
      topics: [
        "IT Fundamentals",
        "MS Office",
        "Coding Basics",
        "Internet Safety",
        "N-Computing Lab",
      ],
      color: "bg-[#FBEAF0] text-[#993556]",
      stat: "Core Subject",
    },
    {
      icon: <RiSeedlingLine />,
      name: "Environmental Studies",
      classes: "Class I – V",
      hrs: "3 hrs/week",
      topics: [
        "Nature & Environment",
        "Conservation",
        "Eco-Awareness",
        "Field Activities",
      ],
      color: "bg-[#E1F5EE] text-[#0F6E56]",
      stat: "Foundation",
    },
  ],
  cocurricular: [
    {
      icon: <RiRunLine />,
      name: "Sports & Physical Ed.",
      classes: "Class I – X",
      hrs: "3 hrs/week",
      topics: [
        "Cricket",
        "Football",
        "Kabaddi",
        "Kho-Kho",
        "Athletics",
        "Yoga",
        "Swimming",
      ],
      color: "bg-[#EAF3DE] text-[#3B6D11]",
      stat: "Mandatory",
    },
    {
      icon: <RiPaletteLine />,
      name: "Art & Craft",
      classes: "Class I – X",
      hrs: "2 hrs/week",
      topics: [
        "Drawing & Painting",
        "Clay Work",
        "Best Out of Waste",
        "Origami",
        "Decoration",
      ],
      color: "bg-[#FBEAF0] text-[#993556]",
      stat: "Creative",
    },
    {
      icon: <RiMusicLine />,
      name: "Music & Dance",
      classes: "Class I – X",
      hrs: "2 hrs/week",
      topics: [
        "Vocal Training",
        "Instrumental Music",
        "Devotional Songs",
        "Patriotic Songs",
        "Karaoke",
      ],
      color: "bg-[#EEEDFE] text-[#534AB7]",
      stat: "Creative",
    },
    {
      icon: <RiGroupLine />,
      name: "Club Activities",
      classes: "Class IV – X",
      hrs: "Weekly",
      topics: [
        "Science Club",
        "Eco Club",
        "Literary Club",
        "Math Olympiad",
        "Quiz & Debate",
      ],
      color: "bg-[#FAEEDA] text-[#854F0B]",
      stat: "Enrichment",
    },
  ],
  values: [
    {
      icon: <RiHeartLine />,
      name: "Moral Education",
      classes: "Class I – X",
      hrs: "2 hrs/week",
      topics: [
        "Ethics & Integrity",
        "Compassion",
        "Responsibility",
        "Honesty",
        "Respect",
      ],
      color: "bg-[#EEEDFE] text-[#534AB7]",
      stat: "Life Skills",
    },
    {
      icon: <RiLightbulbLine />,
      name: "Life Skills",
      classes: "Class V – X",
      hrs: "1 hr/week",
      topics: [
        "Problem Solving",
        "Decision Making",
        "Communication",
        "Emotional Intelligence",
      ],
      color: "bg-[#E6F1FB] text-[#185FA5]",
      stat: "Life Skills",
    },
    {
      icon: <RiAwardLine />,
      name: "Leadership Development",
      classes: "Class VI – X",
      hrs: "Monthly",
      topics: [
        "Student Council",
        "Event Management",
        "Public Speaking",
        "Team Building",
      ],
      color: "bg-[#EAF3DE] text-[#3B6D11]",
      stat: "Leadership",
    },
    {
      icon: <RiStarLine />,
      name: "Rotary Values",
      classes: "Class I – X",
      hrs: "Integrated",
      topics: [
        "Service Above Self",
        "Community Awareness",
        "Social Responsibility",
        "Empathy",
      ],
      color: "bg-[#FAEEDA] text-[#854F0B]",
      stat: "Core Value",
    },
  ],
};

const highlights = [
  {
    icon: <RiCheckboxCircleLine />,
    text: "CBSE Curriculum with best practices from all national boards",
  },
  {
    icon: <RiCheckboxCircleLine />,
    text: "3D Interactive Smart Board technology for every classroom",
  },
  {
    icon: <RiCheckboxCircleLine />,
    text: "85,000+ 3D learning objects for visual concept understanding",
  },
  {
    icon: <RiCheckboxCircleLine />,
    text: "Individual computer terminals via N-Computing technology",
  },
  {
    icon: <RiCheckboxCircleLine />,
    text: "Value education integrated across all subjects",
  },
  {
    icon: <RiCheckboxCircleLine />,
    text: "Child-friendly, innovative teaching methodology",
  },
];

const CurriculumCard = () => {
  const [activeTab, setActiveTab] = useState("academic");
  const [expandedCard, setExpandedCard] = useState(null);

  const activePillar = pillars.find((p) => p.id === activeTab);
  return (
    <>
      <section className="max-w-7xl mx-auto py-8">
        {/* 3 Pillar Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {[
            {
              label: "Academic Subjects",
              value: "8+",
              sub: "Core CBSE subjects",
              color: "border-[#005DAA]",
              num: "text-[#005DAA]",
              bg: "bg-[#E6F1FB]",
              icon: <RiBookOpenLine />,
            },
            {
              label: "Co-Curricular",
              value: "4+",
              sub: "Sports, Arts & Clubs",
              color: "border-[#3B6D11]",
              num: "text-[#3B6D11]",
              bg: "bg-[#EAF3DE]",
              icon: <RiRunLine />,
            },
            {
              label: "Value Programs",
              value: "4+",
              sub: "Ethics & Leadership",
              color: "border-[#534AB7]",
              num: "text-[#534AB7]",
              bg: "bg-[#EEEDFE]",
              icon: <RiHeartLine />,
            },
          ].map((s, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border-l-4 ${s.color} border border-gray-100 p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center text-2xl ${s.num}`}
              >
                {s.icon}
              </div>
              <div>
                <div className={`text-4xl font-bold ${s.num}`}>{s.value}</div>
                <div className="text-[#0F172A] font-semibold text-sm">
                  {s.label}
                </div>
                <div className="text-gray-400 text-xs">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Switcher */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setActiveTab(p.id);
                  setExpandedCard(null);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer
                ${
                  activeTab === p.id
                    ? `${p.activeColor} shadow-md`
                    : "bg-white border border-gray-200 text-gray-500 hover:border-gray-300"
                }`}
              >
                <span className="text-base">{p.icon}</span>
                {p.label}
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${activeTab === p.id ? "bg-white/20" : "bg-gray-100 text-gray-400"}`}
                >
                  {subjects[p.id].length}
                </span>
              </button>
            ))}
          </div>

          {/* Subject Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
            {subjects[activeTab].map((subj, i) => (
              <div
                key={i}
                onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                className={`bg-white rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden
                ${
                  expandedCard === i
                    ? `border-[#005DAA] shadow-lg shadow-blue-100 -translate-y-1`
                    : "border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                {/* Top accent */}
                <div className={`h-1 w-full ${activePillar.dot}`} />
                <div className="p-5">
                  {/* Icon + badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${subj.color} flex items-center justify-center text-xl`}
                    >
                      {subj.icon}
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                      {subj.stat}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#0F172A] text-base mb-1">
                    {subj.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-gray-400">
                      {subj.classes}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-xs text-[#005DAA] font-medium">
                      {subj.hrs}
                    </span>
                  </div>

                  {/* Topics — expand on click */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${expandedCard === i ? "max-h-60" : "max-h-0"}`}
                  >
                    <div className="border-t border-gray-100 pt-3 mt-1">
                      <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mb-2">
                        Topics Covered
                      </p>
                      <ul className="space-y-1.5">
                        {subj.topics.map((t, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-2 text-xs text-gray-600"
                          >
                            <RiCheckboxCircleLine className="text-[#005DAA] flex-shrink-0" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Expand hint */}
                  <div className="flex items-center gap-1 mt-3 text-[11px] text-gray-400">
                    <RiArrowRightLine
                      className={`transition-transform duration-200 ${expandedCard === i ? "rotate-90 text-[#005DAA]" : ""}`}
                    />
                    <span>
                      {expandedCard === i
                        ? "Click to collapse"
                        : "Click to see topics"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Curriculum Highlights */}
          <div className="bg-[#0B1F3A] rounded-3xl p-10 mb-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[#F4C300] text-xs font-bold uppercase tracking-widest mb-3">
                  Why Our Curriculum
                </p>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  Innovation Meets
                  <br />
                  <span className="text-[#F4C300]">Academic Excellence</span>
                </h3>
                <p className="text-gray-400 text-sm leading-7 mb-6">
                  Our curriculum combines the rigour of CBSE with the best
                  practices of modern education — technology-driven, value-based
                  and future-ready.
                </p>
                <button className="bg-[#F4C300] text-[#0F172A] px-7 py-3 rounded-xl font-bold text-sm hover:bg-yellow-300 transition cursor-pointer">
                  Download Curriculum PDF →
                </button>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10"
                  >
                    <span className="text-[#F4C300] text-lg mt-0.5 flex-shrink-0">
                      {h.icon}
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CBSE Approach */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <RiLightbulbLine />,
                title: "Child-Friendly Teaching",
                desc: "Innovative, child-friendly methodology that keeps students engaged and makes learning enjoyable through interactive tools and 3D technology.",
                bg: "bg-[#E6F1FB]",
                iconColor: "text-[#005DAA]",
              },
              {
                icon: <RiGlobalLine />,
                title: "Globally Aligned",
                desc: "While rooted in CBSE, our curriculum incorporates best practices from leading education boards worldwide to prepare students for global opportunities.",
                bg: "bg-[#EAF3DE]",
                iconColor: "text-[#3B6D11]",
              },
              {
                icon: <RiAwardLine />,
                title: "Competitive Edge",
                desc: "Focused preparation for board exams, Olympiads, scholarships and competitive entrance tests — giving every student a winning edge.",
                bg: "bg-[#EEEDFE]",
                iconColor: "text-[#534AB7]",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-lg transition hover:-translate-y-1 duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center text-2xl ${item.iconColor} mb-5`}
                >
                  {item.icon}
                </div>
                <h4 className="font-bold text-[#0F172A] text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
      </section>
    </>
  );
};

export default CurriculumCard;

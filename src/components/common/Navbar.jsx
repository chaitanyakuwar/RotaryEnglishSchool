import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ transparent }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [studentOpen, setStudentOpen] = useState(false);

  const textColor = transparent
    ? "text-white hover:text-[#F4C300]"
    : "text-zinc-700 hover:text-[#003B6D]";
  return (
    <>
      <nav
        className={`
    ${
      transparent
        ? "absolute top-0 left-0 w-full z-50 bg-transparent"
        : "bg-white shadow-md"
    }
    px-6 md:px-16 lg:px-24 xl:px-32
    py-4
    flex items-center justify-between
  `}
      >
        <div className="flex items-center gap-20">
          <Link className={`text-sm ${textColor}`}>
            <img
              src="/logo.png"
              className="h-12 w-auto object-contain"
              alt="logo"
            />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className={`text-sm ${textColor}`}>
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm ${textColor}`}
              >
                About Us
                <svg
                  className="transition-transform group-hover:rotate-180"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="m1 1 4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link
                  to="/about"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  About School
                </Link>
                <Link
                  to="/president-message"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  President Message
                </Link>
                <Link
                  to="/principal-message"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Principal Message
                </Link>
                <Link
                  to="/management-committee"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Management Committee
                </Link>
              </div>
            </div>

            {/* Activities */}
            <Link to="/activities" className={`text-sm ${textColor}`}>
              Activities
            </Link>

            {/* Academics Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm ${textColor}`}
              >
                Academics
                <svg
                  className="transition-transform group-hover:rotate-180"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="m1 1 4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link
                  to="/academicCalendar"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Academic Calendar
                </Link>
                <Link
                  to="/faculty"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Faculty
                </Link>
                <Link
                  to="/classwise-textbooks"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Classwise Textbooks
                </Link>
                <Link
                  to="/student-strength"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Student Strength
                </Link>
                <Link
                  to="/parentTeacherAssociation"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Parent Teacher Association
                </Link>
                <Link
                  to="/curriculum"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Curriculum
                </Link>
                <Link
                  to="/fees-structure"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Fees Structure
                </Link>
              </div>
            </div>
            {/* Facilities */}
            <Link to="/facilities" className={`text-sm ${textColor}`}>
              Facilities
            </Link>
            {/* Student Corner Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm ${textColor}`}
              >
                Student Corner
                <svg
                  className="transition-transform group-hover:rotate-180"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="m1 1 4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link
                  to="/achievement"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Achievement
                </Link>
                <Link
                  to="/alumni"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Alumni
                </Link>
                <Link
                  to="/annual-reports"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Annual Reports
                </Link>
                <Link
                  to="/transfer-certificate"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Transfer Certificate
                </Link>
                <Link
                  to="/press-release"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Press Release
                </Link>
                <Link
                  to="/mandatory-disclosure"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Mandatory Disclosure
                </Link>
              </div>
            </div>
            {/* Gallery */}
            <Link to="/gallery" className={`text-sm ${textColor}`}>
              Gallery
            </Link>
            {/* contact */}
            <Link to="/contact" className={`text-sm ${textColor}`}>
              Contact
            </Link>
          </div>
        </div>

        <Link to="/admission">
          <button className="hidden md:flex items-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full cursor-pointer border-0">
            Admission
            <span className="size-7 rounded-full bg-white flex items-center justify-center">
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.6 4.602h10m-4-4 4 4-4 4"
                  stroke="#3f3f47"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1"
        >
          <span
            className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        <div
          className={`
  fixed
  top-0
  left-0
  h-screen
  w-[320px]
  bg-white
  shadow-2xl
  z-[999]
  transition-all
  duration-500
  overflow-y-auto
  md:hidden
  ${menuOpen ? "translate-x-0" : "-translate-x-full"}
`}
        >
          <div className="bg-[#003B6D] p-6 flex items-center justify-between">
            <img src="/logo.png" className="h-12" />

            {/* <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl"
            >
              ✕
            </button> */}
          </div>

          <div className="p-6 space-y-2">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-[#003B6D] font-semibold"
            >
              Home
            </Link>
            {/* ================= ABOUT ================= */}

            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex justify-between items-center py-3 font-semibold text-[#003B6D]"
              >
                About Us
                <span
                  className={`transition-transform duration-300 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {aboutOpen && (
                <div className="ml-4 flex flex-col">
                  <Link
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-gray-600 hover:text-[#005DAA]"
                  >
                    About School
                  </Link>

                  <Link
                    to="/president-message"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-gray-600 hover:text-[#005DAA]"
                  >
                    President Message
                  </Link>

                  <Link
                    to="/principal-message"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-gray-600 hover:text-[#005DAA]"
                  >
                    Principal Message
                  </Link>

                  <Link
                    to="/management-committee"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-gray-600 hover:text-[#005DAA]"
                  >
                    Management Committee
                  </Link>
                </div>
              )}
            </div>

            {/* ================= ACADEMICS ================= */}

            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setAcademicsOpen(!academicsOpen)}
                className="w-full flex justify-between items-center py-3 font-semibold text-[#003B6D]"
              >
                Academics
                <span
                  className={`transition-transform duration-300 ${
                    academicsOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {academicsOpen && (
                <div className="ml-4 flex flex-col">
                  <Link
                    to="/curriculum"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-gray-600 hover:text-[#005DAA]"
                  >
                    Curriculum
                  </Link>

                  <Link
                    to="/academic-calendar"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-gray-600 hover:text-[#005DAA]"
                  >
                    Academic Calendar
                  </Link>

                  <Link
                    to="/faculty"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-gray-600 hover:text-[#005DAA]"
                  >
                    Faculty
                  </Link>

                  <Link
                    to="/fees-structure"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-gray-600 hover:text-[#005DAA]"
                  >
                    Fees Structure
                  </Link>
                </div>
              )}
            </div>

            {/* ================= STUDENT CORNER ================= */}

            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setStudentOpen(!studentOpen)}
                className="w-full flex justify-between items-center py-3 font-semibold text-[#003B6D]"
              >
                Student Corner
                <span
                  className={`transition-transform duration-300 ${
                    studentOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {studentOpen && (
                <div className="ml-4 flex flex-col">
                  <Link
                    to="/achievements"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-gray-600 hover:text-[#005DAA]"
                  >
                    Achievements
                  </Link>

                  <Link
                    to="/gallery"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-gray-600 hover:text-[#005DAA]"
                  >
                    Gallery
                  </Link>

                  <Link
                    to="/downloads"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-gray-600 hover:text-[#005DAA]"
                  >
                    Downloads
                  </Link>
                </div>
              )}
            </div>
            {/* ================= QUICK LINKS ================= */}

            <div className="border-b border-gray-200 py-2">
              <Link
                to="/facilities"
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-semibold text-[#003B6D] hover:text-[#005DAA]"
              >
                Facilities
              </Link>

              <Link
                to="/gallery"
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-semibold text-[#003B6D] hover:text-[#005DAA]"
              >
                Gallery
              </Link>

              <Link
                to="/notifications"
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-semibold text-[#003B6D] hover:text-[#005DAA]"
              >
                🔔 Notifications
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-semibold text-[#003B6D] hover:text-[#005DAA]"
              >
                Contact Us
              </Link>
            </div>

            {/* ================= PRE PRIMARY ================= */}

            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                Pre Primary Campuses
              </h3>

              <div className="space-y-3">
                <Link
                  to="/pre-primary-dondaicha"
                  onClick={() => setMenuOpen(false)}
                  className="
      flex
      items-center
      gap-3
      rounded-xl
      bg-[#003B6D]
      text-white
      px-4
      py-4
      hover:bg-[#005DAA]
      transition
      "
                >
                  🏫
                  <div>
                    <h4 className="font-semibold">Pre Primary Dondaicha</h4>

                    <p className="text-xs text-blue-100">
                      Activity Based Learning
                    </p>
                  </div>
                </Link>

                <Link
                  to="/pre-primary-nimgul"
                  onClick={() => setMenuOpen(false)}
                  className="
      flex
      items-center
      gap-3
      rounded-xl
      bg-[#F4C300]
      text-[#003B6D]
      px-4
      py-4
      hover:scale-[1.02]
      transition
      "
                >
                  🌼
                  <div>
                    <h4 className="font-semibold">Pre Primary Nimgul</h4>

                    <p className="text-xs">Learn Through Play</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* ================= ADMISSION BUTTON ================= */}

            <div className="mt-8">
              <Link
                to="/admission"
                onClick={() => setMenuOpen(false)}
                className="
    w-full
    flex
    justify-center
    items-center
    rounded-xl
    bg-gradient-to-r
    from-[#003B6D]
    to-[#005DAA]
    text-white
    py-4
    font-semibold
    shadow-lg
    hover:scale-[1.02]
    transition-all
    duration-300
    "
              >
                📝 Apply for Admission
              </Link>
            </div>

            {/* ================= FOOTER ================= */}

            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500">
                © 2026 SMT Rotary English School
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

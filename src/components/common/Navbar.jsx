import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ transparent }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
                <Link to="/curriculum"
                  className="block px-4 py-3 text-sm hover:bg-gray-50">Curriculum</Link>
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
                <Link to="/achievement"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Achievement
                </Link>
                <Link to="/alumni"
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Alumni
                
                </Link>
                <Link to="/annual-reports"
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

        <button className="hidden md:flex items-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full cursor-pointer border-0">
          Apply Now
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

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-sm text-zinc-800 hover:bg-zinc-50 bg-transparent border-0 cursor-pointer"
            >
              All Pages
              <svg
                className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1 1 4 4 4-4"
                  stroke="#71717b"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="flex flex-col pl-4">
                <a
                  href="#"
                  className="px-4 py-2 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50"
                >
                  Landing Pages
                </a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50"
                >
                  About Pages
                </a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50"
                >
                  Contact Pages
                </a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50"
                >
                  Blog Pages
                </a>
              </div>
            )}
            <a
              href="#"
              className="px-4 py-2.5 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50"
            >
              Company
            </a>
            <a
              href="#"
              className="px-4 py-2.5 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50"
            >
              Pricing
            </a>
            <a
              href="#"
              className="px-4 py-2.5 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50"
            >
              Blogs
            </a>
            <button className="flex items-center justify-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer border-0 mt-3 w-fit">
              Get this template
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
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

import { useState } from "react";
import {
  FiBell,
  FiCalendar,
  FiSearch,
  FiX,
} from "react-icons/fi";
import Navbar from "../components/common/Navbar";

const notices = [
  {
    id: 1,
    category: "Circular",
    title: "School Circular 2026-27",
    date: "10 June 2026",
    description:
      "Important instructions regarding academic session, attendance and examinations.",
    fullDescription:
      "Important instructions regarding academic session, attendance and examinations. All students and parents are requested to read carefully.",
  },
  {
    id: 2,
    category: "Exam",
    title: "PT-1 Examination Schedule",
    date: "05 June 2026",
    description:
      "Periodic Test-1 examination timetable has been released.",
    fullDescription:
      "PT-1 examination schedule has been published. Students are advised to prepare accordingly.",
  },
  {
    id: 3,
    category: "Holiday",
    title: "School Holiday Notice",
    date: "01 June 2026",
    description:
      "School will remain closed due to local festival.",
    fullDescription:
      "School will remain closed due to local festival. Regular classes will resume from the next working day.",
  },
];

const NotificationPage = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [search, setSearch] = useState("");

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="min-h-screen bg-[#F8FAFC]">
        <Navbar />

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#003B6D] to-[#005DAA] py-16">

          <div className="max-w-7xl mx-auto px-6">

            <div className="flex items-center gap-3 mb-3">
              <FiBell className="text-white text-3xl" />
              <span className="text-[#F4C300] font-semibold uppercase tracking-wider">
                Notice Board
              </span>
            </div>

            <h1 className="text-5xl font-bold text-white">
              Notifications & Circulars
            </h1>

            <p className="text-blue-100 mt-4 max-w-2xl">
              Stay updated with latest school notices, circulars,
              examination schedules and important announcements.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="relative mb-10">

            <FiSearch className="absolute left-4 top-4 text-gray-400 text-xl" />

            <input
              type="text"
              placeholder="Search notifications..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
              w-full
              bg-white
              border
              border-slate-200
              rounded-2xl
              py-4
              pl-12
              pr-4
              outline-none
              shadow-sm
              "
            />
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-2 gap-8">

            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="
                bg-white
                rounded-3xl
                p-7
                shadow-sm
                border
                border-slate-200
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-500
                "
              >
                <div className="flex justify-between items-center mb-5">

                  <span
                    className="
                    bg-blue-100
                    text-[#003B6D]
                    text-xs
                    font-semibold
                    px-3
                    py-1
                    rounded-full
                    "
                  >
                    {notice.category}
                  </span>

                  <span
                    className="
                    bg-red-500
                    text-white
                    text-xs
                    px-3
                    py-1
                    rounded-full
                    "
                  >
                    NEW
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#003B6D] mb-4">
                  {notice.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-6">
                  {notice.description}
                </p>

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-2 text-gray-500">
                    <FiCalendar />
                    {notice.date}
                  </div>

                  <button
                    onClick={() => setSelectedNotice(notice)}
                    className="
                    bg-[#003B6D]
                    hover:bg-[#005DAA]
                    text-white
                    px-5
                    py-2
                    rounded-xl
                    transition
                    "
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedNotice && (
          <div
            className="
            fixed
            inset-0
            z-[999]
            bg-black/50
            backdrop-blur-sm
            flex
            justify-center
            items-center
            p-4
            "
          >
            <div
              className="
              bg-white
              rounded-3xl
              max-w-2xl
              w-full
              shadow-2xl
              overflow-hidden
              "
            >
              <div className="bg-[#003B6D] p-5 flex justify-between items-center">

                <h2 className="text-white text-2xl font-bold">
                  Notification Details
                </h2>

                <button
                  onClick={() => setSelectedNotice(null)}
                >
                  <FiX className="text-white text-2xl" />
                </button>
              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold text-[#003B6D] mb-4">
                  {selectedNotice.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 mb-6">
                  <FiCalendar />
                  {selectedNotice.date}
                </div>

                <p className="leading-8 text-gray-700">
                  {selectedNotice.fullDescription}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default NotificationPage;
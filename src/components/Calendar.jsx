import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Heading from "./common/Heading";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events = [1, 2, 3, 9, 10, 16, 17, 23, 24, 27, 30, 31];

  const notices = [
    {
      date: "05",
      month: "MAY",
      title: "Datesheet For Pre-Mid Term Examination",
    },
    {
      date: "04",
      month: "MAY",
      title: "PTM Schedule For Cambridge Primary Stage",
    },
    {
      date: "09",
      month: "APRIL",
      title: "Schedule For RFID Photos (Classes VI-XII)",
    },
  ];

  const month = currentMonth.toLocaleString("default", {
    month: "long",
  });

  const year = currentMonth.getFullYear();

  const daysInMonth = new Date(year, currentMonth.getMonth() + 1, 0).getDate();

  const firstDay = new Date(year, currentMonth.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentMonth(new Date(year, currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, currentMonth.getMonth() + 1, 1));
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-[#F8FBFF] to-[#EAF4FF] mt-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          
          <div className="text-center mb-14">
            <Heading
            sectionHeading="Academic Calendar"
            heading="Important Academic Events"
            text="Stay updated with examinations, holidays, activities, and
              important academic schedules throughout the year."
            className="text-[#003B6D] text-3xl md:text-4xl"
          />
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Calendar */}
            <div className="rounded-[32px] p-6 shadow-xl border border-gray-100">
              {/* Month Header */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={prevMonth}
                  className="w-14 h-14 rounded-2xl bg-[#fff] hover:bg-[#005DAA] hover:text-white transition duration-300 flex items-center justify-center shadow-md"
                >
                  <FiChevronLeft size={28} />
                </button>

                <h2 className="text-3xl font-bold text-[#0B1736]">
                  {month} {year}
                </h2>

                <button
                  onClick={nextMonth}
                  className="w-14 h-14 rounded-2xl bg-[#fff] hover:bg-[#005DAA] hover:text-white transition duration-300 flex items-center justify-center shadow-md"
                >
                  <FiChevronRight size={28} />
                </button>
              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-4 mb-6 text-center text-gray-400 font-semibold">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div key={day}>{day}</div>
                  ),
                )}
              </div>

              {/* Dates */}
              <div className="grid grid-cols-7 gap-4">
                {[...Array(firstDay)].map((_, index) => (
                  <div key={index}></div>
                ))}

                {[...Array(daysInMonth)].map((_, index) => {
                  const day = index + 1;
                  const hasEvent = events.includes(day);

                  return (
                    <div
                      key={day}
                      className={`
                        h-14
                        w-14
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        text-lg
                        font-medium
                        mx-auto
                        transition-all
                        duration-300
                        cursor-pointer

                        ${
                          hasEvent
                            ? "bg-[#005DAA] text-white shadow-lg hover:scale-110"
                            : "hover:bg-[#EEF4FF] text-[#0B1736]"
                        }
                      `}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Notices */}
            <div className="space-y-8">
              {notices.map((notice, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[28px] p-8 shadow-lg border
                border-gray-100 hover:shadow-2xl transition duration-500"
                >
                  <div className="flex gap-5 items-start">
                    {/* Date */}
                    <div className="min-w-[90px]">
                      <h2 className="text-5xl font-bold text-[#005DAA] leading-none">
                        {notice.date}
                      </h2>

                      <p className="text-[#F4C300] font-semibold mt-2 tracking-[2px]">
                        {notice.month}
                      </p>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#0B1736] mb-4 leading-snug">
                        {notice.title}
                      </h3>

                      <button className="text-[#005DAA] font-semibold hover:translate-x-2 transition duration-300">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Button */}
              <button
                className="
                px-10
                py-4
                rounded-full
                bg-[#005DAA]
                text-white
                font-semibold
                hover:bg-[#003B6D]
                transition
                duration-300
                shadow-lg
                hover:shadow-xl
                "
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calendar;

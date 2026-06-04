
import { FaUserGraduate } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import Heading from "../../components/common/Heading";
import Navbar from "../../components/common/Navbar";

const studentData = [
  { className: "Class I", students: 120, percentage: 95 },
  { className: "Class II", students: 115, percentage: 90 },
  { className: "Class III", students: 130, percentage: 98 },
  { className: "Class IV", students: 125, percentage: 94 },
  { className: "Class V", students: 118, percentage: 88 },
  { className: "Class VI", students: 135, percentage: 96 },
];

const StudentStrength = () => {
  return (
    <section className="bg-gradient-to-b from-[#F8FBFF] to-white">
        <Navbar/>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Heading
            className="text-3xl md:text-4xl"
          sectionHeading="Student Strength"
          heading="Growing Together, Learning Forever"
          text="Our students are the heart of our institution. We nurture every child with quality education and holistic development."
        />

        {/* Stats Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:-translate-y-2 hover:rotate-1 transition-all duration-500">
            <FaUserGraduate className="text-5xl text-[#005DAA]" />
            <h2 className="text-4xl font-bold text-[#003B6D] mt-4">
              1200+
            </h2>
            <p className="text-gray-600 mt-2">Total Students</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:-translate-y-2 hover:-rotate-1 transition-all duration-500">
            <PiStudentBold className="text-5xl text-[#F4C300]" />
            <h2 className="text-4xl font-bold text-[#003B6D] mt-4">
              600+
            </h2>
            <p className="text-gray-600 mt-2">Girls Students</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 hover:-translate-y-2 hover:rotate-1 transition-all duration-500">
            <GiTeacher className="text-5xl text-[#005DAA]" />
            <h2 className="text-4xl font-bold text-[#003B6D] mt-4">
              45+
            </h2>
            <p className="text-gray-600 mt-2">Qualified Teachers</p>
          </div>
        </div>

        {/* Class Wise Strength */}

        <div className="mt-16 bg-white rounded-[32px] p-8 shadow-xl border border-blue-100">
          <h3 className="text-3xl font-bold text-[#003B6D] mb-8">
            Class Wise Student Strength
          </h3>

          <div className="space-y-6">
            {studentData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-[#003B6D]">
                    {item.className}
                  </span>

                  <span className="text-gray-600">
                    {item.students} Students
                  </span>
                </div>

                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#003B6D] via-[#005DAA] to-[#F4C300] rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudentStrength;
import { FaUserTie, FaArrowRight } from "react-icons/fa";
import { RiPhoneLine, RiMapPinLine, RiBriefcaseLine } from "react-icons/ri";

const committee = [
  {
    id: 1,
    name: "Er. Himanshu G. Shah",
    designation: "President",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    featured: true,
    occupation: "Engineer (President, Rotary English School)",
    occupationAddress:
      "22, Chaitanya Colony, Dondaicha, Tal. Shindkheda, Dist. Dhule (MS)",
    phoneOffice: "9422286244",
    phoneResidence: "02586-244411",
  },

  {
    id: 2,
    name: "Dr. Rajesh Patil",
    designation: "Vice President",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    occupation: "Engineer (President, Rotary English School)",
    occupationAddress:
      "22, Chaitanya Colony, Dondaicha, Tal. Shindkheda, Dist. Dhule (MS)",
    phoneOffice: "9422286244",
    phoneResidence: "02586-244411",
  },

  {
    id: 3,
    name: "Mrs. Anjali Patil",
    designation: "Secretary",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    occupation: "Engineer (President, Rotary English School)",
    occupationAddress:
      "22, Chaitanya Colony, Dondaicha, Tal. Shindkheda, Dist. Dhule (MS)",
    phoneOffice: "9422286244",
    phoneResidence: "02586-244411",
  },

  {
    id: 4,
    name: "Mr. Amit Shah",
    designation: "Treasurer",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    occupation: "Engineer (President, Rotary English School)",
    occupationAddress:
      "22, Chaitanya Colony, Dondaicha, Tal. Shindkheda, Dist. Dhule (MS)",
    phoneOffice: "9422286244",
    phoneResidence: "02586-244411",
  },

  {
    id: 5,
    name: "Mrs. Sneha Kulkarni",
    designation: "Joint Secretary",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    occupation: "Engineer (President, Rotary English School)",
    occupationAddress:
      "22, Chaitanya Colony, Dondaicha, Tal. Shindkheda, Dist. Dhule (MS)",
    phoneOffice: "9422286244",
    phoneResidence: "02586-244411",
  },

  {
    id: 6,
    name: "Mr. Rahul Jain",
    designation: "Committee Member",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    occupation: "Engineer (President, Rotary English School)",
    occupationAddress:
      "22, Chaitanya Colony, Dondaicha, Tal. Shindkheda, Dist. Dhule (MS)",
    phoneOffice: "9422286244",
    phoneResidence: "02586-244411",
  },

  {
    id: 7,
    name: "Mrs. Pooja Patil",
    designation: "Committee Member",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    occupation: "Engineer (President, Rotary English School)",
    occupationAddress:
      "22, Chaitanya Colony, Dondaicha, Tal. Shindkheda, Dist. Dhule (MS)",
    phoneOffice: "9422286244",
    phoneResidence: "02586-244411",
  },

  {
    id: 8,
    name: "Mr. Mahesh Deshmukh",
    designation: "Committee Member",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    occupation: "Engineer (President, Rotary English School)",
    occupationAddress:
      "22, Chaitanya Colony, Dondaicha, Tal. Shindkheda, Dist. Dhule (MS)",
    phoneOffice: "9422286244",
    phoneResidence: "02586-244411",
  },
];

const featured = committee.find((item) => item.featured);

const others = committee.filter((item) => !item.featured);

const Committee = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-[#F5FAFF] via-white to-[#F5FAFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* PRESIDENT */}

        <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-[#003B6D] to-[#005DAA] p-10 mt-16 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#F4C300]/20 rounded-full blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group">
                <img
                  src={featured.image}
                  alt=""
                  className="w-80 h-80 rounded-full object-cover border-[10px] border-white transition duration-500 group-hover:rotate-3 group-hover:scale-105"
                />

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#F4C300] text-[#003B6D] px-5 py-2 rounded-full font-bold">
                  President
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-white mb-5">
                <FaUserTie />
                Leadership
              </div>

              <h2 className="text-4xl font-bold text-white">{featured.name}</h2>

              <p className="text-[#F4C300] font-semibold text-lg mt-2">
                {featured.designation}
              </p>

              <p className="text-blue-100 leading-8 mt-6">
                Committed to excellence in education and dedicated to shaping a
                brighter future through innovation, discipline, and quality
                learning opportunities for every student.
              </p>

              <button className="mt-8 bg-[#F4C300] hover:bg-white text-[#003B6D] px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2">
                View Profile
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* OTHER MEMBERS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {others.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-blue-100 hover:-translate-y-3 hover:rotate-1 transition-all duration-500 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#003B6D] to-[#005DAA] h-24" />

              <div className="-mt-14 flex justify-center">
                <img
                  src={item.image}
                  className="w-28 h-28 rounded-full object-cover border-[6px] border-white transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-[#003B6D]">
                  {item.name}
                </h3>

                <div className="mt-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700 inline-block mb-1.5">
                    {item.designation}
                  </span>
                </div>

                <div className="w-14 h-1 bg-[#F4C300] rounded-full mx-auto my-3" />

                <div className="space-y-3 text-sm">
                  <div className="flex gap-1.5">
                    <RiBriefcaseLine className="text-[#005DAA] mt-0.5 flex-shrink-0 text-base" />
                    <p className="text-gray-600 leading-relaxed">
                      {item.occupation}
                    </p>
                  </div>
                  <div className="flex gap-1.5">
                    <RiMapPinLine className="text-[#F4C300] mt-0.5 flex-shrink-0 text-base" />
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.occupationAddress}
                    </p>
                  </div>
                  <div className="flex justify-left gap-5 pt-1">
                    {item.phoneOffice !== "—" && (
                      <div className="flex items-center gap-2.5 text-xs text-gray-500">
                        <RiPhoneLine className="text-[#005DAA]" />
                        <span>{item.phoneOffice}</span>
                      </div>
                    )}
                    {item.phoneResidence !== "—" && (
                      <div className="flex items-center gap-2.5 text-xs text-gray-500">
                        <RiPhoneLine className="text-emerald-500" />
                        <span>{item.phoneResidence}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* <p className="text-[#005DAA] font-medium mt-2">
                  {item.designation}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committee;

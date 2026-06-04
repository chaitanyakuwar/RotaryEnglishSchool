const committeeMembers = [
  {
    id: 1,
    name: "Er. Himanshu G. Shah",
    designation: "President",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    featured: true,
  },
  {
    id: 2,
    name: "Dr. Rajesh Patil",
    designation: "Vice President",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43d",
  },
  {
    id: 3,
    name: "Mrs. Anjali Deshmukh",
    designation: "Secretary",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: 4,
    name: "Mr. Amit Jain",
    designation: "Committee Member",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    id: 5,
    name: "Mrs. Sneha Patil",
    designation: "Committee Member",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    id: 6,
    name: "Mr. Rahul Shah",
    designation: "Committee Member",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
  },
  {
    id: 7,
    name: "Mrs. Pooja Kulkarni",
    designation: "Committee Member",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];

const Committee = () => {
  const president = committeeMembers.find((m) => m.featured);
  const others = committeeMembers.filter((m) => !m.featured);

  return (
    <section className="py-24 bg-[radial-gradient(circle_at_top,#EAF5FF,white)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* President Section */}
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#003B6D] via-[#005DAA] to-[#003B6D] shadow-[0_30px_80px_rgba(0,59,109,0.25)]">

          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F4C300] via-white to-[#F4C300]"></div>

          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10"></div>

          <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-[#F4C300]/20"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center p-10 lg:p-16">

            {/* Content */}
            <div>

              <span className="inline-block bg-[#F4C300] text-[#003B6D] px-5 py-2 rounded-full font-semibold mb-6">
                President
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {president.name}
              </h2>

              <p className="text-[#F4C300] text-xl font-medium mb-6">
                President, Dondaicha Education Society
              </p>

              <p className="text-blue-100 text-lg leading-8 mb-8">
                Leading the institution with vision, commitment and excellence.
                Dedicated to nurturing young minds and creating opportunities
                for every student to achieve their highest potential.
              </p>

              <button
                className="
                bg-[#F4C300]
                text-[#003B6D]
                px-8
                py-3
                rounded-xl
                font-semibold
                hover:bg-white
                hover:scale-105
                transition-all
                duration-300
                "
              >
                View Profile
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative group">

                <div className="absolute inset-0 bg-[#F4C300] rounded-full blur-3xl opacity-30"></div>

                <img
                  src={president.image}
                  alt={president.name}
                  className="
                  relative
                  w-[320px]
                  h-[320px]
                  object-cover
                  rounded-full
                  border-[10px]
                  border-white
                  shadow-2xl
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:rotate-2
                  "
                />
              </div>
            </div>

          </div>
        </div>

        {/* Other Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {others.map((member) => (
            <div
              key={member.id}
              className="
              bg-white
              rounded-[30px]
              p-8
              text-center
              border
              border-[#D6E8F7]
              shadow-[0_10px_30px_rgba(0,59,109,0.08)]
              hover:shadow-[0_25px_50px_rgba(0,93,170,0.18)]
              hover:-translate-y-3
              hover:rotate-[1deg]
              transition-all
              duration-500
              group
              "
            >
              <div className="relative mx-auto w-36 h-36">

                <div className="absolute inset-0 rounded-full bg-[#F4C300]/20 scale-110"></div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  relative
                  w-full
                  h-full
                  rounded-full
                  object-cover
                  border-4
                  border-[#F4C300]
                  transition-all
                  duration-500
                  group-hover:scale-110
                  "
                />
              </div>

              <h3 className="text-xl font-bold text-[#003B6D] mt-6">
                {member.name}
              </h3>

              <p className="text-[#005DAA] font-semibold mt-2">
                {member.designation}
              </p>

              <div className="w-16 h-1 bg-[#F4C300] mx-auto mt-4 rounded-full"></div>

              <p className="text-gray-600 mt-5 text-sm leading-7">
                Dedicated to supporting educational excellence and the holistic
                development of every student through guidance and leadership.
              </p>

              <button
                className="
                mt-6
                text-[#005DAA]
                font-semibold
                hover:text-[#F4C300]
                transition-all
                duration-300
                "
              >
                View Profile →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Committee;
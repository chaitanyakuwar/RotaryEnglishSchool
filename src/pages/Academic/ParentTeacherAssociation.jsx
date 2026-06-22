import Heading from "../../components/common/Heading";
import Navbar from "../../components/common/Navbar";

import {
  FaUserTie,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

// import chairman from "../../assets/images/chairman.jpg";
// import member1 from "../../assets/images/member1.jpg";
// import member2 from "../../assets/images/member2.jpg";
// import member3 from "../../assets/images/member3.jpg";
// import member4 from "../../assets/images/member4.jpg";
// import member5 from "../../assets/images/member5.jpg";
// import member6 from "../../assets/images/member6.jpg";

const committee = [
  {
    id: 1,
    name: "Mrs. ABC Patil",
    designation: "PTA Chairperson",
    role: "Principal",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    featured: true,
  },

  {
    id: 2,
    name: "Mr. Rahul Patil",
    designation: "President",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },

  {
    id: 3,
    name: "Mrs. Sneha Shah",
    designation: "Vice President",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },

  {
    id: 4,
    name: "Mr. Amit Jain",
    designation: "Secretary",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },

  {
    id: 5,
    name: "Mrs. Pooja Kulkarni",
    designation: "Joint Secretary",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },

  {
    id: 6,
    name: "Mr. Mahesh Patil",
    designation: "Parent Representative",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },

  {
    id: 7,
    name: "Mrs. Neha Deshmukh",
    designation: "Teacher Representative",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },
];

const featured = committee.find((item) => item.featured);

const others = committee.filter((item) => !item.featured);


const ParentTeacherAssociation = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="py-12">
          <Heading
            className="text-[#0B1736] text-3xl md:text-4xl"
            sectionHeading="Parent Teacher Association"
            heading="Together We Build Better Education"
            text="The Parent Teacher Association (PTA) strengthens communication between parents and teachers to support students' academic and personal development."
          />
        </div>
        <div className="max-w-7xl mx-auto px-6">
        <div className="mt-16">

          <div
            className="
            relative
            overflow-hidden
            rounded-[35px]
            bg-gradient-to-r
            from-[#003B6D]
            to-[#005DAA]
            p-10
            shadow-2xl
            "
          >

            <div className="absolute right-0 top-0 w-72 h-72 bg-[#F4C300]/20 rounded-full blur-3xl"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Image */}

              <div className="flex justify-center">

                <div className="relative group">

                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="
                    w-80
                    h-80
                    rounded-full
                    object-cover
                    border-[10px]
                    border-white
                    transition
                    duration-500
                    group-hover:rotate-2
                    group-hover:scale-105
                    "
                  />

                  <div
                    className="
                    absolute
                    bottom-2
                    left-1/2
                    -translate-x-1/2
                    bg-[#F4C300]
                    text-[#003B6D]
                    px-5
                    py-2
                    rounded-full
                    font-bold
                    "
                  >
                    Chairperson
                  </div>

                </div>

              </div>

              {/* Content */}

              <div>

                <div
                  className="
                  inline-flex
                  items-center
                  gap-2
                  bg-white/20
                  text-white
                  px-4
                  py-2
                  rounded-full
                  "
                >
                  <FaUserTie />
                  Principal
                </div>

                <h2 className="text-4xl font-bold text-white mt-6">
                  {featured.name}
                </h2>

                <p className="text-[#F4C300] text-xl font-semibold mt-3">
                  {featured.designation}
                </p>

                <p className="text-blue-100 leading-8 mt-6">
                  Our Parent Teacher Association believes that active
                  collaboration between parents and teachers creates a positive
                  learning environment where every child can achieve academic
                  excellence, confidence, and strong values.
                </p>

                <div className="flex flex-wrap gap-4 mt-8">

                  <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-xl text-white">

                    <FaEnvelope />

                    info@school.com

                  </div>

                  <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-xl text-white">

                    <FaPhoneAlt />

                    +91 9876543210

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Committee Members */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {others.map((item) => (

            <div
              key={item.id}
              className="
              bg-white
              rounded-[30px]
              overflow-hidden
              border
              border-blue-100
              shadow-lg
              hover:-translate-y-3
              hover:rotate-1
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div className="h-24 bg-gradient-to-r from-[#003B6D] to-[#005DAA]"></div>

              <div className="-mt-14 flex justify-center">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-28
                  h-28
                  rounded-full
                  object-cover
                  border-[6px]
                  border-white
                  transition
                  duration-500
                  hover:scale-110
                  "
                />

              </div>

              <div className="p-6 text-center">

                <h3 className="text-xl font-bold text-[#003B6D]">
                  {item.name}
                </h3>

                <p className="text-[#005DAA] font-semibold mt-2">
                  {item.designation}
                </p>

                <div className="w-16 h-1 bg-[#F4C300] rounded-full mx-auto mt-5 mb-5"></div>

                <p className="text-gray-600 leading-7 text-sm">
                  Dedicated to strengthening the partnership between parents,
                  teachers, and the school community for every student's
                  success.
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* PTA Objectives */}

        <div className="mt-24">

          <Heading
            sectionHeading="Our Objectives"
            heading="Working Together for Student Success"
            text="The Parent Teacher Association plays an important role in creating a positive, safe, and inspiring learning environment."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            <div
              className="
              bg-white
              rounded-3xl
              p-8
              text-center
              shadow-lg
              border
              border-blue-100
              hover:-translate-y-3
              hover:rotate-1
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-[#003B6D] text-white flex items-center justify-center text-2xl font-bold">
                01
              </div>

              <h3 className="text-xl font-bold text-[#003B6D] mt-6">
                Better Communication
              </h3>

              <p className="text-gray-600 leading-7 text-sm mt-4">
                Strengthen communication between parents, teachers and school
                management.
              </p>

            </div>

            <div
              className="
              bg-white
              rounded-3xl
              p-8
              text-center
              shadow-lg
              border
              border-blue-100
              hover:-translate-y-3
              hover:-rotate-1
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-[#005DAA] text-white flex items-center justify-center text-2xl font-bold">
                02
              </div>

              <h3 className="text-xl font-bold text-[#003B6D] mt-6">
                Student Development
              </h3>

              <p className="text-gray-600 leading-7 text-sm mt-4">
                Encourage academic excellence, discipline and overall personality
                development.
              </p>

            </div>

            <div
              className="
              bg-white
              rounded-3xl
              p-8
              text-center
              shadow-lg
              border
              border-blue-100
              hover:-translate-y-3
              hover:rotate-1
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-[#F4C300] text-[#003B6D] flex items-center justify-center text-2xl font-bold">
                03
              </div>

              <h3 className="text-xl font-bold text-[#003B6D] mt-6">
                Parent Participation
              </h3>

              <p className="text-gray-600 leading-7 text-sm mt-4">
                Promote active involvement of parents in school programs and
                activities.
              </p>

            </div>

            <div
              className="
              bg-white
              rounded-3xl
              p-8
              text-center
              shadow-lg
              border
              border-blue-100
              hover:-translate-y-3
              hover:-rotate-1
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-[#003B6D] text-white flex items-center justify-center text-2xl font-bold">
                04
              </div>

              <h3 className="text-xl font-bold text-[#003B6D] mt-6">
                Positive Environment
              </h3>

              <p className="text-gray-600 leading-7 text-sm mt-4">
                Create a safe, inclusive and supportive atmosphere for every
                student.
              </p>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}

        <div
          className="
          mt-24
          rounded-[32px]
          overflow-hidden
          bg-gradient-to-r
          from-[#003B6D]
          via-[#005DAA]
          to-[#003B6D]
          px-10
          py-14
          text-center
          shadow-2xl
          "
        >

          <h2 className="text-4xl font-bold text-white">
            Together We Build Better Education
          </h2>

          <p className="text-blue-100 mt-5 max-w-3xl mx-auto leading-8">
            The Parent Teacher Association believes that every child's success
            depends on the strong partnership between parents, teachers and the
            school. Together we inspire learning, encourage growth and build a
            brighter future.
          </p>

          <button
            className="
            mt-8
            bg-[#F4C300]
            hover:bg-white
            text-[#003B6D]
            px-8
            py-3
            rounded-xl
            font-semibold
            transition
            duration-300
            hover:scale-105
            "
          >
            Contact PTA
          </button>

        </div>

      </div>
      </section>
    </>
  );
};

export default ParentTeacherAssociation;

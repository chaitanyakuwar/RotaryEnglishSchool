import Navbar from "../components/common/Navbar";
import schoolvideo from "../assets/video/schoolvideo.mp4";
import { IoCallOutline } from "react-icons/io5";
import { CgTime } from "react-icons/cg";
import AboutSchool from "./AboutUs/AboutSchool";
import WhyChooseUs from "../components/WhyChooseUs";
import Heading from "../components/common/Heading";
import FacilitiesCard from "../components/FacilitiesCard";
import Calendar from "../components/Calendar";
// import { RiComputerLine } from "react-icons/ri";
// import { GiGraduateCap } from "react-icons/gi";
// import { FaTrophy } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <Navbar transparent />
        <video
          autoPlay
          playsInline
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src={schoolvideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#003B6D]/20"></div> */}
      </div>
      <div className="bg-[#0F172A] py-3 px-15 flex justify-center items-center gap-5">
        <div className="text-white">
          <p className="flex items-center gap-2 text-xl">
            <div className="bg-[#fff] hover:bg-[#F4C300] cursor-pointer text-[#003B6D] hover:text-[#003B6D] p-2 rounded-full">
              <IoCallOutline className="text-xl font-bold" />
            </div>
            <span className="hover:text-[#F4C300] text-[16px] cursor-pointer transition duration-900">
              02566-246574 / +91 9527084764
            </span>
          </p>
        </div>
        <div className="text-white">
          <p className="flex items-center gap-2 text-xl">
            <div className="bg-[#fff] hover:bg-[#F4C300] cursor-pointer text-[#003B6D] hover:text-[#003B6D] p-2 rounded-full">
              <CgTime className="text-xl font-bold" />
            </div>
            <span className="hover:text-[#F4C300] text-[16px] cursor-pointer transition duration-900">
              Mon-Sat 7:00 AM - 5:00 PM
            </span>
          </p>
        </div>
      </div>
      <AboutSchool />
      <WhyChooseUs />
      <div className="py-4 bg-[#003B6D] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl mt-5">
        <Heading
          sectionHeading="Our Facilities"
          heading="World Class Learning Environment"
          text="Our campus provides modern infrastructure and advanced facilities that support academic excellence and holistic student development."
          className="text-[#FFF] text-3xl md:text-4xl"
        />
      </div>
      <FacilitiesCard />

      {/* Academic Calendar */}
     <Calendar />

      <section className="relative overflow-hidden bg-gradient-to-r from-[#005DAA] via-[#003B6D] to-[#0B1736] py-10">
        {/* Background Circle */}
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-white/5"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2
                className="
          text-3xl
          md:text-4xl
          font-bold
          text-white
          leading-tight
          mb-6
        "
              >
                Admissions Open for 2026–27
              </h2>

              <p
                className="
          text-blue-100
          text-base
          leading-6
          max-w-3xl
        "
              >
                Join the SMT RES family and give your child the foundation they
                deserve — academic excellence, modern infrastructure,
                experienced faculty, and holistic development.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col items-center lg:items-end gap-6">
              <button
                className="
          bg-[#F4C300]
          hover:bg-[#FFD633]
          text-[#003B6D]
          font-bold
          text-base
          px-12
          py-5
          rounded-xl
          shadow-[0_10px_40px_rgba(244,195,0,0.35)]
          transition-all
          duration-300
          hover:-translate-y-1
        "
              >
                Apply for Admission
              </button>

              <button
                className="
          border-2
          border-white/30
          hover:border-white
          backdrop-blur-md
          text-white
          font-semibold
          text-base
          px-12
          py-5
          rounded-xl
          transition-all
          duration-300
          hover:bg-white/10
        "
              >
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

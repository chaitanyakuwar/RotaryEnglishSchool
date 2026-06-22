import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaSchool,
  FaGraduationCap,
  FaHeart,
  FaPlayCircle,
} from "react-icons/fa";

import heroImage from "../assets/images/preprimary-dondaicha.jpg";
import aboutImage from "../assets/images/preprimary-about.jpg";
import Navbar from "../components/common/Navbar";
import Button from "../components/common/Button";
import Heading from "../components/common/Heading";

gsap.registerPlugin(ScrollTrigger);

const PrePrimaryDondaicha = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".heroLeft", {
      x: -80,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });

    gsap.from(".heroRight", {
      x: 80,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    gsap.from(".aboutLeft", {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 75%",
      },
      x: -120,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".aboutRight", {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 75%",
      },
      x: 120,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}

      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-[#003B6D] via-[#005DAA] to-[#0B1736]"
      >
        {/* Blur Circle */}

        <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-[#F4C300]/20 blur-[120px]"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-white/10 blur-[150px]"></div>

        <div className="absolute top-1/3 right-20 w-32 h-32 rounded-full bg-[#F4C300]/20 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ================= LEFT CONTENT ================= */}

            <div className="heroLeft">
              <span
                className="
                inline-flex
                items-center
                gap-2
                bg-[#F4C300]
                text-[#003B6D]
                font-semibold
                px-5
                py-2
                rounded-full
                shadow-lg
                "
              >
                <FaSchool />
                Admissions Open 2026-27
              </span>

              <h1
                className="
                text-5xl
                lg:text-6xl
                font-extrabold
                text-white
                leading-tight
                mt-7
                "
              >
                Welcome To
                <br />
                <span className="text-[#F4C300]">Pre Primary</span>
                <br />
                Dondaicha Campus
              </h1>

              <p
                className="
                text-blue-100
                text-lg
                leading-8
                mt-8
                max-w-xl
                "
              >
                We provide a joyful and activity-based learning environment
                where every child develops confidence, creativity and
                communication skills through play, exploration and innovation.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <Button
                  text="Apply Now"
                  className="
                  bg-[#F4C300]
                  hover:bg-yellow-400
                  text-[#003B6D]
                  font-semibold
                  px-8
                  py-3
                  rounded-xl
                  shadow-xl
                  hover:scale-105
                  transition
                  duration-300
                  "
                />

                <Button
                  text="Explore Campus"
                  className="
                  border-2
                  border-white
                  text-white
                  hover:bg-white
                  hover:text-[#003B6D]
                  px-8
                  py-3
                  rounded-xl
                  transition-all
                  duration-300
                  "
                />
              </div>

              {/* Features */}

              <div className="grid grid-cols-2 gap-5 mt-14">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
                  <FaGraduationCap className="text-[#F4C300] text-3xl" />

                  <h4 className="text-white font-semibold mt-4">
                    Smart Learning
                  </h4>

                  <p className="text-blue-100 text-sm mt-2">
                    Interactive classroom with digital activities.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
                  <FaHeart className="text-[#F4C300] text-3xl" />

                  <h4 className="text-white font-semibold mt-4">
                    Caring Teachers
                  </h4>

                  <p className="text-blue-100 text-sm mt-2">
                    Individual attention for every child.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}

            <div className="heroRight relative">
              <img
                src={heroImage}
                alt="Pre Primary Dondaicha"
                className="
                w-full
                h-[650px]
                object-cover
                rounded-[40px]
                shadow-[0_30px_80px_rgba(0,0,0,.35)]
                "
              />

              {/* Floating Card */}

              <div
                className="
                absolute
                top-8
                -left-8
                bg-white
                rounded-3xl
                shadow-2xl
                px-8
                py-6
                animate-bounce
                "
              >
                <h2 className="text-4xl font-bold text-[#003B6D]">20+</h2>

                <p className="text-gray-600 text-sm">Years of Excellence</p>
              </div>

              {/* Floating Play Button */}

              <div
                className="
                absolute
                bottom-10
                right-10
                w-24
                h-24
                rounded-full
                bg-[#F4C300]
                flex
                items-center
                justify-center
                shadow-2xl
                cursor-pointer
                hover:scale-110
                transition
                duration-300
                "
              >
                <FaPlayCircle
                  className="
                  text-[#003B6D]
                  text-5xl
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}

        <svg className="block w-full" viewBox="0 0 1440 120" fill="none">
          <path
            fill="#F8FBFF"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,53.3C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64V120H1380C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120H0Z"
          />
        </svg>
      </section>

      {/* ================= ABOUT SECTION START ================= */}

      <section ref={aboutRef} className="py-24 bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-6">
          <Heading
          className="text-3xl md:text-4xl"
            sectionHeading="About Pre Primary"
            heading="A Happy Place Where Every Child Loves To Learn"
            text="Our Pre Primary Dondaicha Campus focuses on activity-based education that develops curiosity, confidence and creativity in every child."
          />

          <div className="grid lg:grid-cols-2 gap-20 items-center mt-16">
            {/* LEFT IMAGE */}

            <div className="aboutLeft relative">
              {/* Main Image */}

              <img
                src={aboutImage}
                alt="About Campus"
                className="
        w-full
        h-[560px]
        object-cover
        rounded-[35px]
        shadow-2xl
        "
              />

              {/* Small Floating Image */}

              <img
                src={heroImage}
                alt=""
                className="
        absolute
        -bottom-10
        -right-10
        w-64
        h-64
        object-cover
        rounded-[30px]
        border-[8px]
        border-white
        shadow-2xl
        hidden
        md:block
        "
              />

              {/* Experience Card */}

              <div
                className="
        absolute
        top-8
        left-8
        bg-white
        rounded-3xl
        px-8
        py-6
        shadow-xl
        "
              >
                <h2 className="text-4xl font-bold text-[#003B6D]">20+</h2>

                <p className="text-gray-600 mt-2">
                  Years of Educational Excellence
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="aboutRight">
              <span
                className="
        inline-block
        bg-[#F4C300]
        text-[#003B6D]
        px-5
        py-2
        rounded-full
        font-semibold
        "
              >
                Why Choose Our Campus
              </span>

              <h2
                className="
        text-4xl
        font-bold
        text-[#003B6D]
        mt-6
        leading-tight
        "
              >
                Building Strong Foundations
                <br />
                For Bright Futures
              </h2>

              <p
                className="
        text-gray-600
        leading-8
        mt-8
        "
              >
                Our classrooms are designed to provide a safe, engaging and
                child-friendly environment where children learn naturally
                through exploration, games, storytelling, music and hands-on
                activities.
              </p>

              <p
                className="
        text-gray-600
        leading-8
        mt-6
        "
              >
                We believe that every child is unique. Our experienced teachers
                encourage independent thinking, creativity, communication and
                social skills while ensuring joyful learning every day.
              </p>

              {/* Feature Cards Start */}

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div
                  className="
          bg-white
          rounded-[24px]
          p-6
          shadow-lg
          border
          border-blue-100
          hover:-translate-y-2
          hover:rotate-1
          transition-all
          duration-500
          "
                >
                  <div className="text-5xl">🎨</div>

                  <h3 className="text-xl font-bold text-[#003B6D] mt-5">
                    Creative Learning
                  </h3>

                  <p className="text-gray-600 leading-7 mt-3">
                    Art, music, storytelling and hands-on activities make
                    learning enjoyable every day.
                  </p>
                </div>

                <div
                  className="
          bg-white
          rounded-[24px]
          p-6
          shadow-lg
          border
          border-blue-100
          hover:-translate-y-2
          hover:-rotate-1
          transition-all
          duration-500
          "
                >
                  <div className="text-5xl">📚</div>

                  <h3 className="text-xl font-bold text-[#003B6D] mt-5">
                    Activity Based Education
                  </h3>

                  <p className="text-gray-600 leading-7 mt-3">
                    Learning through fun classroom activities that improve
                    thinking, observation and communication skills.
                  </p>
                </div>

                <div
                  className="
          bg-white
          rounded-[24px]
          p-6
          shadow-lg
          border
          border-blue-100
          hover:-translate-y-2
          hover:rotate-1
          transition-all
          duration-500
          "
                >
                  <div className="text-5xl">❤️</div>

                  <h3 className="text-xl font-bold text-[#003B6D] mt-5">
                    Caring Teachers
                  </h3>

                  <p className="text-gray-600 leading-7 mt-3">
                    Every child receives individual attention in a warm, caring
                    and encouraging environment.
                  </p>
                </div>

                <div
                  className="
          bg-white
          rounded-[24px]
          p-6
          shadow-lg
          border
          border-blue-100
          hover:-translate-y-2
          hover:-rotate-1
          transition-all
          duration-500
          "
                >
                  <div className="text-5xl">🌱</div>

                  <h3 className="text-xl font-bold text-[#003B6D] mt-5">
                    Holistic Growth
                  </h3>

                  <p className="text-gray-600 leading-7 mt-3">
                    We nurture children's intellectual, emotional, physical and
                    social development together.
                  </p>
                </div>
              </div>

              {/* Highlight Card */}

              <div
                className="
        mt-10
        bg-gradient-to-r
        from-[#003B6D]
        via-[#005DAA]
        to-[#003B6D]
        rounded-[30px]
        p-8
        text-white
        shadow-2xl
        "
              >
                <h3 className="text-2xl font-bold">Learning Through Play</h3>

                <p className="text-blue-100 leading-8 mt-4">
                  Children learn best when they enjoy learning. Our play-based
                  teaching approach develops confidence, creativity,
                  communication and independent thinking while making every
                  classroom experience fun and meaningful.
                </p>
              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-5 mt-10">
                <Button
                  text="Explore Programs"
                  className="
          bg-[#003B6D]
          hover:bg-[#005DAA]
          text-white
          px-8
          py-3
          rounded-xl
          font-semibold
          shadow-lg
          "
                />

                <Button
                  text="Admission Enquiry"
                  className="
          border-2
          border-[#003B6D]
          text-[#003B6D]
          hover:bg-[#003B6D]
          hover:text-white
          px-8
          py-3
          rounded-xl
          font-semibold
          "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrePrimaryDondaicha;

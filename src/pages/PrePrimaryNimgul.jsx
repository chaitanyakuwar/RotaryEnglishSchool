import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaSchool, FaChild, FaHeart, FaPlayCircle } from "react-icons/fa";

import heroImage from "../assets/images/preprimary-nimgul.jpg";
import aboutImage from "../assets/images/preprimary-classroom.jpg";
import Button from "../components/common/Button";
import Heading from "../components/common/Heading";
import Navbar from "../components/common/Navbar";

gsap.registerPlugin(ScrollTrigger);

const PrePrimaryNimgul = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".aboutLeft", {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 75%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".aboutRight", {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 75%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}

      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-r from-[#003B6D] via-[#005DAA] to-[#0B1736]"
      >
        <div className="absolute -top-28 -left-24 w-72 h-72 rounded-full bg-[#F4C300]/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}

            <div>
              <span
                className="
                inline-flex
                items-center
                gap-2
                bg-[#F4C300]
                text-[#003B6D]
                px-5
                py-2
                rounded-full
                font-semibold
                "
              >
                <FaSchool />
                Pre Primary Wing
              </span>

              <h1
                className="
                text-5xl
                lg:text-6xl
                font-bold
                text-white
                leading-tight
                mt-6
                "
              >
                Pre Primary
                <br />
                Nimgul Campus
              </h1>

              <p
                className="
                text-blue-100
                text-lg
                leading-8
                mt-8
                "
              >
                Our Pre Primary section provides a joyful, caring and
                activity-based learning environment where every child develops
                confidence, creativity and curiosity through play.
              </p>

              <div className="flex gap-5 mt-10">
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
                  "
                />

                <Button
                  text="Explore Campus"
                  className="
                  border
                  border-white
                  text-white
                  hover:bg-white
                  hover:text-[#003B6D]
                  px-8
                  py-3
                  rounded-xl
                  transition
                  "
                />
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative">
              <img
                src={heroImage}
                alt=""
                className="
                rounded-[40px]
                shadow-2xl
                object-cover
                w-full
                h-[600px]
                "
              />

              <div
                className="
                absolute
                -bottom-8
                left-8
                bg-white
                rounded-3xl
                px-8
                py-5
                shadow-xl
                "
              >
                <h2 className="text-4xl font-bold text-[#003B6D]">20+</h2>

                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section ref={aboutRef} className="py-24 bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-6">
          <Heading
            className="text-3xl md:text-4xl"
            sectionHeading="About Campus"
            heading="Learning Begins With Happiness"
            text="We create a caring environment where every child learns through exploration, creativity and joyful experiences."
          />

          <div className="grid lg:grid-cols-2 gap-20 items-center mt-16">
            {/* IMAGE */}

            <div className="aboutLeft relative">
              <img
                src={aboutImage}
                alt=""
                className="
                rounded-[35px]
                shadow-2xl
                object-cover
                h-[520px]
                w-full
                "
              />

              <div
                className="
                absolute
                -bottom-10
                right-8
                bg-[#F4C300]
                rounded-3xl
                px-7
                py-5
                shadow-xl
                "
              >
                <FaPlayCircle
                  className="
                  text-5xl
                  text-[#003B6D]
                  "
                />
              </div>
            </div>

            {/* CONTENT */}

            <div className="aboutRight">
              <h2
                className="
                text-4xl
                font-bold
                text-[#003B6D]
                "
              >
                A Safe & Happy Place
                <br />
                For Every Child
              </h2>

              <p
                className="
                text-gray-600
                leading-8
                mt-8
                "
              >
                At SMTRES Pre Primary Nimgul, children are encouraged to
                discover, imagine and grow through activity-based education. Our
                classrooms are designed to make learning exciting and
                meaningful.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div
                  className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-lg
                  hover:-translate-y-2
                  hover:rotate-2
                  transition-all
                  duration-500
                  "
                >
                  <FaChild className="text-4xl text-[#005DAA]" />

                  <h3 className="font-bold text-xl mt-4">Activity Learning</h3>

                  <p className="text-gray-500 mt-3">
                    Fun-filled classroom activities to improve creativity.
                  </p>
                </div>

                <div
                  className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-lg
                  hover:-translate-y-2
                  hover:-rotate-2
                  transition-all
                  duration-500
                  "
                >
                  <FaHeart className="text-4xl text-[#F4C300]" />

                  <h3 className="font-bold text-xl mt-4">Caring Teachers</h3>

                  <p className="text-gray-500 mt-3">
                    Experienced teachers who nurture every child's growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* LEARNING PROGRAMS */}
      {/* ========================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Heading
            className="text-3xl md:text-4xl"
            sectionHeading="Our Programs"
            heading="Learning Through Fun Activities"
            text="Our curriculum focuses on play-based learning, creativity, communication, and overall child development."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="group bg-[#F8FBFF] rounded-[28px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:rotate-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-[#003B6D] text-white flex items-center justify-center text-3xl">
                🌼
              </div>

              <h3 className="text-2xl font-bold text-[#003B6D] mt-6">
                Nursery
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Play-based learning with storytelling, music, art and fun
                classroom activities.
              </p>
            </div>

            <div className="group bg-[#F8FBFF] rounded-[28px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:-rotate-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-[#005DAA] text-white flex items-center justify-center text-3xl">
                📚
              </div>

              <h3 className="text-2xl font-bold text-[#003B6D] mt-6">
                Junior KG
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Developing language skills, creativity and confidence through
                enjoyable learning.
              </p>
            </div>

            <div className="group bg-[#F8FBFF] rounded-[28px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:rotate-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-[#F4C300] text-[#003B6D] flex items-center justify-center text-3xl">
                🎨
              </div>

              <h3 className="text-2xl font-bold text-[#003B6D] mt-6">
                Senior KG
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Preparing children for primary education with activity-based
                academic learning.
              </p>
            </div>

            <div className="group bg-[#F8FBFF] rounded-[28px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:-rotate-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-[#003B6D] text-white flex items-center justify-center text-3xl">
                ⭐
              </div>

              <h3 className="text-2xl font-bold text-[#003B6D] mt-6">
                School Readiness
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Building confidence, communication and social skills before
                entering primary school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* FACILITIES */}
      {/* ========================= */}

      <section className="py-24 bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-6">
          <Heading
            className="text-3xl md:text-4xl"
            sectionHeading="Facilities"
            heading="Everything Your Child Needs"
            text="Modern classrooms and child-friendly facilities designed to create a joyful learning experience."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Smart Classroom",
                icon: "🖥️",
              },
              {
                title: "Indoor Play Area",
                icon: "🎠",
              },
              {
                title: "Outdoor Games",
                icon: "⚽",
              },
              {
                title: "Creative Activity Room",
                icon: "🎨",
              },
              {
                title: "Safe Transport",
                icon: "🚌",
              },
              {
                title: "Healthy Environment",
                icon: "🌿",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                bg-white
                rounded-[30px]
                p-8
                shadow-lg
                border
                border-blue-100
                hover:-translate-y-4
                hover:rotate-2
                hover:shadow-2xl
                transition-all
                duration-500
                group
                "
              >
                <div
                  className="
                  w-20
                  h-20
                  rounded-full
                  bg-gradient-to-r
                  from-[#003B6D]
                  to-[#005DAA]
                  flex
                  items-center
                  justify-center
                  text-4xl
                  mx-auto
                  group-hover:scale-110
                  transition
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-center text-[#003B6D] mt-8">
                  {item.title}
                </h3>

                <p className="text-center text-gray-600 leading-7 mt-4">
                  A child-friendly facility designed to support joyful learning,
                  creativity and holistic development.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* DAILY ROUTINE */}
      {/* ====================================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Heading
            className="text-3xl md:text-4xl"
            sectionHeading="Daily Routine"
            heading="A Day Filled With Learning & Fun"
            text="Every day is carefully planned to balance academics, creativity, play and personality development."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                time: "09:00 AM",
                title: "Morning Prayer",
                color: "bg-[#003B6D]",
                icon: "🙏",
              },
              {
                time: "09:30 AM",
                title: "Class Activities",
                color: "bg-[#005DAA]",
                icon: "📚",
              },
              {
                time: "10:45 AM",
                title: "Play Time",
                color: "bg-[#F4C300]",
                icon: "⚽",
              },
              {
                time: "11:30 AM",
                title: "Story & Music",
                color: "bg-[#003B6D]",
                icon: "🎵",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                group
                relative
                rounded-[30px]
                overflow-hidden
                shadow-xl
                hover:-translate-y-4
                hover:rotate-2
                transition-all
                duration-500
                "
              >
                <div className={`${item.color} p-8 text-center`}>
                  <div className="text-6xl group-hover:scale-125 transition duration-500">
                    {item.icon}
                  </div>

                  <h3 className="text-white text-2xl font-bold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-white/90 mt-3">{item.time}</p>
                </div>

                <div className="bg-white p-6">
                  <p className="text-gray-600 leading-7 text-center">
                    Children participate in enjoyable activities that improve
                    confidence, communication and creativity.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* WHY CHOOSE NIMGUL */}
      {/* ====================================== */}

      <section className="py-24 bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-6">
          <Heading
            className="text-3xl md:text-4xl"
            sectionHeading="Why Choose Us"
            heading="The Perfect Place To Begin Learning"
            text="Our Pre Primary Campus provides a caring environment where every child feels safe, confident and excited to learn."
          />

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: "👩‍🏫",
                title: "Experienced Teachers",
              },
              {
                icon: "🎨",
                title: "Creative Activities",
              },
              {
                icon: "🚌",
                title: "Safe Transport",
              },
              {
                icon: "📖",
                title: "Smart Learning",
              },
              {
                icon: "🌿",
                title: "Healthy Environment",
              },
              {
                icon: "❤️",
                title: "Individual Attention",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                bg-white
                rounded-[30px]
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                hover:rotate-1
                transition-all
                duration-500
                "
              >
                <div
                  className="
                  w-20
                  h-20
                  rounded-full
                  bg-gradient-to-r
                  from-[#003B6D]
                  to-[#005DAA]
                  flex
                  items-center
                  justify-center
                  text-5xl
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#003B6D] mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-8">
                  We provide a joyful learning experience that helps children
                  build confidence, creativity and communication skills from an
                  early age.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* HIGHLIGHTS */}
      {/* ====================================== */}

      <section className="py-24 bg-gradient-to-r from-[#003B6D] via-[#005DAA] to-[#003B6D]">
        <div className="max-w-7xl mx-auto px-6">
          <Heading
            sectionHeading="Campus Highlights"
            heading="Learning Through Every Experience"
            text="Our campus is designed to encourage exploration, imagination and joyful learning every single day."
            className="text-white text-3xl md:text-4xl"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              "Activity Based Learning",
              "Digital Classroom",
              "Indoor & Outdoor Games",
              "Music & Dance",
            ].map((item, index) => (
              <div
                key={index}
                className="
                bg-white/10
                backdrop-blur-lg
                border
                border-white/20
                rounded-[30px]
                p-8
                text-center
                hover:bg-white
                hover:text-[#003B6D]
                hover:-translate-y-3
                transition-all
                duration-500
                "
              >
                <div className="text-5xl mb-5">⭐</div>

                <h3 className="text-2xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* GALLERY */}
      {/* ====================================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Heading
            className="text-3xl md:text-4xl"
            sectionHeading="Campus Gallery"
            heading="Happy Moments at Pre Primary Nimgul"
            text="A glimpse of joyful learning, classroom activities and memorable moments."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              "https://images.unsplash.com/photo-1509062522246-3755977927d7",
              "https://images.unsplash.com/photo-1588072432836-e10032774350",
              "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
              "https://images.unsplash.com/photo-1513258496099-48168024aec0",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7",
            ].map((image, index) => (
              <div
                key={index}
                className="
                group
                overflow-hidden
                rounded-[28px]
                shadow-xl
                relative
                "
              >
                <img
                  src={image}
                  alt=""
                  className="
                  w-full
                  h-[280px]
                  object-cover
                  group-hover:scale-110
                  group-hover:rotate-2
                  transition-all
                  duration-700
                  "
                />

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#003B6D]/80
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  flex
                  items-end
                  p-6
                  "
                >
                  <h3 className="text-white text-xl font-semibold">
                    School Activity
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================== */}
      {/* PARENT TESTIMONIALS */}
      {/* ====================================== */}
{/* 
      <section className="py-24 bg-gradient-to-r from-[#003B6D] via-[#005DAA] to-[#003B6D]">
        <div className="max-w-6xl mx-auto px-6">
          <Heading
            sectionHeading="Parent Feedback"
            heading="What Parents Say About Us"
            text="Parents trust us because we provide a safe, caring and joyful learning environment."
            className="text-white text-3xl md:text-4xl"
          />

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                name: "Mrs. Kavita Patil",
                review:
                  "The teachers are very caring and my child enjoys coming to school every day.",
              },
              {
                name: "Mr. Rahul Shah",
                review:
                  "Excellent environment with activity-based learning and individual attention.",
              },
              {
                name: "Mrs. Pooja Jain",
                review:
                  "We are happy with our child's confidence and communication skills after joining this school.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                bg-white
                rounded-[30px]
                p-8
                shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
                "
              >
                <div className="text-[#F4C300] text-3xl mb-5">⭐⭐⭐⭐⭐</div>

                <p className="text-gray-600 leading-8 italic">
                  "{item.review}"
                </p>

                <h4 className="mt-8 text-xl font-bold text-[#003B6D]">
                  {item.name}
                </h4>

                <p className="text-[#005DAA]">Parent</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ====================================== */}
      {/* ADMISSION CTA */}
      {/* ====================================== */}

      <section className="py-24 bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#003B6D] via-[#005DAA] to-[#003B6D] p-10 lg:p-16">
            {/* Background Decorations */}
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#F4C300]/20"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <span className="inline-block bg-[#F4C300] text-[#003B6D] font-semibold px-5 py-2 rounded-full">
                  Admissions Open
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight">
                  Give Your Child
                  <br />
                  The Best Beginning
                </h2>

                <p className="text-blue-100 leading-8 mt-6 max-w-xl">
                  Join SMTRES Pre Primary Nimgul and provide your child with a
                  joyful learning environment, caring teachers and
                  activity-based education that builds confidence and
                  creativity.
                </p>
              </div>

              {/* Right */}

              <div className="bg-white rounded-[30px] p-8 shadow-2xl">
                <h3 className="text-3xl font-bold text-[#003B6D] mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500">Address</p>

                    <h4 className="text-lg font-semibold text-[#003B6D] mt-1">
                      SMTRES Pre Primary Nimgul,
                      <br />
                      Nimgul, Maharashtra
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Phone</p>

                    <h4 className="text-lg font-semibold text-[#003B6D] mt-1">
                      +91 9527084764
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Email</p>

                    <h4 className="text-lg font-semibold text-[#003B6D] mt-1">
                      info@smtres.in
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-10">
                  <Button
                    text="Apply Now"
                    className="
                    bg-[#F4C300]
                    hover:bg-yellow-400
                    text-[#003B6D]
                    px-8
                    py-3
                    rounded-xl
                    font-semibold
                    shadow-lg
                    "
                  />

                  <Button
                    text="Contact Us"
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
        </div>
      </section>
    </>
  );
};

export default PrePrimaryNimgul;

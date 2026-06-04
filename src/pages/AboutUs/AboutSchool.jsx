import Button from "../../components/common/Button";
import Heading from "../../components/common/Heading";
import schoolBuilding from "../../assets/images/school-building.jpg";
import students from "../../assets/images/student.jpg";
import { FaCheckCircle } from "react-icons/fa";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutSchool = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        contentRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        badgeRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      );
  }, []);
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <Heading
            className="text-[#0B1736] text-3xl md:text-4xl"
            sectionHeading="About Our School"
            heading="Smt. Mandakini Tongaonkar Rotary English School    "
            text="We are committed to providing quality education and fostering a nurturing environment for all our students."
          />
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">
            {/* LEFT IMAGES */}
            <div className="relative" ref={imageRef}>
              {/* Main Image */}
              <div className="overflow-hidden rounded-[32px] shadow-2xl group">
                <img
                  src={schoolBuilding}
                  alt="School Building"
                  className="
    w-full
    h-[500px]
    object-cover
    transition-all
    duration-700
    ease-out
    group-hover:scale-110
    group-hover:rotate-[1deg]
  "
                />
              </div>

              {/* Floating Image */}
              <div
                className="
                absolute
                -bottom-12
                right-0
                w-[260px]
                md:w-[320px]
                rounded-[28px]
                overflow-hidden
                border-[8px]
                border-white
                shadow-2xl
                hidden
                md:block
                "
              >
                <img
                  src={students}
                  alt="Students"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div
                ref={badgeRef}
                className="
                absolute
                top-8
                left-8
                bg-[#005DAA]
                text-white
                px-8
                py-5
                rounded-3xl
                shadow-xl
                "
              >
                <h2 className="text-4xl font-bold">20+</h2>

                <p className="uppercase tracking-[2px] text-sm">
                  Years Experience
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div ref={contentRef}>
              <h1 className="text-3xl font-semibold text-[#0B1736] mb-4">
                Empowering Students Through Modern Education & Holistic
                Development
              </h1>
              <p
                className="
                text-gray-600
                leading-7
                text-[16px]
                mb-3
                "
              >
                Dondaicha Education Society started the school in 2002 to
                provide quality English medium education. The school focuses on
                academic excellence, creativity, discipline, leadership and
                personality development.
              </p>

              <p
                className="
                text-gray-600
                leadin-7
                text-[16px]
                mb-6
                "
              >
                With advanced infrastructure, digital classrooms, experienced
                faculty and co-curricular activities, the school creates a
                positive learning environment for every student.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-[#005DAA] text-2xl mt-1" />

                  <div>
                    <h4 className="font-semibold text-[#0B1736] text-lg">
                      Smart Classrooms
                    </h4>

                    <p className="text-gray-500 text-sm mt-1">
                      Interactive digital learning environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-[#005DAA] text-2xl mt-1" />

                  <div>
                    <h4 className="font-semibold text-[#0B1736] text-lg">
                      Qualified Faculty
                    </h4>

                    <p className="text-gray-500 text-sm mt-1">
                      Experienced and dedicated teaching staff.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-[#005DAA] text-2xl mt-1" />

                  <div>
                    <h4 className="font-semibold text-[#0B1736] text-lg">
                      Sports & Activities
                    </h4>

                    <p className="text-gray-500 text-sm mt-1">
                      Holistic growth beyond academics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-[#005DAA] text-2xl mt-1" />

                  <div>
                    <h4 className="font-semibold text-[#0B1736] text-lg">
                      Modern Infrastructure
                    </h4>

                    <p className="text-gray-500 text-sm mt-1">
                      Safe and advanced campus facilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5">
                <Button
                  text="Read More"
                  className="
                  px-8
                  py-2
                  rounded-xl
                  bg-[#005DAA]
                  hover:bg-[#003B6D]
                  hover:-translate-y-1
hover:scale-105
                  text-white
                  font-semibold
                  transition
                  duration-300
                  shadow-lg
                  hover:shadow-2xl
                  "
                />
                <Button
                  text="Contact Us"
                  className="px-8
                  py-2
                  rounded-xl
                  border-2
                  border-[#005DAA]
                  text-[#005DAA]
                  hover:bg-[#005DAA]
                  hover:-translate-y-1
hover:scale-105
                  hover:text-white
                  font-semibold
                  transition
                  duration-300
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

export default AboutSchool;

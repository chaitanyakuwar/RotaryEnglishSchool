import Heading from "../../components/common/Heading";
import founder from "../../assets/images/Smt-Mandakini-Tongaonkar.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MandakiniInfo = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const quoteRef = useRef(null);

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
        quoteRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      );
  }, []);
  return (
    <>
      <section className="py-12 bg-[#F8FAFC] relative overflow-hidden mb-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#005DAA]/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4C300]/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6">
          <Heading
            heading="Smt. Mandakini Tongaonkar"
            sectionHeading="About Founder"
            className="text-[#003B6D] text-3xl md:text-4xl"
          />
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Image Section */}
            <div className="lg:col-span-4" ref={imageRef}>
              <div className="relative group">
                <div
                  className="
      absolute inset-0
      bg-[#0B1736]
      rounded-3xl
      rotate-3
      group-hover:rotate-6
      transition-all
      duration-500
      "
                ></div>

                <img
                  src={founder}
                  alt="Smt. Mandakini Tongaonkar"
                  className="
      relative
      rounded-3xl
      shadow-2xl
      object-cover
      w-full
      h-full
      border-4
      border-white
      transition-all
      duration-700
      group-hover:scale-105
      group-hover:-translate-y-2
      "
                />
              </div>

              {/* Quote Card */}
              <div
                ref={quoteRef}
                className="
    bg-white
    shadow-lg
    rounded-2xl
    p-6
    mt-8
    border
    border-gray-100
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-2xl
    "
              >
                <p className="text-lg italic text-gray-700 leading-relaxed">
                  “Her life inspires girls and women to continue learning,
                  become self-supporting, and serve society.”
                </p>
              </div>
            </div>

            {/* Text Section */}
            <div className="lg:col-span-8" ref={contentRef}>
              <div
                className="bg-white
    rounded-3xl
    shadow-lg
    p-6
    md:p-10
    border
    border-gray-100
    transition-all
    duration-500
    hover:shadow-2xl
    "
              >
                <p className="text-gray-700 leading-8 text-lg mb-6">
                  Smt. Mandakini Tongaonkar was a respected teacher and a
                  motherly figure lovingly called “Aai” by everyone around her.
                  She was honored with the Adarsh Mata Puraskar by renowned
                  institutions for her dedication and contribution to education.
                </p>

                <p className="text-gray-700 leading-8 text-lg mb-6">
                  Married at the age of 13 and having completed only her
                  vernacular final exam, her journey was far from ordinary.
                  Encouraged by her husband, freedom fighter Shri Annasaheb
                  Rangnath Tongaonkar, she continued her education despite
                  challenges and social limitations.
                </p>

                <p className="text-gray-700 leading-8 text-lg mb-6">
                  She completed her Matriculation (S.S.C.), pursued teacher
                  training, and later joined a Hindi school in Dondaicha as a
                  teacher. She mastered Hindi through continuous self-study and
                  passed multiple advanced examinations including Sahitya
                  Visharad, Kovid, Pandit, and Hindi Parangat.
                </p>

                <p className="text-gray-700 leading-8 text-lg mb-6">
                  Her thirst for knowledge continued throughout life. She earned
                  her B.A. at the age of 38 and B.Ed. at 40 while raising her
                  family. Later, she completed her M.A., becoming the first
                  teacher in Dondaicha with M.A., B.Ed qualifications.
                </p>

                <p className="text-gray-700 leading-8 text-lg">
                  Her dedication to education, self-reliance, and service became
                  the inspiration behind the naming of the school:
                </p>

                {/* School Name Highlight */}
                <div
                  className="
  mt-8
  bg-gradient-to-r
  from-[#FFF6E5]
  to-[#FFFFFF]
  border-l-4
  border-[#F4C300]
  rounded-2xl
  p-6
  shadow-md
  transition-all
  duration-500
  hover:scale-[1.02]
  hover:shadow-xl
  "
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    Smt. Mandakini Tongaonkar Rotary English School
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MandakiniInfo;

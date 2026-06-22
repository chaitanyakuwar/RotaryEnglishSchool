// import Achievement_Card from "../../components/common/Achievement_Card";
import Heading from "../../components/common/Heading";
import Navbar from "../../components/common/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaUserGraduate,
} from "react-icons/fa";

const achievements = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&q=80",
    title: "Science Exhibition Champion",
    class: "Class VIII",
    position: "1st Rank",
    description:
      "Won First Prize at District Level Science Exhibition 2026.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&q=80",
    title: "Football Championship",
    class: "Class IX",
    position: "Winner",
    description:
      "District Level Football Tournament Champion.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&q=80",
    title: "Drawing Competition",
    class: "Class V",
    position: "Gold Medal",
    description:
      "Secured Gold Medal in State Level Drawing Competition.",
  },
];

const Achievement = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="py-10 bg-[#F8FAFC]">
          <Heading
            text="Celebrating the outstanding achievements of our students across academics, sports and cultural activities."
            heading="Trophy Wall of Excellence"
            className="text-3xl md:text-4xl"
            sectionHeading="Our Pride"
          />
        </div>
        <section className="py-10 bg-gradient-to-br from-[#003B6D] via-[#004B87] to-[#005DAA] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
          }}
          loop
        >
          {achievements.map((item) => (
            <SwiperSlide key={item.id}>

              <div
                className="
                grid
                lg:grid-cols-2
                gap-10
                items-center
                bg-white/10
                backdrop-blur-xl
                rounded-[40px]
                overflow-hidden
                border
                border-white/20
                p-8
                "
              >

                {/* Image */}

                <div className="overflow-hidden rounded-3xl">

                  <img
                    src={item.image}
                    className="
                    w-full
                    h-[420px]
                    object-cover
                    hover:scale-110
                    duration-700
                    "
                  />

                </div>

                {/* Content */}

                <div>

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
                    🏆 {item.position}
                  </span>

                  <h2 className="text-4xl font-bold text-white mt-6">
                    {item.title}
                  </h2>

                  <div className="mt-6 flex gap-4">

                    <span className="bg-white/20 text-white px-5 py-2 rounded-full">
                      {item.class}
                    </span>

                  </div>

                  <p className="text-blue-100 leading-8 mt-8 text-lg">
                    {item.description}
                  </p>

                  <button
                    className="
                    mt-10
                    bg-[#F4C300]
                    hover:bg-white
                    text-[#003B6D]
                    font-semibold
                    px-8
                    py-4
                    rounded-xl
                    transition
                    "
                  >
                    View Achievement
                  </button>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          <div className="text-center bg-white/10 rounded-3xl py-10 border border-white/20">

            <FaAward className="mx-auto text-[#F4C300] text-5xl mb-5"/>

            <h2 className="text-4xl font-bold text-white">
              120+
            </h2>

            <p className="text-blue-100 mt-2">
              Awards
            </p>

          </div>

          <div className="text-center bg-white/10 rounded-3xl py-10 border border-white/20">

            <FaTrophy className="mx-auto text-[#F4C300] text-5xl mb-5"/>

            <h2 className="text-4xl font-bold text-white">
              45
            </h2>

            <p className="text-blue-100 mt-2">
              First Rank
            </p>

          </div>

          <div className="text-center bg-white/10 rounded-3xl py-10 border border-white/20">

            <FaUserGraduate className="mx-auto text-[#F4C300] text-5xl mb-5"/>

            <h2 className="text-4xl font-bold text-white">
              200+
            </h2>

            <p className="text-blue-100 mt-2">
              Student Winners
            </p>

          </div>

          <div className="text-center bg-white/10 rounded-3xl py-10 border border-white/20">

            <FaMedal className="mx-auto text-[#F4C300] text-5xl mb-5"/>

            <h2 className="text-4xl font-bold text-white">
              25
            </h2>

            <p className="text-blue-100 mt-2">
              State Level
            </p>

          </div>

        </div>

      </div>

    </section>
      </section>
    </>
  );
};

export default Achievement;

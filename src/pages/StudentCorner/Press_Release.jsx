import Navbar from "../../components/common/Navbar"
import news1 from "../../assets/images/news1.jpg";
import news2 from "../../assets/images/news2.jpg";
import news3 from "../../assets/images/news3.jpg";
import Heading from "../../components/common/Heading";

const Press_Release = () => {
        const pressReleases = [
      {
        id: 1,
        title: "Annual Science Exhibition Featured In Newspaper",
        image: news1,
        date: "12 May 2026",
        category: "Education",
        description:
          "Students showcased innovative science projects and received appreciation from visitors and media.",
      },
    
      {
        id: 2,
        title: "Rotary English School Achieves Academic Excellence",
        image: news2,
        date: "05 April 2026",
        category: "Achievement",
        description:
          "School students achieved outstanding board examination results with district level recognition.",
      },
    
      {
        id: 3,
        title: "Sports Competition Victory Covered By Local Media",
        image: news3,
        date: "22 March 2026",
        category: "Sports",
        description:
          "Our students secured top positions in inter-school sports competitions and cultural activities.",
      },
    ];
  return (
    <>
        <section>
            <Navbar />
            <section className="py-10 bg-[#F8FAFC] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-10">
                <Heading
                  sectionHeading="Press Release"
                  text="Explore newspaper highlights, achievements and important media
                  coverage showcasing the growth and success of our school."
                  heading="Media Coverage"
                  className="text-3xl md:text-4xl text-[#003B6D]"
                /> 
              </div>

              {/* Grid */}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {pressReleases.map((item) => (
                  <div
                    key={item.id}
                    className="
                group bg-white rounded-[28px]
                overflow-hidden shadow-md
                hover:shadow-2xl
                transition duration-500
                hover:-translate-y-3
              "
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-[320px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                    w-full h-full object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                      />

                      {/* Overlay */}
                      <div
                        className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#003B6D]/90
                    via-[#003B6D]/20
                    to-transparent
                  "
                      ></div>

                      {/* Category */}
                      <div
                        className="
                    absolute top-5 left-5
                    bg-[#F4C300]
                    text-[#003B6D]
                    px-4 py-2 rounded-full
                    text-xs font-bold tracking-wide
                  "
                      >
                        {item.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <p className="text-sm text-[#F4C300] font-semibold mb-3">
                        {item.date}
                      </p>

                      <h3
                        className="
                    text-2xl font-bold text-[#003B6D]
                    leading-snug mb-4
                    group-hover:text-[#005DAA]
                    transition duration-300
                  "
                      >
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-7 text-sm mb-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Button */}
              {/* <div className="text-center mt-14">
                <button
                  className="
              bg-[#003B6D]
              hover:bg-[#005DAA]
              text-white
              px-8 py-4 rounded-full
              font-semibold
              transition duration-300
              shadow-lg hover:shadow-2xl
              cursor-pointer
            "
                >
                  View All Press Releases
                </button>
              </div> */}
            </div>
          </section>
        </section>
    </>
  )
}

export default Press_Release
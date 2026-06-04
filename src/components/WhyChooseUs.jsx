import {
  RiComputerLine,
  RiBookOpenLine,
  RiBusLine,
} from "react-icons/ri";
import { FaTrophy, FaChalkboardTeacher } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

const features = [
  {
    icon: <RiComputerLine />,
    title: "Digital Learning",
    description:
      "Individual computers per student, smart boards and e-learning resources.",
  },
  {
    icon: <FaTrophy />,
    title: "Academic Excellence",
    description:
      "Outstanding results with personalised attention and structured curriculum.",
  },
  {
    icon: <MdEmojiEvents />,
    title: "Co-Curricular Activities",
    description:
      "Sports, music, art, exhibitions and cultural programs for holistic growth.",
  },
  {
    icon: <RiBookOpenLine />,
    title: "Value-Based Education",
    description:
      "Building ethics, leadership and social responsibility among students.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Faculty",
    description:
      "Highly qualified and experienced teachers dedicated to every child.",
  },
  {
    icon: <RiBusLine />,
    title: "Safe Transport",
    description:
      "Well-managed transport system with safety and convenience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#003B6D] via-[#0B1736] to-[#005DAA]">
      
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F4C300]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-[#F4C300] text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
            Why Choose Us
          </span>
          

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6">
            Excellence in Every Dimension
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-5 text-base">
            We go beyond academics to create well-rounded individuals ready
            for the challenges of tomorrow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white/10
                backdrop-blur-md
                border border-white/10
                rounded-3xl
                p-8
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-4
                hover:rotate-1
                hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)]
              "
            >
              {/* Gold Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#F4C300]/10 to-transparent"></div>

              {/* Icon */}
              <div
                className="
                w-16 h-16
                rounded-2xl
                bg-[#F4C300]
                text-[#003B6D]
                flex items-center justify-center
                text-3xl
                mb-6
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-12
              "
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {item.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-6 h-1 w-12 bg-[#F4C300] rounded-full transition-all duration-500 group-hover:w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
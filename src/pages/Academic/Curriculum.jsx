import Navbar from "../../components/common/Navbar";
import CurriculumCard from "../../components/CurriculumCard";

const Curriculum = () => {
  return (
    <>
      <section>
        <Navbar />
        <section className="relative py-12 overflow-hidden bg-gradient-to-br from-[#003B6D] via-[#0B1736] to-[#005DAA]">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F4C300]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

          <div className="text-center">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-[#F4C300] text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
              Our Curriculum
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-6">
              A Curriculum Designed for Future Success
            </h2>

            <p className="text-gray-300 max-w-4xl mx-auto mt-5 text-base">
              A CBSE-aligned, holistic curriculum blending academic rigour,
              co-curricular enrichment and value education — preparing students
              for a competitive world with strong character and modern skills.
            </p>
          </div>
          <div className="relative rounded-[32px] overflow-hidden mb-10 h-[340px] shadow-xl max-w-7xl mx-auto mt-10">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1400&auto=format&fit=crop"
              alt="Curriculum"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
              <span className="bg-[#F4C300] text-[#0F172A] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit mb-5">
                CBSE Affiliated
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white max-w-xl leading-tight mb-4">
                Beyond Textbooks —<br />
                <span className="text-[#F4C300]">Learning for Life</span>
              </h3>
              <p className="text-gray-300 max-w-lg text-sm leading-7 mb-6">
                Our curriculum goes beyond the syllabus — it nurtures curiosity,
                builds character and equips every student with skills for the
                future.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "CBSE Board",
                  "Class I–X",
                  "3D Smart Learning",
                  "Value Education",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="bg-[#F8FAFC] relative overflow-hidden mb-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#005DAA]/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4C300]/10 rounded-full blur-3xl"></div>
          <CurriculumCard />
        </div>
      </section>
    </>
  );
};

export default Curriculum;

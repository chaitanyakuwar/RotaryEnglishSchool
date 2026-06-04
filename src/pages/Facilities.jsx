import BannerBox from "../components/BannerBox";
import Heading from "../components/common/Heading";
import Navbar from "../components/common/Navbar";
import FacilitiesCard from "../components/FacilitiesCard";

const details ={
    title:"Modern Infrastructure For Better Learning",
    text:"We create an engaging educational environment through smart classrooms, laboratories, sports facilities, and secure campus infrastructure."
}
const Facilities = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="py-4 bg-[#003B6D] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl mt-5">
          <Heading
            sectionHeading="Our Facilities"
            heading="World Class Learning Environment"
            text="Our campus provides modern infrastructure and advanced facilities that support academic excellence and holistic student development."
            className="text-[#FFF] text-3xl md:text-4xl"
          />
        </div>
        <BannerBox Details={details}/>
        <FacilitiesCard className="bg-[#F8FAFC]"/>
        <div className="max-w-7xl mx-auto py-10">
            <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300">
              <h3 className="text-5xl font-bold text-[#005DAA] mb-3">25+</h3>
              <p className="text-gray-600 font-medium">Smart Classrooms</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300">
              <h3 className="text-5xl font-bold text-[#F4C300] mb-3">10+</h3>
              <p className="text-gray-600 font-medium">Modern Laboratories</p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300">
              <h3 className="text-5xl font-bold text-[#0F172A] mb-3">500+</h3>
              <p className="text-gray-600 font-medium">Happy Students</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;

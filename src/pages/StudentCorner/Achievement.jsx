import Achievement_Card from "../../components/common/Achievement_Card";
import Heading from "../../components/common/Heading";
import Navbar from "../../components/common/Navbar";

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
        <Achievement_Card/>
      </section>
    </>
  );
};

export default Achievement;

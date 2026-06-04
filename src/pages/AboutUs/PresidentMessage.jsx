import Message from "../../components/Message";
import president from "../../assets/images/president.jpg";
import Navbar from "../../components/common/Navbar";
import Heading from "../../components/common/Heading";

const PresidentMessage = () => {
  const message = [
    {
      img: president,
      heading:
        "True education inspires students to achieve excellence in life.",
      message:
        "With immense pleasure, I perceive the progress being made by the school to make this institution a centre of academic excellence & cultural force in the truest sense of them and Rotary ideology of Service above self. Here we starve not only to give every student academic excellence & knowledge but to develop true citizen of the country. It has been a quest in life to make high quality education available, accessible & importantly affordable to the vast majority in this rural area since long time. Our goal is to provide the best available education to students with the best infrastructure & faculties to make them love learning, thinking independently & being confident to pursue their dreams & goals, providing firm ground to new generation of true leaders & visionaries in future. Our students have set very high standard in academic excellence & different activities. All this happened due to the committed efforts by the Principal & Staff of the school and enthusiastic support from Managing committee, Rotary family, Parents and Friends of Rotary.",
      signature: "Er. Himanshu G. Shah",
      position: "President",
    },
  ];
  return (
    <>
      <section>
        <Navbar />
        <div className="py-12">
          <Heading
            className="text-3xl md:text-4xl text-[#003B6D]"
            sectionHeading="Our President's Message"
            heading="A Vision for Excellence in Education"
            text="Guiding our students towards academic success, strong values, and holistic development for a brighter future."
          />
        </div>
        <Message messages={message} />
      </section>
    </>
  );
};

export default PresidentMessage;

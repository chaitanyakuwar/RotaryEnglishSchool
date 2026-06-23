import Message from "../../components/Message";
import principal from "../../assets/images/principal-new.jpg";
import Navbar from "../../components/common/Navbar";
import Heading from "../../components/common/Heading";

const PrincipleMessage = () => {
  const message = [
  {
    img: principal,
    heading:
      "Education is the most powerful weapon which you can use to change the world.",
    message:
      "It gives me immense pleasure to be a part of Smt. Mandakini Tongaonkar Rotary English School. Education plays an important role in enabling a person to face real-life situation with adequate knowledge and courage in themselves. The prime objective of our school is to focus majorly on providing a platform to a child so to use their potentials to optimum levels, and commit to develop knowledge, leadership and other professional skills which are vital for the transformation of students into worthy global citizens. We at Smt. Mandakini Tongaonkar Rotary English School provide ample of opportunities to our students to innovate and think critically and lead the learning process. The school has been striving hard to ensure that the education offered is academically challenging, supports culture, social and emotional development of a child. While emphasize a rigorous academic course of study, we recognise and appreciate the values in nurturing the unique interests, talents, and skills of our students through our specially designed co-curricular activities.",
    signature: "Mr. Srutiranjan Barik",
    position: "Principal",
  }
];
  return (
    <>
      <section>
        <Navbar />
        <div className="py-12">
          <Heading
            className="text-3xl md:text-4xl text-[#003B6D]"
            sectionHeading="Principal's Message"
            heading="Message from the Principal"
            text="A message of inspiration, leadership, and commitment towards academic excellence, character building, and the overall development of every student."
          />
        </div>
        <Message messages={message} />
      </section>
    </>
  );
};

export default PrincipleMessage;

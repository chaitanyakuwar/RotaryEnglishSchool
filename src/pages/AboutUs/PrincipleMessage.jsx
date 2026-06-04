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
      "It gives me immense pleasure to welcome you to Rotary English School...",
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

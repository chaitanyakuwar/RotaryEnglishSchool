import { FaQuoteLeft } from "react-icons/fa";

const Message = ({ messages }) => {

  return (
    <section className="bg-gradient-to-b from-[#F8FAFC] to-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {messages.map((message, index) => (
          <div key={index} className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#005DAA]/10 rounded-[40px]"></div>

              <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
                <img
                  src={message.img}
                  alt=""
                  className="w-full h-[550px] object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl font-bold">{message.signature}</h3>

                  <p className="text-[#F4C300] text-lg mt-1 font-medium">
                    {message.position}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="w-16 h-16 rounded-full bg-[#005DAA] flex items-center justify-center shadow-lg mb-8">
                <FaQuoteLeft className="text-white text-2xl" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 leading-snug">
                {message.heading}
              </h2>

              <p className="text-gray-600 leading-relaxed text-base">
                {message.message}
              </p>

              <div className="mt-10 border-l-4 border-[#F4C300] pl-5">
                <h4 className="text-2xl font-bold text-[#0F172A]">
                  {message.signature}
                </h4>

                <p className="text-[#005DAA] font-medium">
                  {message.position}, Rotary English School
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Message;

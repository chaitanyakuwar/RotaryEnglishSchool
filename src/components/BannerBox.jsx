// import Heading from "./common/Heading";

const BannerBox = ({ Details }) => {
  return (
    <>
      {/* Featured Card */}
      <div className="max-w-7xl mx-auto pt-6">
        <div className="relative rounded-[40px] overflow-hidden mb-14 group h-[500px] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1400&auto=format&fit=crop"
            alt="School Facility"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-white">
            <h1 className="text-4xl text-white md:text-6xl font-bold max-w-2xl leading-tight mb-6">
              {Details.title}
            </h1>
            <p className="max-w-xl text-gray-200 leading-6 text-lg mb-6">
              {Details.text}
            </p>
            <button className="bg-white text-[#0F172A] px-8 py-4 rounded-full font-semibold mb-5 hover:bg-[#F4C300] transition duration-300 w-fit cursor-pointer">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerBox;

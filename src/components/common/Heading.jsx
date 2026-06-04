const Heading = ({ className, sectionHeading, heading, text }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className={`uppercase tracking-[3px] font-semibold text-sm mb-4 text-[#F4C300]`}>
            {sectionHeading}
          </p>
          <h2 className={`font-bold mb-4 ${className}`}>
            {heading}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-500 text-base leading-6">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Heading;

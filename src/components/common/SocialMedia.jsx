import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-[#005DAA] hover:bg-[#F4C300] hover:text-[#0B1736] transition duration-300 flex items-center justify-center cursor-pointer">
          <FaFacebookF />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#005DAA] hover:bg-[#F4C300] hover:text-[#0B1736] transition duration-300 flex items-center justify-center cursor-pointer">
          <FaInstagram />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#005DAA] hover:bg-[#F4C300] hover:text-[#0B1736] transition duration-300 flex items-center justify-center cursor-pointer">
          <FaYoutube />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#005DAA] hover:bg-[#F4C300] hover:text-[#0B1736] transition duration-300 flex items-center justify-center cursor-pointer">
          <FaLinkedin />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;

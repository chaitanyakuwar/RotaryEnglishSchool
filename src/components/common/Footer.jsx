import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled, MdEmail } from "react-icons/md";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0B1736] text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
            {/* Logo + About */}
            <div>
              <img
                src="./footer-logo.png"
                alt="School Logo"
                className="w-[100px] mb-2"
              />
              <h1 className="text-[#F4C300] mb-2 text-[15px] md:text-[20px]">About us</h1>

              <p className="text-gray-300 leading-5 text-[13px] md:text-[15px]">
                Rotary English School focuses on academic excellence,
                creativity, leadership and holistic student development.
              </p>
            </div>

            {/* Information */}
            <div>
              <h1 className="text-[15px] md:text-xl font-semibold mb-5 text-[#F4C300]">
                Information
              </h1>

              <ul className="space-y-4 text-gray-300">
                <li className="hover:text-[#F4C300] text-[14px] md:text-[16px] transition duration-300 cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-[#F4C300] text-[14px] md:text-[16px] transition duration-300 cursor-pointer">
                  Gallery
                </li>
                <li className="hover:text-[#F4C300] text-[14px] md:text-[16px] transition duration-300 cursor-pointer">
                  Activity
                </li>
                <li className="hover:text-[#F4C300] text-[14px] md:text-[16px] transition duration-300 cursor-pointer">
                  Facility
                </li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div>
              <h1 className="text-[15px] md:text-xl font-semibold mb-5 text-[#F4C300]">
                Helpful Links
              </h1>

              <ul className="space-y-4 text-gray-300">
                <li className="hover:text-[#F4C300] text-[14px] md:text-[16px] transition duration-300 cursor-pointer">
                  Admission Process
                </li>
                <li className="hover:text-[#F4C300] text-[14px] md:text-[16px] transition duration-300 cursor-pointer">
                  Admission Enquiry
                </li>
                <li className="hover:text-[#F4C300] text-[14px] md:text-[16px] transition duration-300 cursor-pointer">
                  Faculty
                </li>
                <li className="hover:text-[#F4C300] text-[14px] md:text-[16px] transition duration-300 cursor-pointer">
                  Fees Structure
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h1 className="text-[15px] md:text-xl font-semibold mb-5 text-[#F4C300]">
                Contact Us
              </h1>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex gap-4 items-center">
                  <div className="min-w-[40px] h-[40px] rounded-full bg-[#005DAA] flex items-center justify-center">
                    <FaPhoneAlt />
                  </div>

                  <p className="text-gray-300 leading-6 text-[14px] md:text-[16px]">
                    02566-246574 <br />
                    +91 9527084764
                  </p>
                </div>

                {/* Time */}
                <div className="flex gap-4 items-center">
                  <div className="min-w-[40px] h-[40px] rounded-full bg-[#005DAA] flex items-center justify-center">
                    <MdAccessTimeFilled />
                  </div>

                  <p className="text-gray-300 leading-7 text-[14px] md:text-[16px]">
                    Mon-Sat <br />
                    7:00 AM - 5:00 PM
                  </p>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-center">
                  <div className="min-w-[40px] h-[40px] rounded-full bg-[#005DAA] flex items-center justify-center">
                    <MdEmail />
                  </div>

                  <p className="text-gray-300 leading-7 text-[14px] md:text-[16px]">
                    rotaryenglishschool@yahoo.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Rotary English School. All Rights Reserved.
            </p>
            <p>
              <SocialMedia />
            </p>
            <p className="text-gray-400 text-sm">
              Designed & Developed By Your Company
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

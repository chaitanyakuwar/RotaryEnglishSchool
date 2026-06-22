import { Link } from "react-router-dom";
import {
  FaSchool,
  FaBell,
  FaClipboardList,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const quickLinks = [
  {
    id: 1,
    title: "Pre Primary",
    subtitle: "Dondaicha",
    icon: <FaSchool />,
    color: "from-[#003B6D] to-[#005DAA]",
    link: "/pre-primary-dondaicha",
  },
  {
    id: 2,
    title: "Pre Primary",
    subtitle: "Nimgul",
    icon: <FaSchool />,
    color: "from-[#005DAA] to-[#0077CC]",
    link: "/pre-primary-nimgul",
  },
  {
    id: 3,
    title: "Notifications",
    subtitle: "Latest Updates",
    icon: <FaBell />,
    color: "from-[#F4C300] to-[#D8A700]",
    link: "/notification",
  },
  {
    id: 4,
    title: "Admission",
    subtitle: "Enquiry",
    icon: <FaClipboardList />,
    color: "from-[#003B6D] to-[#005DAA]",
    link: "/contact",
  },
];

const FloatingQuickLinks = () => {
  return (
    <div
      className="
      fixed
      right-5
      top-1/2
      -translate-y-1/2
      z-[999]
      hidden
      lg:flex
      flex-col
      gap-4
      "
    >
      {quickLinks.map((item) => (
        <Link
          key={item.id}
          to={item.link}
          className="
          group
          flex
          items-center
          gap-3
          w-[65px]
          hover:w-[280px]
          overflow-hidden
          transition-all
          duration-500
          rounded-2xl
          shadow-xl
          hover:shadow-2xl
          "
        >
          <div
            className={`
            bg-gradient-to-r
            ${item.color}
            flex
            items-center
            w-full
            px-4
            py-4
            rounded-2xl
            `}
          >
            <div
              className="
              text-white
              text-2xl
              flex
              items-center
              justify-center
              min-w-[30px]
              group-hover:rotate-12
              transition
              duration-500
              "
            >
              {item.icon}
            </div>

            <div
              className="
              ml-4
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              whitespace-nowrap
              "
            >
              <h4 className="text-white text-sm font-semibold">
                {item.title}
              </h4>

              <p className="text-white/90 text-xs">
                {item.subtitle}
              </p>
            </div>

            <HiArrowRight
              className="
              ml-auto
              text-white
              text-xl
              opacity-0
              group-hover:opacity-100
              group-hover:translate-x-1
              transition
              duration-500
              "
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FloatingQuickLinks;
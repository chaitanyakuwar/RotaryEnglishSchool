import { FiBell } from "react-icons/fi";

const FloatingBell = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
      fixed
      right-6
      bottom-6
      z-[999]
      w-16
      h-16
      rounded-full
      bg-[#003B6D]
      text-white
      shadow-2xl
      hover:scale-110
      transition-all
      duration-300
      flex
      items-center
      justify-center
      "
    >
      <FiBell className="text-3xl" />

      <span
        className="
        absolute
        -top-1
        -right-1
        bg-red-500
        text-white
        text-xs
        w-6
        h-6
        rounded-full
        flex
        items-center
        justify-center
        animate-pulse
        "
      >
        3
      </span>
    </button>
  );
};

export default FloatingBell;
import { FiBell, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { notifications } from "../../data/notification";

const NotificationPopup = ({ show, onClose }) => {
  const navigate = useNavigate();

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex justify-center items-center p-4">

      <div className="bg-white rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl">

        <div className="bg-gradient-to-r from-[#003B6D] to-[#005DAA] px-6 py-5 flex justify-between items-center">

          <div className="flex items-center gap-3 text-white">
            <FiBell className="text-2xl" />
            <h2 className="font-bold text-xl">
              Latest Notifications
            </h2>
          </div>

          <button onClick={onClose}>
            <FiX className="text-white text-2xl" />
          </button>

        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
          }}
          loop
        >
          {notifications.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="p-8">

                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  NEW
                </span>

                <h3 className="text-2xl font-bold text-[#003B6D] mt-4">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {item.date}
                </p>

                <p className="text-gray-600 leading-7 mt-4">
                  {item.description}
                </p>

                <button
                  onClick={() => navigate("/notification")}
                  className="mt-6 bg-[#003B6D] text-white px-5 py-3 rounded-xl hover:bg-[#005DAA]"
                >
                  Read More
                </button>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default NotificationPopup;
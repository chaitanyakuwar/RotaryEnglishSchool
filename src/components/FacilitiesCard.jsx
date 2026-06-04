import {
  RiComputerLine,
  RiBookOpenLine,
  RiBusLine,
  // RiShieldCheckLine,
  RiFlaskLine,
  RiBasketballLine,
  RiGamepadLine,
  RiMusic2Line,
  RiBuilding2Line,
  RiDropLine,
  RiHandHeartLine,
  RiCalculatorLine,
  RiCameraLensLine,
  RiArrowUpLine,
  RiTvLine,
} from "react-icons/ri";

const FacilitiesCard = () => {
  const facilities = [
    {
      id: 1,
      title: "Smart Classroom",
      category: "Technology",
      shortDesc: "3D Interactive Smart Board with 85,000+ learning objects.",
      description:
        "Digitally empowered smart classrooms with 3D Interactive Smart Boards that create an audio-visual environment. Includes a library of 85,000+ 3D objects covering all subjects and classes for immersive learning.",
      icon: <RiComputerLine />,
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "3D Classroom",
      category: "Technology",
      shortDesc: "Live 3D video experience for deep concept understanding.",
      description:
        "Students experience educational concepts live through immersive 3D videos. Helps teachers explain critical concepts effectively and makes complex topics easy to understand for every student.",
      icon: <RiTvLine />,
      image:
        "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Laboratories",
      category: "Science",
      shortDesc: "Chemistry, Biology, Physics, Maths & Geography labs.",
      description:
        "Well-equipped Chemistry, Biology, Physics, Mathematics and Geography laboratories available for students to conduct practical experiments and deepen their understanding of every subject.",
      icon: <RiFlaskLine />,
      image:
        "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Computer Lab",
      category: "Technology",
      shortDesc: "Advanced N-Computing with individual terminals for all.",
      description:
        "A well-equipped computer lab with advanced N-Computing technology, individual terminals per student, and a touch interactive board. Develops IT skills and helps teachers deliver presentations effectively.",
      icon: <RiCameraLensLine />,
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Creativity Lab",
      category: "Arts & Culture",
      shortDesc: "Painting, music, instruments & creative activities.",
      description:
        "A spacious hall for drawing, painting, wax-clay work, music, dance and performing arts. Students are trained by visiting faculty in musical instruments, singing, karaoke and creative projects beyond traditional art.",
      icon: <RiMusic2Line />,
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "School Library",
      category: "Academic",
      shortDesc: "Books, newspapers & Online Touch Interactive Kiosks.",
      description:
        "Well-stocked with books, newspapers and periodicals for students and teachers. Features Online Touch Interactive Library Kiosks for reading ebooks, world atlas, encyclopedia and English pronunciation tools.",
      icon: <RiBookOpenLine />,
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Playground",
      category: "Sports",
      shortDesc: "Cricket, Football, Hockey, Kho-Kho, Kabaddi & Athletics.",
      description:
        "A vast playground for outdoor games including Cricket, Football, Hockey, Handball, Kho-Kho, Kabaddi and Athletics. Regular mass drills and an Annual Sports Meet every December for all students.",
      icon: <RiBasketballLine />,
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Indoor Games Hall",
      category: "Sports",
      shortDesc: "Chess, Carrom, Table Tennis & Yoga training hall.",
      description:
        "A spacious Indoor Games Hall where students are trained for Chess, Carrom, Table Tennis and Yoga by staff and coaches. Students practice after school hours and on holidays as well.",
      icon: <RiGamepadLine />,
      image:
        "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 9,
      title: "RO Purified Water",
      category: "Health",
      shortDesc: "Safe purified drinking water available for all students.",
      description:
        "A large RO water purification plant ensuring safe drinking water for all students. Since installation, water-borne health problems among students have significantly reduced. Students may carry water back home.",
      icon: <RiDropLine />,
      image:
        "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 10,
      title: "Auditorium",
      category: "Events",
      shortDesc: "High-tech projector & sound system for all events.",
      description:
        "A big multi-purpose hall used for morning assembly, meetings, seminars, films, documentaries and competitions. Equipped with a high-tech projector and sound system for all school events and exhibitions.",
      icon: <RiBuilding2Line />,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 11,
      title: "Transport",
      category: "Transport",
      shortDesc: "Trained drivers, female attendants & safety equipment.",
      description:
        "School buses equipped with fire extinguisher, emergency buzzer, first aid box and speed governor. Trained and experienced drivers with female attendants on every bus ensure student safety at all times.",
      icon: <RiBusLine />,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 12,
      title: "Hand Wash Station",
      category: "Health",
      shortDesc: "Proper hygiene stations with teacher supervision.",
      description:
        "Dedicated hand wash stations promoting hygiene awareness. Teachers observe students before every tiffin break and teach the proper technique of handwashing, creating healthy habits appreciated by parents.",
      icon: <RiHandHeartLine />,
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 13,
      title: "Math Lab",
      category: "Academic",
      shortDesc: "Hands-on mathematical learning with practical tools.",
      description:
        "A dedicated Mathematics laboratory where students explore mathematical concepts through hands-on activities, models and tools — making abstract concepts concrete and easy to understand.",
      icon: <RiCalculatorLine />,
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 14,
      title: "Music Room",
      category: "Arts & Culture",
      shortDesc: "Professional instruments & vocal training for students.",
      description:
        "A dedicated music room with professional-grade instruments for training students in classical, devotional and patriotic music. Regular vocal and instrumental sessions conducted by trained faculty.",
      icon: <RiMusic2Line />,
      image:
        "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 15,
      title: "Lift",
      category: "Infrastructure",
      shortDesc: "Accessible lift facility for all floors of the campus.",
      description:
        "A modern lift facility ensuring easy and accessible movement across all floors of the campus — especially helpful for differently-abled students, staff and visitors.",
      icon: <RiArrowUpLine />,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  return (
    <>
      <div className="max-w-7xl mx-auto py-4">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
          {facilities.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[28px] h-[320px] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#041C3B]/95 via-[#041C3B]/50 to-transparent" />

              {/* Default Content — slides up on hover */}
              <div className="absolute bottom-0 left-0 p-7 transition-all duration-500 group-hover:-bottom-32">
                <p className="text-[#F4C300] uppercase tracking-[3px] text-xs font-semibold mb-2">
                  {item.category}
                </p>
                <h3 className="text-white text-3xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-[15px]">{item.shortDesc}</p>
              </div>

              {/* Hover Content — slides in from bottom */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-full mb-4 border border-white/20 text-white text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FacilitiesCard;

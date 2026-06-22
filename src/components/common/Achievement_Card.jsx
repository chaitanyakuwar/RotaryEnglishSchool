import { useState } from "react";
import {
  RiTrophyLine,
  RiGroupLine,
} from "react-icons/ri";

const achievements = [
  {
    id: 1,
    title: "State Science Exhibition",
    student: "Riya Sharma",
    class: "Class X",
    year: "2024",
    category: "Academic",
    level: "State",
    medal: "gold",
    position: "1st Place",
    event: "Maharashtra State Science Fair",
    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=600&q=80",
    desc: "Outstanding project on solar energy innovation at the Maharashtra State Science Exhibition 2024.",
  },
  {
    id: 2,
    title: "District Cricket Champions",
    student: "School Team",
    class: "Under-17",
    year: "2024",
    category: "Sports",
    level: "District",
    medal: "gold",
    position: "Champions",
    event: "District Cricket Tournament",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
    desc: "Our Under-17 cricket team clinched the District Championship Trophy 2024 with an unbeaten run.",
  },
  {
    id: 3,
    title: "National Math Olympiad",
    student: "Arjun Kulkarni",
    class: "Class IX",
    year: "2024",
    category: "Academic",
    level: "National",
    medal: "silver",
    position: "2nd Rank",
    event: "National Mathematics Olympiad",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    desc: "Secured 2nd rank at the National Mathematics Olympiad, representing Maharashtra with pride.",
  },
  {
    id: 4,
    title: "Zonal Kabaddi Winners",
    student: "School Team",
    class: "Under-14",
    year: "2024",
    category: "Sports",
    level: "Zonal",
    medal: "gold",
    position: "1st Place",
    event: "Zonal Kabaddi Championship",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
    desc: "Under-14 Kabaddi team dominated the Zonal Championship with a thrilling final match victory.",
  },
  {
    id: 5,
    title: "Inter-School Art Competition",
    student: "Anjali Deshmukh",
    class: "Class VIII",
    year: "2024",
    category: "Cultural",
    level: "District",
    medal: "gold",
    position: "Best Artist",
    event: "District Art Exhibition",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
    desc: "Won the 'Best Artist' award at the District Art Exhibition for an extraordinary watercolour painting.",
  },
  {
    id: 6,
    title: "State Quiz Competition",
    student: "Vikram & Neha",
    class: "Class X",
    year: "2023",
    category: "Academic",
    level: "State",
    medal: "bronze",
    position: "3rd Place",
    event: "Maharashtra State Quiz",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    desc: "Represented school brilliantly at the Maharashtra State Quiz Competition, finishing 3rd.",
  },
  {
    id: 7,
    title: "Cultural Dance Performance",
    student: "Dance Group",
    class: "Class VI–VIII",
    year: "2024",
    category: "Cultural",
    level: "State",
    medal: "silver",
    position: "2nd Place",
    event: "State Cultural Fest",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80",
    desc: "Our cultural dance group mesmerised judges with a classical Lavani performance at the State Cultural Fest.",
  },
  {
    id: 8,
    title: "Board Exam Topper",
    student: "Priya Patil",
    class: "Class X",
    year: "2024",
    category: "Academic",
    level: "District",
    medal: "gold",
    position: "District Topper",
    event: "CBSE Board Examination",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80",
    desc: "Achieved 98.4% in CBSE Board Examinations, topping the entire district in the 2024 batch.",
  },
  {
    id: 9,
    title: "Robotics Workshop Winner",
    student: "Tech Club",
    class: "Class VII–IX",
    year: "2023",
    category: "Academic",
    level: "Zonal",
    medal: "gold",
    position: "1st Place",
    event: "Zonal Robotics Competition",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    desc: "School's Tech Club built an innovative line-following robot that won 1st place at the Zonal Robotics Championship.",
  },
  {
    id: 10,
    title: "Swimming Championship",
    student: "Rahul More",
    class: "Class VII",
    year: "2023",
    category: "Sports",
    level: "District",
    medal: "silver",
    position: "2nd Place",
    event: "District Swimming Meet",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80",
    desc: "Secured 2nd place in 100m freestyle at the District Swimming Meet with a personal best timing.",
  },
  {
    id: 11,
    title: "Music Recital Award",
    student: "Sneha Tomar",
    class: "Class IX",
    year: "2023",
    category: "Cultural",
    level: "State",
    medal: "gold",
    position: "Best Vocalist",
    event: "State Music Competition",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&q=80",
    desc: "Awarded 'Best Vocalist' at the State Music Competition for an exceptional classical Hindustani performance.",
  },
  {
    id: 12,
    title: "Athletics — 100m Sprint",
    student: "Dev Nikam",
    class: "Class VIII",
    year: "2023",
    category: "Sports",
    level: "Zonal",
    medal: "bronze",
    position: "3rd Place",
    event: "Zonal Athletics Meet",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
    desc: "Finished 3rd in the 100m sprint event at the Zonal Athletics Meet with a personal best of 11.8 seconds.",
  },
];

const Achievement_Card = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <div className="w-full h-full bg-white">
        <section
          className="py-20 overflow-hidden relative"
          style={{
            background:
              "linear-gradient(160deg,#F8FAFC 0%,#FFF7ED 50%,#F8FAFC 100%)",
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #FCD34D, transparent)",
              transform: "translate(30%,-30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #BFDBFE, transparent)",
              transform: "translate(-30%,30%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* ── Bottom CTA ── */}
            <div
              className="rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg,#0B1F3A 0%,#1A56A0 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="relative">
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: "#F4C300" }}
                >
                  Be a Champion
                </p>
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  The Next Trophy Could Be Yours!
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    maxWidth: "420px",
                  }}
                >
                  Join SMT Rotary English School and unlock your potential in
                  academics, sports and the arts.
                </p>
              </div>
              <div className="relative flex gap-3 flex-wrap flex-shrink-0">
                <button
                  className="px-7 py-3 rounded-xl font-bold text-sm cursor-pointer hover:scale-105 transition-transform"
                  style={{
                    background: "#F4C300",
                    color: "#0B1F3A",
                    boxShadow: "0 4px 20px rgba(244,195,0,0.35)",
                  }}
                >
                  Apply for Admission →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Achievement_Card;

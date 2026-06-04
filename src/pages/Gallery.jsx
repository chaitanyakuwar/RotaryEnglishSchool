import { useState, useEffect, useCallback } from "react";
import {
  RiPlayCircleLine,
  RiCloseLine,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiFullscreenLine,
  RiSearchLine,
  RiGridLine,
  RiLayoutMasonryLine,
  RiExpandDiagonalLine,
} from "react-icons/ri";
import Navbar from "../components/common/Navbar";

const categories = [
  "All",
  "Events",
  "Sports",
  "Science",
  "Arts & Culture",
  "Classrooms",
  "Campus",
];
const items = [
  // Events
  {
    id: 1,
    type: "image",
    cat: "Events",
    title: "Annual Prize Distribution",
    year: "2024",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    type: "image",
    cat: "Events",
    title: "Republic Day Celebration",
    year: "2024",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    span: "",
  },
  {
    id: 3,
    type: "video",
    cat: "Events",
    title: "Annual Day Highlights",
    year: "2024",
    thumb:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    videoId: "dQw4w9WgXcQ",
    span: "",
  },
  {
    id: 4,
    type: "image",
    cat: "Sports",
    title: "Inter-School Cricket Match",
    year: "2024",
    src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    span: "",
  },
  {
    id: 5,
    type: "image",
    cat: "Sports",
    title: "Annual Sports Meet 2024",
    year: "2024",
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
    span: "col-span-2",
  },
  {
    id: 6,
    type: "image",
    cat: "Science",
    title: "Science Exhibition 2024",
    year: "2024",
    src: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=800&q=80",
    span: "",
  },
  {
    id: 7,
    type: "video",
    cat: "Science",
    title: "3D Lab Demonstration",
    year: "2024",
    thumb:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80",
    videoId: "dQw4w9WgXcQ",
    span: "",
  },
  {
    id: 8,
    type: "image",
    cat: "Arts & Culture",
    title: "Cultural Day Performance",
    year: "2024",
    src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    span: "",
  },
  {
    id: 9,
    type: "image",
    cat: "Arts & Culture",
    title: "Art Exhibition",
    year: "2023",
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    span: "",
  },
  {
    id: 10,
    type: "image",
    cat: "Classrooms",
    title: "Smart Classroom Session",
    year: "2024",
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    span: "col-span-2",
  },
  {
    id: 11,
    type: "image",
    cat: "Classrooms",
    title: "Computer Lab Activity",
    year: "2024",
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    span: "",
  },
  {
    id: 12,
    type: "image",
    cat: "Campus",
    title: "School Building",
    year: "2024",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    span: "",
  },
  {
    id: 13,
    type: "image",
    cat: "Campus",
    title: "Library",
    year: "2024",
    src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    span: "",
  },
  {
    id: 14,
    type: "video",
    cat: "Campus",
    title: "Virtual Campus Tour",
    year: "2024",
    thumb:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
    videoId: "dQw4w9WgXcQ",
    span: "",
  },
  {
    id: 15,
    type: "image",
    cat: "Sports",
    title: "Kabaddi Championship",
    year: "2023",
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    span: "",
  },
  {
    id: 16,
    type: "image",
    cat: "Events",
    title: "Teachers Day Celebration",
    year: "2023",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    span: "",
  },
  {
    id: 17,
    type: "image",
    cat: "Arts & Culture",
    title: "Music Concert",
    year: "2023",
    src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80",
    span: "",
  },
  {
    id: 18,
    type: "image",
    cat: "Science",
    title: "Robotics Workshop",
    year: "2023",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    span: "",
  },
];

function Lightbox({ item, all, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  const idx = all.findIndex((i) => i.id === item.id);
  const total = all.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl transition-all cursor-pointer z-10"
        style={{ background: "rgba(255,255,255,0.12)" }}
      >
        <RiCloseLine />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs font-bold text-white/50 tracking-widest uppercase">
        {idx + 1} / {total}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-all cursor-pointer z-10 hover:scale-110"
        style={{ background: "rgba(255,255,255,0.12)" }}
      >
        <RiArrowLeftLine />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-all cursor-pointer z-10 hover:scale-110"
        style={{ background: "rgba(255,255,255,0.12)" }}
      >
        <RiArrowRightLine />
      </button>

      {/* Media */}
      <div
        className="relative max-w-5xl w-full mx-16 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: "0 40px 120px rgba(0,0,0,0.8)" }}
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.title}
            className="w-full max-h-[80vh] object-contain"
            style={{ background: "#111" }}
          />
        ) : (
          <div className="aspect-video bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
              title={item.title}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        )}

        {/* Caption */}
        <div className="px-6 py-4" style={{ background: "rgba(0,0,0,0.8)" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-white/40 text-xs mt-0.5">
                {item.cat} · {item.year}
              </p>
            </div>
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{
                background: item.type === "video" ? "#EF4444" : "#1A56A0",
                color: "white",
              }}
            >
              {item.type === "video" ? "▶ Video" : "📷 Photo"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [layout, setLayout] = useState("masonry"); // masonry | grid
  const [search, setSearch] = useState("");
  const [lightboxItem, setLightboxItem] = useState(null);
  const [hovered, setHovered] = useState(null);

  // Filter
  const filtered = items.filter((item) => {
    const matchCat = activeCategory === "All" || item.cat === activeCategory;
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.cat.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const images = filtered.filter((i) => i.type === "image");
  const videos = filtered.filter((i) => i.type === "video");

  // Lightbox nav
  const openLightbox = (item) => setLightboxItem(item);
  const closeLightbox = useCallback(() => setLightboxItem(null), []);
  const prevItem = useCallback(() => {
    if (!lightboxItem) return;
    const idx = filtered.findIndex((i) => i.id === lightboxItem.id);
    setLightboxItem(filtered[(idx - 1 + filtered.length) % filtered.length]);
  }, [lightboxItem, filtered]);
  const nextItem = useCallback(() => {
    if (!lightboxItem) return;
    const idx = filtered.findIndex((i) => i.id === lightboxItem.id);
    setLightboxItem(filtered[(idx + 1) % filtered.length]);
  }, [lightboxItem, filtered]);
  return (
    <>
      <section>
        <Navbar/>
        <div className="w-full h-full bg-white p-6">
          {lightboxItem && (
            <Lightbox
              item={lightboxItem}
              all={filtered}
              onClose={closeLightbox}
              onPrev={prevItem}
              onNext={nextItem}
            />
          )}
          <section
            className="py-20 overflow-hidden"
            style={{
              background: "#0B1F3A",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* ── Header ── */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-[5px] mb-3"
                    style={{ color: "#F4C300" }}
                  >
                    Our Memories
                  </p>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "clamp(32px,5vw,52px)",
                      fontWeight: 700,
                      color: "white",
                      lineHeight: 1.1,
                    }}
                  >
                    Photo &amp; Video
                    <br />
                    <span style={{ color: "#60A5FA" }}>Gallery</span>
                  </h2>
                  <div className="flex gap-1.5 mt-5">
                    <div
                      className="w-10 h-1 rounded-full"
                      style={{ background: "#1A56A0" }}
                    />
                    <div
                      className="w-3 h-1 rounded-full"
                      style={{ background: "#F4C300" }}
                    />
                    <div
                      className="w-1.5 h-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.2)" }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4">
                  {[
                    {
                      value: `${images.length}+`,
                      label: "Photos",
                      color: "#60A5FA",
                    },
                    {
                      value: `${videos.length}+`,
                      label: "Videos",
                      color: "#F87171",
                    },
                    {
                      value: `${categories.length - 1}`,
                      label: "Categories",
                      color: "#F4C300",
                    },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="text-center px-4 py-3 rounded-2xl"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <p
                        className="text-2xl font-black"
                        style={{ color: s.color }}
                      >
                        {s.value}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Toolbar ── */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
                {/* Search */}
                <div className="relative w-full sm:w-64">
                  <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-base" />
                  <input
                    type="text"
                    placeholder="Search gallery..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none transition"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  />
                </div>

                {/* Layout toggle */}
                <div className="flex gap-2">
                  {[
                    { id: "masonry", icon: <RiLayoutMasonryLine /> },
                    { id: "grid", icon: <RiGridLine /> },
                  ].map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setLayout(v.id)}
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all cursor-pointer"
                      style={{
                        background:
                          layout === v.id
                            ? "#1A56A0"
                            : "rgba(255,255,255,0.07)",
                        color:
                          layout === v.id ? "white" : "rgba(255,255,255,0.4)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {v.icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Category Filter ── */}
              <div className="flex flex-wrap gap-2 mb-10">
                {categories.map((cat) => {
                  const count =
                    cat === "All"
                      ? items.length
                      : items.filter((i) => i.cat === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer"
                      style={{
                        background:
                          activeCategory === cat
                            ? "#F4C300"
                            : "rgba(255,255,255,0.07)",
                        color:
                          activeCategory === cat
                            ? "#0B1F3A"
                            : "rgba(255,255,255,0.55)",
                        border:
                          activeCategory === cat
                            ? "1.5px solid #F4C300"
                            : "1.5px solid rgba(255,255,255,0.1)",
                        transform:
                          activeCategory === cat ? "translateY(-1px)" : "none",
                        boxShadow:
                          activeCategory === cat
                            ? "0 4px 16px rgba(244,195,0,0.3)"
                            : "none",
                      }}
                    >
                      {cat}
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded-full font-black"
                        style={{
                          background:
                            activeCategory === cat
                              ? "rgba(0,0,0,0.15)"
                              : "rgba(255,255,255,0.1)",
                          color:
                            activeCategory === cat
                              ? "#0B1F3A"
                              : "rgba(255,255,255,0.4)",
                        }}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* ── MASONRY LAYOUT ── */}
              {layout === "masonry" && (
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 mb-10">
                  {filtered.map((item) => (
                    <div
                      key={item.id}
                      className="break-inside-avoid mb-4 rounded-2xl overflow-hidden cursor-pointer relative group"
                      style={{
                        boxShadow:
                          hovered === item.id
                            ? "0 20px 60px rgba(0,0,0,0.5)"
                            : "0 4px 20px rgba(0,0,0,0.3)",
                        transform:
                          hovered === item.id ? "scale(1.02)" : "scale(1)",
                        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                      }}
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => openLightbox(item)}
                    >
                      <img
                        src={item.type === "image" ? item.src : item.thumb}
                        alt={item.title}
                        className="w-full object-cover transition-transform duration-500"
                        style={{
                          transform:
                            hovered === item.id ? "scale(1.05)" : "scale(1)",
                        }}
                      />

                      {/* Video play badge */}
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            style={{
                              background: "rgba(239,68,68,0.9)",
                              backdropFilter: "blur(4px)",
                            }}
                          >
                            <RiPlayCircleLine className="text-white text-3xl ml-0.5" />
                          </div>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 flex flex-col justify-end p-4 transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(11,31,58,0.92) 0%, rgba(11,31,58,0.2) 50%, transparent 100%)",
                          opacity: hovered === item.id ? 1 : 0,
                        }}
                      >
                        <p className="text-white text-sm font-semibold leading-tight">
                          {item.title}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-white/50 text-xs">
                            {item.cat} · {item.year}
                          </p>
                          <RiExpandDiagonalLine className="text-white/60 text-sm" />
                        </div>
                      </div>

                      {/* Type badge */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span
                          className="text-[10px] font-black px-2 py-1 rounded-full"
                          style={{
                            background:
                              item.type === "video"
                                ? "rgba(239,68,68,0.9)"
                                : "rgba(26,86,160,0.9)",
                            color: "white",
                          }}
                        >
                          {item.type === "video" ? "▶ VIDEO" : "📷"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ── GRID LAYOUT ── */}
              {layout === "grid" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
                  {filtered.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl overflow-hidden cursor-pointer relative group aspect-square"
                      style={{
                        boxShadow:
                          hovered === item.id
                            ? "0 16px 48px rgba(0,0,0,0.5)"
                            : "0 4px 16px rgba(0,0,0,0.3)",
                        transform:
                          hovered === item.id ? "scale(1.03)" : "scale(1)",
                        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                      }}
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => openLightbox(item)}
                    >
                      <img
                        src={item.type === "image" ? item.src : item.thumb}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                        style={{
                          transform:
                            hovered === item.id ? "scale(1.08)" : "scale(1)",
                        }}
                      />

                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                            style={{ background: "rgba(239,68,68,0.9)" }}
                          >
                            <RiPlayCircleLine className="text-white text-2xl ml-0.5" />
                          </div>
                        </div>
                      )}

                      <div
                        className="absolute inset-0 flex flex-col justify-end p-3 transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(11,31,58,0.95) 0%, transparent 60%)",
                          opacity: hovered === item.id ? 1 : 0,
                        }}
                      >
                        <p className="text-white text-xs font-semibold leading-tight line-clamp-2">
                          {item.title}
                        </p>
                        <p className="text-white/40 text-[10px] mt-0.5">
                          {item.cat}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* No results */}
              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-5xl mb-4">🔍</p>
                  <p className="text-white/50 font-semibold">
                    No items found for "{search}"
                  </p>
                </div>
              )}

              {/* ── Videos Section ── */}
              {activeCategory === "All" && (
                <div
                  className="mt-6 pt-10 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "#EF4444" }}
                    >
                      <RiPlayCircleLine className="text-white" />
                    </div>
                    <h3
                      className="text-white font-bold text-lg"
                      style={{ fontFamily: "'Playfair Display',serif" }}
                    >
                      Featured Videos
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items
                      .filter((i) => i.type === "video")
                      .map((video) => (
                        <div
                          key={video.id}
                          className="rounded-2xl overflow-hidden cursor-pointer group"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateY(-4px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                          onClick={() => openLightbox(video)}
                        >
                          <div className="relative h-44 overflow-hidden">
                            <img
                              src={video.thumb}
                              alt={video.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div
                              className="absolute inset-0 flex items-center justify-center"
                              style={{ background: "rgba(0,0,0,0.3)" }}
                            >
                              <div
                                className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                                style={{
                                  background: "rgba(239,68,68,0.95)",
                                  boxShadow: "0 8px 32px rgba(239,68,68,0.5)",
                                }}
                              >
                                <RiPlayCircleLine className="text-white text-3xl ml-0.5" />
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-white text-sm font-semibold mb-1">
                              {video.title}
                            </p>
                            <div className="flex items-center justify-between">
                              <p className="text-white/40 text-xs">
                                {video.cat}
                              </p>
                              <span
                                className="text-xs font-bold px-2 py-0.5 rounded-full"
                                style={{
                                  background: "rgba(239,68,68,0.2)",
                                  color: "#FCA5A5",
                                }}
                              >
                                {video.year}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Gallery;

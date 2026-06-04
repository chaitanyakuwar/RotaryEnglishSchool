import { useState } from "react";
import {
  RiDownloadLine,
  RiPhoneLine,
  RiInformationLine,
  RiCheckLine,
} from "react-icons/ri";
import Navbar from "../../components/common/Navbar";

const feesData = [
  {
    sr: 1,
    std: "Class I",
    stdShort: "I",
    admission: "1000 + 500",
    totalFees: 26500,
    inst1: 15900,
    inst1Date: "30-06-2025",
    inst2: 10600,
    inst2Date: "15-12-2025",
    concession: { boys: 1000, girls: 1500 },
    onetime: { boys: 25500, girls: 25000 },
    color: "#1A56A0",
    light: "#E6F1FB",
    accent: "#60A5FA",
    isSpecial: false,
  },
  {
    sr: 2,
    std: "Class II – IV",
    stdShort: "II–IV",
    admission: "1000 + 500",
    totalFees: 29200,
    inst1: 17500,
    inst1Date: "30-06-2025",
    inst2: 11700,
    inst2Date: "15-12-2025",
    concession: { boys: 1200, girls: 1700 },
    onetime: { boys: 28000, girls: 27500 },
    color: "#065F46",
    light: "#ECFDF5",
    accent: "#34D399",
    isSpecial: false,
  },
  {
    sr: 3,
    std: "Class V – VII",
    stdShort: "V–VII",
    admission: "1000 + 500",
    totalFees: 32500,
    inst1: 19500,
    inst1Date: "30-06-2025",
    inst2: 13000,
    inst2Date: "15-12-2025",
    concession: { boys: 1300, girls: 1800 },
    onetime: { boys: 31200, girls: 30700 },
    color: "#7C2D12",
    light: "#FFF7ED",
    accent: "#FB923C",
    isSpecial: false,
  },
  {
    sr: 4,
    std: "Class VIII – X",
    stdShort: "VIII–X",
    admission: "1000 + 500",
    totalFees: 35000,
    inst1: 21000,
    inst1Date: "30-06-2025",
    inst2: 14000,
    inst2Date: "15-12-2025",
    concession: { boys: 1500, girls: 2000 },
    onetime: { boys: 33500, girls: 33000 },
    color: "#312E81",
    light: "#EEF2FF",
    accent: "#A5B4FC",
    isSpecial: false,
  },
  {
    sr: 5,
    std: "Class XI",
    stdShort: "XI",
    admission: "10,000",
    totalFees: 50000,
    inst1: 30000,
    inst1Date: "30-06-2025",
    inst2: 20000,
    inst2Date: "15-12-2025",
    concession: { boys: null, girls: null },
    onetime: { boys: null, girls: null },
    color: "#991B1B",
    light: "#FEF2F2",
    accent: "#FCA5A5",
    isSpecial: true,
  },
];

const notes = [
  "For New Admission & Form Fees Rs. 1500/- (Non Refundable).",
  "For Class I to X, concession for one-time payment of fees will be available if fees is paid before 30th June 2025.",
  "Last date of deposit of Fees: 1st Installment – 30.06.2025 and 2nd Installment – 15.12.2025.",
  "Late fees will be applicable after the due dates.",
];

function fmt(n) {
  if (n === null || n === undefined) return "—";
  if (typeof n === "string") return n;
  return `₹${n.toLocaleString("en-IN")}`;
}

const FeesStructure = () => {
  const [selected, setSelected] = useState(0);
  const current = feesData[selected];

  return (
    <>
      <section>
        <Navbar />
        <div className="w-full h-full bg-white">
          <section
            className="py-20 overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg,#F8FAFC 0%,#EFF6FF 60%,#F8FAFC 100%)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            <div className="max-w-6xl mx-auto px-4">
              {/* ── Header ── */}
              <div className="text-center mb-14">
                <p
                  className="text-xs font-bold uppercase tracking-[5px] mb-3"
                  style={{ color: "#F4C300" }}
                >
                  Admissions
                </p>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(30px,5vw,46px)",
                    fontWeight: 700,
                    color: "#0B1F3A",
                    lineHeight: 1.15,
                  }}
                >
                  Fees Structure
                  <span
                    className="ml-3 inline-block text-base font-semibold px-3 py-1 rounded-full align-middle"
                    style={{
                      background: "#F4C300",
                      color: "#0B1F3A",
                      fontFamily: "'DM Sans',sans-serif",
                      verticalAlign: "middle",
                    }}
                  >
                    2025–26
                  </span>
                </h2>
                <p className="text-gray-500 text-base mt-3">
                  Smt. Mandakini Tongaonkar Rotary English School, Dondaicha
                </p>
                <div className="flex justify-center gap-1.5 mt-5">
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
                    style={{ background: "#CBD5E1" }}
                  />
                </div>
              </div>

              {/* ── Class Selector ── */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {feesData.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className="px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-300 cursor-pointer"
                    style={{
                      background: selected === i ? f.color : "white",
                      color: selected === i ? "white" : "#64748B",
                      border:
                        selected === i
                          ? `1.5px solid ${f.color}`
                          : "1.5px solid #E2E8F0",
                      boxShadow:
                        selected === i ? `0 6px 24px ${f.color}33` : "none",
                      transform: selected === i ? "translateY(-2px)" : "none",
                    }}
                  >
                    <span
                      className={`font-bold block text-sm ${f.isSpecial ? "text-red-400" : ""}`}
                      style={{
                        color:
                          selected === i
                            ? f.isSpecial
                              ? "#FCA5A5"
                              : "white"
                            : f.isSpecial
                              ? "#991B1B"
                              : "#0F172A",
                      }}
                    >
                      {f.stdShort}
                    </span>
                    <span className="text-[10px] block opacity-70 mt-0.5">
                      {f.std}
                    </span>
                  </button>
                ))}
              </div>

              {/* ── Main Detail Card ── */}
              <div
                className="rounded-3xl overflow-hidden mb-6"
                style={{
                  boxShadow: `0 20px 60px ${current.color}18`,
                  border: `1px solid ${current.light}`,
                }}
              >
                {/* Header stripe */}
                <div
                  className="px-8 py-6 flex flex-wrap items-center justify-between gap-4"
                  style={{ background: current.color }}
                >
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: current.accent }}
                    >
                      {current.std}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "white",
                      }}
                    >
                      Fee Details — Academic Year 2025–26
                    </h3>
                  </div>
                  <div className="text-right">
                    <p
                      className="text-xs mb-1"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      Total Annual Fees
                    </p>
                    <p
                      style={{
                        fontSize: "32px",
                        fontWeight: 900,
                        color: current.accent,
                        lineHeight: 1,
                      }}
                    >
                      {fmt(current.totalFees)}
                    </p>
                  </div>
                </div>

                {/* Fee rows */}
                <div className="bg-white">
                  {/* Admission */}
                  <div className="flex items-center justify-between px-8 py-4 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">📋</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Admission + Form Fee
                        </p>
                        <p className="text-xs text-gray-400">
                          New Students Only (Non-Refundable)
                        </p>
                      </div>
                    </div>
                    <span
                      className="font-bold text-sm"
                      style={{ color: current.color }}
                    >
                      ₹{current.admission}
                    </span>
                  </div>

                  {/* Installment 1 */}
                  <div className="flex items-center justify-between px-8 py-4 border-b border-gray-50 bg-gray-50/40">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">💳</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          1st Installment
                        </p>
                        <p className="text-xs text-gray-400">
                          Due by {current.inst1Date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className="font-bold text-sm"
                        style={{ color: current.color }}
                      >
                        {fmt(current.inst1)}
                      </p>
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">
                        On-time
                      </span>
                    </div>
                  </div>

                  {/* Installment 2 */}
                  <div className="flex items-center justify-between px-8 py-4 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">💳</span>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          2nd Installment
                        </p>
                        <p className="text-xs text-gray-400">
                          Due by {current.inst2Date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className="font-bold text-sm"
                        style={{ color: current.color }}
                      >
                        {fmt(current.inst2)}
                      </p>
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">
                        On-time
                      </span>
                    </div>
                  </div>

                  {/* Concession + Onetime — only non-special */}
                  {!current.isSpecial && (
                    <>
                      {/* Concession */}
                      <div className="flex items-center justify-between px-8 py-4 border-b border-gray-50 bg-gray-50/40">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🎁</span>
                          <div>
                            <p className="text-sm font-semibold text-gray-800">
                              Concession (One-time Payment)
                            </p>
                            <p className="text-xs text-gray-400">
                              Pay before 30 June 2025
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4 text-right">
                          <div>
                            <p className="text-[10px] text-gray-400 mb-0.5">
                              Boys
                            </p>
                            <p className="font-bold text-sm text-[#1A56A0]">
                              ₹
                              {current.concession.boys?.toLocaleString("en-IN")}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 mb-0.5">
                              Girls
                            </p>
                            <p className="font-bold text-sm text-pink-600">
                              ₹
                              {current.concession.girls?.toLocaleString(
                                "en-IN",
                              )}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* One-time fees */}
                      <div className="flex items-center justify-between px-8 py-4 border-b border-gray-50">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">⚡</span>
                          <div>
                            <p className="text-sm font-semibold text-gray-800">
                              One-time Fee (After Concession)
                            </p>
                            <p className="text-xs text-gray-400">
                              If paid before 30th June 2025
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-4 text-right">
                          <div>
                            <p className="text-[10px] text-gray-400 mb-0.5">
                              Boys
                            </p>
                            <p className="font-bold text-sm text-[#1A56A0]">
                              ₹{current.onetime.boys?.toLocaleString("en-IN")}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 mb-0.5">
                              Girls
                            </p>
                            <p className="font-bold text-sm text-pink-600">
                              ₹{current.onetime.girls?.toLocaleString("en-IN")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Total */}
                  <div
                    className="flex items-center justify-between px-8 py-5"
                    style={{ background: current.light }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">💰</span>
                      <p className="font-bold text-gray-800">
                        Total Annual Fees
                      </p>
                    </div>
                    <p
                      className="text-2xl font-black"
                      style={{ color: current.color }}
                    >
                      {fmt(current.totalFees)}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Full Table (All Classes) ── */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-6">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h4 className="font-bold text-gray-800">
                    All Classes — Complete Fee Table
                  </h4>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: "#F4C300", color: "#0B1F3A" }}
                  >
                    2025–26
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[700px]">
                    <thead>
                      <tr className="bg-[#0B1F3A]">
                        <th className="px-4 py-3 text-left text-white text-xs font-bold uppercase tracking-wider">
                          Sr.
                        </th>
                        <th className="px-4 py-3 text-left text-white text-xs font-bold uppercase tracking-wider">
                          Std
                        </th>
                        <th className="px-4 py-3 text-center text-white text-xs font-bold uppercase tracking-wider">
                          Adm + Form Fee
                          <br />
                          <span className="font-normal opacity-60 normal-case">
                            (New Students)
                          </span>
                        </th>
                        <th className="px-4 py-3 text-center text-white text-xs font-bold uppercase tracking-wider">
                          Total Fees
                        </th>
                        <th className="px-4 py-3 text-center text-white text-xs font-bold uppercase tracking-wider">
                          1st Inst.
                          <br />
                          <span className="font-normal opacity-60 normal-case">
                            by 30-06-2025
                          </span>
                        </th>
                        <th className="px-4 py-3 text-center text-white text-xs font-bold uppercase tracking-wider">
                          2nd Inst.
                          <br />
                          <span className="font-normal opacity-60 normal-case">
                            by 15-12-2025
                          </span>
                        </th>
                        <th className="px-4 py-3 text-center text-white text-xs font-bold uppercase tracking-wider">
                          Concession
                          <br />
                          <span className="font-normal opacity-60 normal-case">
                            Boys / Girls
                          </span>
                        </th>
                        <th className="px-4 py-3 text-center text-white text-xs font-bold uppercase tracking-wider">
                          One-time Fee
                          <br />
                          <span className="font-normal opacity-60 normal-case">
                            Boys / Girls
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {feesData.map((f, i) => (
                        <tr
                          key={i}
                          onClick={() => setSelected(i)}
                          className="cursor-pointer transition-colors duration-150"
                          style={{
                            background:
                              selected === i
                                ? f.light
                                : i % 2 === 0
                                  ? "white"
                                  : "#FAFAFA",
                          }}
                        >
                          <td className="px-4 py-3.5 text-gray-400 font-medium">
                            {f.sr}
                          </td>
                          <td className="px-4 py-3.5">
                            <span
                              className="font-bold text-xs px-2.5 py-1 rounded-full"
                              style={{
                                background: f.isSpecial ? "#FEE2E2" : f.light,
                                color: f.color,
                              }}
                            >
                              {f.stdShort}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-center font-medium text-gray-600">
                            ₹{f.admission}
                          </td>
                          <td
                            className="px-4 py-3.5 text-center font-black text-base"
                            style={{ color: f.color }}
                          >
                            {fmt(f.totalFees)}
                          </td>
                          <td className="px-4 py-3.5 text-center font-semibold text-emerald-700">
                            {fmt(f.inst1)}
                          </td>
                          <td className="px-4 py-3.5 text-center font-semibold text-blue-700">
                            {fmt(f.inst2)}
                          </td>
                          <td className="px-4 py-3.5 text-center text-xs">
                            {f.concession.boys !== null ? (
                              <span className="text-gray-600">
                                <span className="text-[#1A56A0] font-bold">
                                  ₹{f.concession.boys.toLocaleString("en-IN")}
                                </span>
                                {" / "}
                                <span className="text-pink-600 font-bold">
                                  ₹{f.concession.girls.toLocaleString("en-IN")}
                                </span>
                              </span>
                            ) : (
                              <span className="text-gray-400">—</span>
                            )}
                          </td>
                          <td className="px-4 py-3.5 text-center text-xs">
                            {f.onetime.boys !== null ? (
                              <span className="text-gray-600">
                                <span className="text-[#1A56A0] font-bold">
                                  ₹{f.onetime.boys.toLocaleString("en-IN")}
                                </span>
                                {" / "}
                                <span className="text-pink-600 font-bold">
                                  ₹{f.onetime.girls.toLocaleString("en-IN")}
                                </span>
                              </span>
                            ) : (
                              <span className="text-gray-400">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Notes ── */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl px-6 py-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <RiInformationLine className="text-amber-500 text-xl flex-shrink-0" />
                  <p className="font-bold text-amber-800 text-sm">
                    Important Notes
                  </p>
                </div>
                <ul className="space-y-2">
                  {notes.map((note, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-amber-700"
                    >
                      <RiCheckLine className="text-amber-500 flex-shrink-0 mt-0.5" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Bottom bar ── */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <RiPhoneLine className="text-[#1A56A0] text-xl flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400">
                      Fee related enquiries
                    </p>
                    <p className="font-bold text-sm text-[#0B1F3A]">
                      02586-246574 / +91 9527084764
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition cursor-pointer"
                    style={{ background: "#0B1F3A", color: "white" }}
                  >
                    <RiDownloadLine /> Download Fee PDF
                  </button>
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition cursor-pointer hover:bg-gray-50"
                    style={{ border: "1.5px solid #E2E8F0", color: "#0B1F3A" }}
                  >
                    Apply Now →
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default FeesStructure;

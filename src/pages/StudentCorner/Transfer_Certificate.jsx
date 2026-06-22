import Heading from "../../components/common/Heading";
import Navbar from "../../components/common/Navbar";
import TranferCerticate from "../../assets/images/TC.png";
import {
  RiFileTextLine,
  RiDownloadLine,
  RiCheckboxCircleLine,
  RiTimeLine,
  RiPhoneLine,
  RiMailLine,
  RiInformationLine,
  RiArrowRightLine,
  RiPrinterLine,
  RiShieldCheckLine,
  RiCalendarLine,
  RiIdCardLine,
} from "react-icons/ri";

const steps = [
  {
    step: "01",
    title: "Submit Application",
    desc: "Visit the school office and submit a written application for TC along with student's details.",
    icon: <RiFileTextLine />,
    color: "#1A56A0",
  },
  {
    step: "02",
    title: "No Dues Clearance",
    desc: "Ensure all fees are cleared and library books / school property returned before applying.",
    icon: <RiCheckboxCircleLine />,
    color: "#065F46",
  },
  {
    step: "03",
    title: "Verification",
    desc: "School office verifies student records, attendance, and academic details from the register.",
    icon: <RiShieldCheckLine />,
    color: "#7C2D12",
  },
  {
    step: "04",
    title: "Collect TC",
    desc: "TC is issued within 7 working days. Collect from office with a valid ID proof.",
    icon: <RiIdCardLine />,
    color: "#312E81",
  },
];

const docs = [
  "Written application from parent / guardian",
  "Previous year's mark sheet / report card",
  "School fee clearance receipt",
  "Library card / No dues certificate",
  "Original admission receipt",
  "Parent's ID proof (Aadhaar / PAN)",
];

const tcFields = [
  "Student's Full Name",
  "Mother's Name",
  "Father's / Guardian's Name",
  "Date of Birth (in words & figures)",
  "Nationality & Religion",
  "Caste / Category",
  "Date of Admission & Class at Entry",
  "Class in which studying at the time of leaving",
  "Academic Progress (Satisfactory / Good / Excellent)",
  "Conduct & Character",
  "Date of Last Attendance",
  "Reason for Leaving",
  "Remarks (if any)",
];

const Tc = [{ image: TranferCerticate, pdf: TranferCerticate }];
const Transfer_Certificate = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="py-4 bg-[#003B6D] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl my-5">
          <Heading
            sectionHeading="Student Corner"
            heading="Transfer Certificate"
            text="A Transfer Certificate (TC) is issued to students leaving the school. View the sample format and apply online below."
            className="text-[#FFF] text-3xl md:text-4xl"
          />
        </div>
        <section
          className="py-20 overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg,#F8FAFC 0%,#EFF6FF 60%,#F8FAFC 100%)",
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            {/* ── Top 2-col layout ── */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* LEFT — TC Sample Preview */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <RiFileTextLine className="text-[#1A56A0] text-xl" />
                  <h3 className="font-bold text-[#0B1F3A] text-base">
                    Sample Certificate
                  </h3>
                </div>
                <div
                  className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg cursor-pointer group relative"
                  style={{ background: "white" }}
                >
                  {Tc.map((t, i) => (
                    <div key={i}>
                      <div className="p-6">
                        <img src={t.TranferCerticate} alt="" />
                      </div>
                      <div>
                        <button className="w-full px-3 py-4">
                          <a href={t.TranferCerticate}>Download Sample TC</a>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Download + Print buttons */}
                <div className="flex gap-3 mt-4">
                  <button
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition cursor-pointer hover:opacity-90"
                    style={{ background: "#0B1F3A", color: "white" }}
                  >
                    <RiDownloadLine /> Download Sample PDF
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm border transition cursor-pointer hover:bg-gray-50"
                    style={{
                      border: "1.5px solid #E2E8F0",
                      color: "#0B1F3A",
                    }}
                  >
                    <RiPrinterLine />
                  </button>
                </div>
              </div>

              {/* RIGHT — Info Cards */}
              <div className="space-y-5">
                {/* Time info */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "#E6F1FB" }}
                    >
                      <RiTimeLine className="text-[#1A56A0] text-lg" />
                    </div>
                    <h4 className="font-bold text-[#0B1F3A] text-sm">
                      Processing Time
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Application to TC", value: "7 Working Days" },
                      { label: "Office Hours", value: "Mon – Sat" },
                      { label: "Time", value: "9:00 AM – 1:00 PM" },
                      { label: "Fee", value: "No Charges" },
                    ].map((s, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-3"
                        style={{ background: "#F8FAFC" }}
                      >
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-0.5">
                          {s.label}
                        </p>
                        <p className="text-sm font-bold text-[#0B1F3A]">
                          {s.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Required documents */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "#ECFDF5" }}
                    >
                      <RiCheckboxCircleLine className="text-emerald-600 text-lg" />
                    </div>
                    <h4 className="font-bold text-[#0B1F3A] text-sm">
                      Required Documents
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {docs.map((d, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-gray-600"
                      >
                        <RiArrowRightLine className="text-[#1A56A0] flex-shrink-0 mt-0.5 text-base" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: "#0B1F3A" }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-3"
                    style={{ color: "#F4C300" }}
                  >
                    Need Help?
                  </p>
                  <div className="space-y-2">
                    {[
                      {
                        icon: <RiPhoneLine />,
                        val: "02566-246574 / +91 9527084764",
                      },
                      {
                        icon: <RiMailLine />,
                        val: "rotaryenglishschool@yahoo.in",
                      },
                      {
                        icon: <RiCalendarLine />,
                        val: "Mon – Sat, 9:00 AM – 1:00 PM",
                      },
                    ].map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-sm"
                        style={{ color: "rgba(255,255,255,0.75)" }}
                      >
                        <span style={{ color: "#60A5FA" }}>{c.icon}</span>
                        {c.val}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Process Steps ── */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-10">
              <h3
                className="font-bold text-[#0B1F3A] text-lg mb-6 text-center"
                style={{ fontFamily: "'Playfair Display',serif" }}
              >
                How to Apply for TC
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {steps.map((s, i) => (
                  <div key={i} className="relative">
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div
                        className="hidden lg:block absolute top-8 left-full w-full h-0.5 -translate-y-1/2 z-0"
                        style={{
                          background:
                            "linear-gradient(90deg, #E2E8F0, #CBD5E1)",
                          width: "calc(100% - 2rem)",
                          left: "calc(50% + 1.5rem)",
                        }}
                      />
                    )}
                    <div className="relative z-10 text-center">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-3 shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${s.color}, ${s.color}bb)`,
                        }}
                      >
                        {s.icon}
                      </div>
                      <span
                        className="text-xs font-black tracking-wider"
                        style={{ color: s.color }}
                      >
                        STEP {s.step}
                      </span>
                      <h4 className="font-bold text-[#0B1F3A] text-sm mt-1 mb-2">
                        {s.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── TC Fields on Certificate ── */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#E6F1FB" }}
                >
                  <RiIdCardLine className="text-[#1A56A0] text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1F3A] text-base">
                    Fields Mentioned in TC
                  </h3>
                  <p className="text-xs text-gray-400">
                    All fields as per CBSE norms
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {tcFields.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 py-2 px-3 rounded-xl"
                    style={{ background: "#F8FAFC" }}
                  >
                    <span className="text-xs font-black text-gray-300 w-5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-medium text-gray-700">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* ── Important Note ── */}
            <div className="flex gap-3 items-start bg-blue-50 border border-blue-100 rounded-2xl px-6 py-5">
              <RiInformationLine className="text-[#1A56A0] text-xl flex-shrink-0 mt-0.5" />
              <div className="text-sm text-[#1A56A0] leading-relaxed">
                <p className="font-bold mb-1">Important Notes</p>
                <ul className="space-y-1 text-blue-700">
                  <li>• TC once issued will not be reissued. Keep it safe.</li>
                  <li>
                    • Duplicate TC can be issued only in case of loss with a
                    formal written application and applicable charges.
                  </li>
                  <li>
                    • TC is mandatory for admission in any other CBSE school.
                  </li>
                  <li>
                    • Students with pending dues / library books will not be
                    issued TC.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Transfer_Certificate;

import Heading from "../../components/common/Heading";
import Navbar from "../../components/common/Navbar";
import ReportCard from "../../components/ReportCard";

const Annual_Report = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="my-10">
          <Heading
            className="text-3xl md:text-4xl"
            text="Year-wise academic reports for all classes — download and stay informed about our school's progress, achievements"
            heading="Annual Reports"
            sectionHeading="Reports & Publications"
          />
        </div>
        <ReportCard />
      </section>
    </>
  );
};

export default Annual_Report;

import Committee from "../../components/Committee";
import Heading from "../../components/common/Heading";
import Navbar from "../../components/common/Navbar";

const ManagementCommittee = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="py-12">
          <Heading
          className="text-[#0B1736] text-3xl md:text-4xl"
          sectionHeading="School Management"
          heading="Management Committee"
          text="Meet the dedicated members of the SMC who guide and govern our school towards excellence in education and administration."
        />
        </div>
        <Committee />
      </section>
    </>
  );
};

export default ManagementCommittee;

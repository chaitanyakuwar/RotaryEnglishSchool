import Calendar from "../../components/Calendar"
import Navbar from "../../components/common/Navbar"


const AcademicCalendar = () => {
  return (
    <>
        <section>
            <Navbar />
            <div className="pb-6">
                <Calendar />
            </div>
        </section>
    </>
  )
}

export default AcademicCalendar
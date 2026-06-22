
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs/AboutUs"
import Facilities from "../pages/Facilities"
import Message from "../components/Message"
import PrincipleMessage from "../pages/AboutUs/PrincipleMessage"
import PresidentMessage from "../pages/AboutUs/PresidentMessage"
import ManagementCommittee from "../pages/AboutUs/ManagementCommittee"
import AcademicCalendar from "../pages/Academic/AcademicCalendar"
import ClasswiseTextbookDetails from "../pages/Academic/ClasswiseTextbookDetails"
import ParentTeacherAssociation from "../pages/Academic/ParentTeacherAssociation"
import StudentStrength from "../pages/Academic/StudentStrength"
import Curriculum from "../pages/Academic/Curriculum"
import FeesStructure from "../pages/Academic/FeesStructure"
import Achievement from "../pages/StudentCorner/Achievement"
import Alumni from "../pages/StudentCorner/Alumni"
import Annual_Report from "../pages/StudentCorner/Annual_Report"
import Transfer_Certificate from "../pages/StudentCorner/Transfer_Certificate"
import Press_Release from "../pages/StudentCorner/Press_Release"
import MandatoryDisclosureDetails from "../pages/StudentCorner/MandatoryDisclosureDetails"
import Contact from "../pages/Contact"
import Gallery from "../pages/Gallery"
import Activities from "../pages/Activities"
import Admission from "../pages/Admission"
import NotificationPage from "../pages/NotificationPage"
import PrePrimaryDondaicha from "../pages/PrePrimaryDondaicha"
import PrePrimaryNimgul from "../pages/PrePrimaryNimgul"

const AppRoutes = () => {
  
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/message/:slug" element={<Message/>} />
            <Route path="/president-message" element={<PresidentMessage/>}/>
            <Route path="/principal-message" element={<PrincipleMessage/>}/>
            <Route path="/management-committee" element={<ManagementCommittee/>}/>

            {/* Activities */}
            <Route path="/activities" element={<Activities/>}/>

            {/* Academic Calendar */}
            <Route path="/academicCalendar" element={<AcademicCalendar/>}/>
            <Route path="/classwise-textbooks" element={<ClasswiseTextbookDetails/>}/>
            <Route path="/student-strength" element={<StudentStrength/>}/>
            <Route path="/parentTeacherAssociation" element={<ParentTeacherAssociation/>}/>
            <Route path="/curriculum" element={<Curriculum/>}/>
            <Route path="/fees-structure" element={<FeesStructure/>} />

            {/* Facilities */}
            <Route path="/facilities" element={<Facilities/>}/>

            {/* Student Corner */}
            <Route path="/achievement" element={<Achievement/>} />
            <Route path="/alumni" element={<Alumni/>} />
            <Route path="/annual-reports" element={<Annual_Report/>}/>
            <Route path="/transfer-certificate" element={<Transfer_Certificate/>}/>
            <Route path="/press-release" element={<Press_Release/>}/>
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosureDetails/>}/>

            <Route path="/gallery" element={<Gallery/>}/>

            <Route path="/contact" element={<Contact/>}/>

            {/* Admission */}
            <Route path="/admission" element={<Admission/>}/>

            {/* Notification */}
            <Route path="/notification" element={<NotificationPage/>}/>

            {/* Pre Primary */}
            <Route path="/pre-primary-dondaicha" element={<PrePrimaryDondaicha/>}/>
            <Route path="/pre-primary-nimgul" element={<PrePrimaryNimgul/>}/>
        </Routes>
    </>
  )
}

export default AppRoutes
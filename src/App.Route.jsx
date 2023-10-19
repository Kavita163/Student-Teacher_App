import { Routes, Route } from "react-router-dom";
import { StudentLogin } from "./components/student/student-login/student-login.component";
//import { StudentRegistration } from "./components/student/student-registration/student-registration.component";
import { HomePage } from "./components/home/home.component";
import { CourseDetails } from "./components/home/course/course.component";
import { RegistrationDetails } from "./components/registration/registration.component";
import { StudentDetailsView } from "./components/admin-trainer/trainer-approve/trainer/trainer-approve.component";
import { TrainerDetailsForm } from "./components/admin-trainer/trainer-category/trainer-category-form/trainer-category-form.component";


export function AppRoute(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}></Route> 
            <Route path="/admin/trainer/category" element={<TrainerDetailsForm/>}></Route>
            <Route path="/admin/trainer/approve" element={<StudentDetailsView/>}></Route>
            <Route path="/student/login" element={<StudentLogin/>}></Route>
            {/* <Route path="/student/registration" element={<StudentRegistration/>}></Route> */}
            <Route path="/student/course" element={<CourseDetails/>}></Route>
            <Route path="/student/details" element={<StudentDetailsView/>}></Route>
            <Route path="/registration-create" element={<RegistrationDetails/>}></Route>
        </Routes>
    )
}
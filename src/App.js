import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home"

import Module from "./components/courses/Module.js";
import Courses from "./components/courses/Courses.js";
import Login from "./components/login/Login.js";
import SignUp from "./components/signup/SignUp.js";
import Profile  from "./components/profile/Profile.js";
import Payment from "./components/payment/Payment.js";
import Course2 from "./components/profile/my_courses/course-2/Course-2.js";
export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/course-2" element={<Course2/>}/>
        <Route path="/courses/:id" element={<Courses />} />
      </Routes>
    </div>
  );
}


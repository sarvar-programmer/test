import React,{useState} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {JournalBookmarkFill,CollectionFill,AwardFill,CreditCard2FrontFill} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import Logo from "../../assets/logo.jpg";
import MyCourses from "./my_courses/MyCourses";
import Payments from "./payments/Payments";
import AllCourses from ".//../all_courses/AllCourses";
import Course2 from "./my_courses/course-2/Course-2";


function Profile() {
  const [active, setActive] = useState("myCourses");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const renderContent = () => {
    switch(active) {
      case "myCourses":
        return <MyCourses onOpenCourse={(course) => {
        setSelectedCourse(course);
        setActive("course-2");
      }} />;
      case "course-2":{
        return <Course2 course={selectedCourse} onBack={() => setActive("myCourses")} />;
      }
      case "payments": {
        return <Payments/>
      }
      case "allCourses": {
        return <AllCourses/>
      }
      default : {
        return <MyCourses/>
      }
    }
  }
  return (
    <Container fluid className="profile-container">
      <Row>
        {/* Chap panel */}
        <Col md={2} className="sidebar">
        <div className="scrol_left">
          <div className="logo-section d-flex align-items-center">
            <img
              src={Logo}
              alt="logo"
              className="logo"
            />
            <h6>SMART OLAM</h6>
          </div>
          <div className="menu">
            <p className="active-menu">
              <JournalBookmarkFill/> <span className={`ms-1 ${active === "myCourses" ? "changeColor" : ""}`}  onClick={() => setActive("myCourses")}>Mening kurslarim</span>
            </p>
            <p className="active-menu mt-4">
              <CollectionFill/> <span className={`ms-1 ${active === "allCourses" ? "changeColor" : ""}`}  onClick={() => setActive("allCourses")}>Barcha kurslar</span> 
            </p>
            <p className="active-menu mt-4">
              <AwardFill/> <span className={`ms-1 ${active === "certificates" ? "changeColor" : ""}`}  onClick={() => setActive("certificates")}>Sertifikatlarim</span> 
            </p>
            <p className="active-menu mt-4">
              <CreditCard2FrontFill/> <span className={`ms-1 ${active === "payments" ? "changeColor" : ""}`}  onClick={() => setActive("payments")}>To‘lovlar</span> 
            </p>
          </div>
        </div>
          
        </Col>
        

        {/* Asosiy kontent */}
        <Col md={10} className="main-content">
          <div className="top-bar">
            <div className="user-info">
              <span>Alisher Hakimov</span>
              <div className="status-dot"></div>
            </div>
          </div>

          <Row className="courses">
             {renderContent()}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

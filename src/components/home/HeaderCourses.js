import { Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import logo from "../../assets/logo.jpg";
import "./HeaderCourses.css";

export default function HeaderCourses() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  // 🔹 Mock kurslar (backend yo‘qligi uchun)
  const courses = [
    {
    id: 1,
    title: "Frontend",
    duration: "6 oy",
    headerImage: logo,
  },
  {
    id: 2,
    title: "Frontend",
    duration: "7 oy",
    headerImage: logo,
  },
  {
    id: 3,
    title: "Frontend",
    duration: "5 oy",
    headerImage: logo,
  },
  {
    id: 4,
    title: "Frontend",
    duration: "4 oy",
    headerImage: logo,
  },
  {
    id: 5,
    title: "Frontend",
    duration: "3 oy",
    headerImage: logo,
  },
  {
    id: 6,
    title: "Frontend",
    duration: "8 oy",
    headerImage: logo,
  },
  {
    id: 7,
    title: "Frontend",
    duration: "6 oy",
    headerImage: logo,
  },
  {
    id: 8,
    title: "Frontend",
    duration: "6 oy",
    headerImage: logo,
  },
  {
    id: 9,
    title: "Frontend",
    duration: "6 oy",
    headerImage: logo,
  },
  {
    id: 10,
    title: "Kompyuter",
    duration: "6 oy",
    headerImage: logo,
  },
  {
    id: 11,
    title: "Backend",
    duration: "5 oy",
    headerImage: logo,
  },
  {
    id: 12,
    title: "Frontend",
    duration: "6 oy",
    headerImage:  logo,
  },
  ];

  const handleCardClick = (course) => {
    navigate("/courses", {state:{course}});
    window.scrollTo(0,0)
  };

  return (
    <Container className="header_courses" fluid>
      <Row>
        {courses.map((course, i) => (
          <Col
            key={course.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            className="course mb-4 course-item"
            data-index={i}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="d-flex align-items-center"
                onClick={()=> handleCardClick(course)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={course.headerImage}
                  alt={course.title}
                  rounded
                  className="me-2"
                />
                <div>
                  <p>{course.title} kursi</p>
                  <p>Davomiyligi {course.duration}</p>
                </div>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

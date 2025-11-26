import { Container, Row, Col, Card } from "react-bootstrap";
import { MdStarRate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./AllCourses.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function AllCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  // ✅ faqat shu joy ishlatiladi (statik ma’lumot)
  const coursesData = [
    { id: 1, title: "Frontend", duration: "6" },
    { id: 2, title: "Frontend", duration: "7" },
    { id: 3, title: "Frontend", duration: "5" },
    { id: 4, title: "Frontend", duration: "4" },
    { id: 5, title: "Frontend", duration: "3" },
    { id: 6, title: "Frontend", duration: "8" },
    { id: 7, title: "Frontend", duration: "6" },
    { id: 8, title: "Frontend", duration: "6" },
    { id: 9, title: "Frontend", duration: "6" },
    { id: 10, title: "Frontend", duration: "6" },
    { id: 11, title: "Frontend", duration: "6" },
    { id: 12, title: "Frontend", duration: "6" },
  ];
  const handleClick = (course) => {
    navigate("/courses", { state: { course } });
    window.scrollTo(0, 0);
  };

  return (
    <Container fluid className="allcourses">
      <Row>
        <Col>
          <p className="allcourses_title" data-aos="fade-down">
            Barcha kurslar -
          </p>
        </Col>
      </Row>
      <Row className="g-3">
        {coursesData.slice(0, 6).map((course, index) => (
          <Col
            key={course.id}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            className="course_col"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="p-3 h-100 cards"
                onClick={() => handleClick(course)}
              >
                <MdStarRate className="star" />
                <p className="course_title">{course.title} kursi</p>
                <p className="duration text-end">
                  Davomiyligi : &nbsp;{course.duration} oy
                </p>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

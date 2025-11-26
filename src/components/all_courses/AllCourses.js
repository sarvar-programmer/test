import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AllCourses.css";

export default function AllCourses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleOpenCourse = (course) => {
  navigate(`/courses/${course.id}`, {
    state: { courseName: course.name },
  });
};;

  useEffect(() => {
    setTimeout(() => {
      setCourses([
        { id: 1, name: "Frontend Development", status: "active" },
        { id: 2, name: "Backend (Node.js)", status: "active" },
        { id: 3, name: "Kompyuter savodxonligi", status: "purchased" },
        { id: 4, name: "Logistika Asoslari", status: "active" },
        { id: 5, name: "Ingliz tili A1", status: "active" },
        { id: 6, name: "Grafik Dizayn (Photoshop)", status: "active" },
        { id: 7, name: "SMM Menejeri", status: "purchased" },
        { id: 8, name: "Python Asoslari", status: "active" },
        { id: 9, name: "Fullstack Bootcamp", status: "active" },
        { id: 10, name: "3D Max Modellashtirish", status: "purchased" },
        { id: 11, name: "Mobil Dasturlash (Flutter)", status: "active" },
        { id: 12, name: "Kiberxavfsizlik Asoslari", status: "active" },
        { id: 13, name: "Data Science Kirish", status: "active" },
        { id: 14, name: "Web Dizayn (Figma)", status: "purchased" },
        { id: 15, name: "Java Backend Asoslari", status: "active" },
        { id: 16, name: "Matematika Asoslari", status: "active" },
        { id: 17, name: "SEO Marketing", status: "purchased" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="success" />
        <p className="mt-2">Yuklanmoqda...</p>
      </div>
    );
  }

  return (
    <div>
      <h4 className="fw-bold mb-4">BARCHA KURSLAR</h4>
      <Row>
        {courses.map((course) => (
          <Col md={6} sm={6} xs={12} className="p-4" key={course.id}>
            <Card className="course_card text-center">
              <Card.Body>
                <div
                  className="course_circle  d-flex align-items-center justify-content-center"
                >
                  {course.name.length > 17
                    ? course.name.slice(0, 13) + "..."
                    : course.name}
                </div>

                <Button
                  variant="link"
                  className="mt-2 course_btn"
                  onClick={() => handleOpenCourse(course)}
                >
                  Kursni ko'rish
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
